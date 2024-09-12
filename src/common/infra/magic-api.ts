import {addToCache, cached, expireCache} from '../cache';
import {DIFFICULTIES} from '../difficulties';
import {GameVersion} from '../game-version';
import {normalizeSongName} from '../song-name-helper';
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
    'aHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9teWppYW4vZWU1NjlkNzRmNDIyZDRlMjU1MDY1ZDhiMDJlYTI5NGEvcmF3Lw==',
  [GameVersion.FESTiVAL]:
    'aHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9teWppYW4vMDg1NWM4OTQ3YjU0N2Q3YjliODg4MTU4NTEyZGRlNjkvcmF3Lw==',
  [GameVersion.FESTiVAL_PLUS]:
    'aHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9teWppYW4vYWQyNjg1ODcyZmQ3ZjVjZDdhNDdlY2IzNDA1MTRlNmIvcmF3Lw==',
  [GameVersion.BUDDiES]:
    'aHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9teWppYW4vZThkOGJiMjcyZjMyYzJjOGE2ODU0MTQzZGUxY2FhZDEvcmF3Lw==',
  [GameVersion.BUDDiES_PLUS]:
    'aHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9teWppYW4vZjA1OTMzMWViOWRhZWZlYjBkYzU3Y2UxNWU2ZjczZTkvcmF3Lw==',
  [GameVersion.PRiSM]: null,
};

const FALLBACK_VERSION = GameVersion.BUDDiES_PLUS;

// If the value is true, we assume it is SongProperties[] stored as JSON.
const MagicIsParsed: Record<GameVersion, boolean> = {
  [GameVersion.FiNALE]: false,
  [GameVersion.DX]: false,
  [GameVersion.UNIVERSE_PLUS]: false,
  [GameVersion.FESTiVAL]: false,
  [GameVersion.FESTiVAL_PLUS]: false,
  [GameVersion.BUDDiES]: true,
  [GameVersion.BUDDiES_PLUS]: true,
  [GameVersion.PRiSM]: false,
};

const DX_REGEX = /\bdx\s*:\s*([0-9]+)/;
const LV_REGEX = /\blv\s*:\s*(\[.+?\])/;
const VERSION_REGEX = /\bv\s*:\s*(-?[0-9]+)/;
const SONGNAME_REGEX = /\bn\s*:\s*["'`](.+?)["'`]\s*[,\}]/;
const SONGNICKNAME_REGEX = /\bnn\s*:\s*["'`](.+?)["'`]\s*[,\}]/;
const ICO_REGEX = /\bico\s*:\s*["`]([0-9a-z]+)["`]/;

export class MagicApi {
  /**
   * Parse song properties from text.
   *
   * Example text format:
   * {dx:0, v: 2, lv:[4.0, 6.0, 8.8, 10.9, 12.3], n:"Bad Apple!! feat nomico", nn:"Bad Apple!!"},
   * {dx:1, v:13, lv:[3.0, 7.0, 9.2, 11.8, 0], n:"METEOR"},
   */
  private parseLine(line: string): SongProperties | undefined {
    const dxMatch = line.match(DX_REGEX);
    const lvMatch = line.match(LV_REGEX);
    const debutVerMatch = line.match(VERSION_REGEX);
    const songNameMatch = line.match(SONGNAME_REGEX);
    const nicknameMatch = line.match(SONGNICKNAME_REGEX);
    const icoMatch = line.match(ICO_REGEX);
    if (dxMatch && lvMatch && debutVerMatch && songNameMatch) {
      let lvList = JSON.parse(lvMatch[1]) as number[];
      if (lvList.length > DIFFICULTIES.length) {
        const newReMasterLv = lvList.pop()!;
        lvList[DIFFICULTIES.length - 1] = newReMasterLv;
      }
      const props: SongProperties = {
        dx: parseInt(dxMatch[1]) as 0 | 1,
        lv: lvList,
        debut: Math.abs(parseInt(debutVerMatch[1])),
        name: normalizeSongName(songNameMatch[1]),
      };
      if (nicknameMatch) {
        props.nickname = nicknameMatch[1];
      }
      if (icoMatch) {
        props.ico = icoMatch[1];
      }
      return props;
    }
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
    const text = await res.text();
    return text
      .split('\n')
      .map(this.parseLine)
      .filter((props) => props != null);
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
