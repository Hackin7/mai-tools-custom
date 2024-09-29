import {addToCache, cached, expireCache} from '../cache';
import {ChartType} from '../chart-type';
import {GameVersion} from '../game-version';
import {getSongNickname, normalizeSongName} from '../song-name-helper';
import {SongProperties} from '../song-props';

const CACHE_DURATION = 24 * 60 * 60 * 1000; // 1 day
const CACHE_KEY_PREFIX = 'magicVer';
const OLD_KEYS_TO_CLEANUP = [
  'dxLv15',
  'dxLv16',
  'dxLv17',
  'dxLv18',
  'dxLv19',
  'dxLv20',
  'magicExpire',
];

const MagicSauce: Record<GameVersion, string> = {
  [GameVersion.FiNALE]: null,
  [GameVersion.DX]: null,
  [GameVersion.UNIVERSE_PLUS]:
    'aHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9teWppYW4vZWU1NjlkNzRmNDIyZDRlMjU1MDY1ZDhiMDJlYTI5NGEvcmF3L21haWR4X2x2X3VuaXZlcnNlcGx1cy5qc29u',
  [GameVersion.FESTiVAL]:
    'aHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9teWppYW4vMDg1NWM4OTQ3YjU0N2Q3YjliODg4MTU4NTEyZGRlNjkvcmF3L21haWR4X2x2X2Zlc3RpdmFsLmpzb24=',
  [GameVersion.FESTiVAL_PLUS]:
    'aHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9teWppYW4vYWQyNjg1ODcyZmQ3ZjVjZDdhNDdlY2IzNDA1MTRlNmIvcmF3L21haWR4X2x2X2Zlc3RpdmFscGx1cy5qc29u',
  [GameVersion.BUDDiES]:
    'aHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9teWppYW4vZThkOGJiMjcyZjMyYzJjOGE2ODU0MTQzZGUxY2FhZDEvcmF3Lw==',
  [GameVersion.BUDDiES_PLUS]:
    'aHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9teWppYW4vZjA1OTMzMWViOWRhZWZlYjBkYzU3Y2UxNWU2ZjczZTkvcmF3Lw==',
  [GameVersion.PRiSM]: 'aHR0cHM6Ly9kcDRwNngweGZpNW85LmNsb3VkZnJvbnQubmV0L21haW1haS9kYXRhLmpzb24=',
};

const FALLBACK_VERSION = GameVersion.BUDDiES_PLUS;

// If the value is true, we assume it is SongProperties[] stored as JSON.
const MagicIsParsed: Record<GameVersion, boolean> = {
  [GameVersion.FiNALE]: false,
  [GameVersion.DX]: false,
  [GameVersion.UNIVERSE_PLUS]: true,
  [GameVersion.FESTiVAL]: true,
  [GameVersion.FESTiVAL_PLUS]: true,
  [GameVersion.BUDDiES]: true,
  [GameVersion.BUDDiES_PLUS]: true,
  [GameVersion.PRiSM]: false,
};

interface ArcadeSongResponse {
  songs: ArcadeSong[];
  versions: ArcadeSongVersion[];
}

interface ArcadeSongVersion {
  version: string;
  abbr: string;
}

interface ArcadeSong {
  songId: string;
  category: string;
  title: string;
  version: string;
  sheets: ArcadeSongSheet[];
}

interface ArcadeSongSheet {
  type: 'std' | 'dx' | 'utage';
  difficulty: 'basic' | 'advanced' | 'expert' | 'master' | 'remaster';
  levelValue: number;
  internalLevel: string | null;
  internalLevelValue: number;
}

export class MagicApi {
  private ALLOWED_CHART_TYPES = ['std', 'dx'];

  /**
   * Parse song properties from an ArcadeSong object.
   */
  private parseSong(song: ArcadeSong, versions: string[]): SongProperties[] {
    const debutVer = versions.indexOf(song.version);
    if (debutVer < 0) {
      console.warn(`Cannot find debut version for ${song.title}.`, song);
      return [];
    }
    const propsList: SongProperties[] = [];
    this.ALLOWED_CHART_TYPES.forEach((chartType) => {
      const sheetList = song.sheets.filter((s) => s.type == chartType);
      if (sheetList.length === 0) {
        return;
      }
      if (sheetList.length < 4) {
        console.warn(`Sheet data for ${song.title} (${chartType}) is incomplete.`, sheetList);
        return;
      } else {
        console.assert(
          sheetList[0].difficulty === 'basic' &&
            sheetList[1].difficulty === 'advanced' &&
            sheetList[2].difficulty === 'expert' &&
            sheetList[3].difficulty === 'master',
          `Sheets are not ordered by difficulty`
        );
      }
      const props: SongProperties = {
        name: normalizeSongName(song.title),
        dx: chartType === 'dx' ? ChartType.DX : ChartType.STANDARD,
        debut: debutVer,
        lv: sheetList.map((sheet) =>
          sheet.internalLevel ? sheet.internalLevelValue : -sheet.levelValue
        ),
      };
      const nickname = getSongNickname(song.title, song.category);
      if (nickname !== song.title) {
        props.nickname = nickname;
      }
      propsList.push(props);
    });
    return propsList;
  }

  private async fetchMagic(gameVer: GameVersion): Promise<SongProperties[]> {
    const sauce = MagicSauce[gameVer];
    if (!sauce) {
      return this.fetchMagic(FALLBACK_VERSION);
    }
    const res = await fetch(atob(sauce));
    if (!res.ok) {
      const error = new Error(`Failed to load magic ${gameVer}`);
      console.warn(error.message);
      return Promise.reject(error);
    }
    if (MagicIsParsed[gameVer]) {
      return await res.json();
    }
    const response: ArcadeSongResponse = await res.json();
    const versions = response.versions.map((v) => v.version);
    const songs: SongProperties[] = response.songs.reduce(
      (songs, song) => songs.concat(this.parseSong(song, versions)),
      []
    );
    return songs;
  }

  async loadMagic(gameVer: GameVersion): Promise<SongProperties[]> {
    const songs = await cached<SongProperties[]>(
      CACHE_KEY_PREFIX + gameVer,
      CACHE_DURATION,
      async (expiredValue) => {
        try {
          const newValue = await this.fetchMagic(gameVer);
          addToCache(CACHE_KEY_PREFIX + gameVer, newValue, CACHE_DURATION);
          return newValue;
        } catch (err) {
          console.warn(`Use expired cached magic ${gameVer}`);
          return expiredValue;
        }
      },
      () => this.fetchMagic(gameVer).catch(() => [])
    );
    if (!songs.length) {
      expireCache(CACHE_KEY_PREFIX + gameVer);
    }
    OLD_KEYS_TO_CLEANUP.map(expireCache);
    return songs;
  }
}
