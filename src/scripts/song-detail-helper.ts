import {getChartType} from '../common/chart-type';
import {determineDxStar, getDxStarText} from '../common/dx-star';
import {getGameRegionFromOrigin} from '../common/game-region';
import {GameVersion} from '../common/game-version';
import {getDisplayLv, getMinConstant} from '../common/level-helper';
import {fetchGameVersion} from '../common/net-helpers';
import {normalizeSongName} from '../common/song-name-helper';
import {loadSongDatabase, SongProperties} from '../common/song-props';

type Cache = {
  songProp?: SongProperties;
};

(function (d) {
  const cache: Cache = {};

  function addDxStarDetail(row: HTMLElement) {
    const label = row.querySelector('img.f_l');
    if (!label) {
      // do not run this function twice
      return;
    }
    label.remove();

    const [playerDxScore, maxDxScore] = row.textContent
      .split('/')
      .map((t) => parseInt(t.replace(',', '').trim()));
    const dxScoreRatio = playerDxScore / maxDxScore;
    const dxStar =
      getDxStarText(determineDxStar(dxScoreRatio), true) + ` (${(dxScoreRatio * 100).toFixed(1)}%)`;
    const dxStarBlock = d.createElement('div');
    dxStarBlock.className = 'f_l';
    dxStarBlock.append(dxStar);
    row.prepend(dxStarBlock);
  }

  async function fetchAndAddInternalLv() {
    const gameVer = await fetchGameVersion(d.body);
    const gameRegion = getGameRegionFromOrigin(d.location.origin);
    const songDb = await loadSongDatabase(gameVer, gameRegion);

    const song = getSongName();
    const genre = getSongGenre();
    const chartType = getChartType(d.body);

    const props = songDb.getSongProperties(song, genre, chartType);
    cache.songProp = props;

    // replace table song level
    Array.from(getLevelTable(), (row, idx) => {
      const levelElement = getLevelElement(row as HTMLElement);
      if (!levelElement) {
        return;
      }
      saveInLv(levelElement, coalesceInLv(gameVer, levelElement, idx, props));
    });

    // replace play history's level
    ['basic', 'advanced', 'expert', 'master', 'remaster'].forEach((rowId, idx) => {
      const row = d.querySelector(`#${rowId}`);
      if (!row) {
        return;
      }
      const levelElement = getLevelElement(row as HTMLElement);
      saveInLv(levelElement, coalesceInLv(gameVer, levelElement, idx, props));
    });
  }

  function saveInLv(levelElement: HTMLElement, lv: number) {
    if (!levelElement.dataset['inlv']) {
      levelElement.dataset['inlv'] = lv.toFixed(1);
      levelElement.innerText = getDisplayLv(lv);
    }
  }

  function coalesceInLv(
    gameVer: GameVersion,
    levelElement: HTMLElement,
    lvIndex: number,
    props?: SongProperties | null
  ) {
    const lv = props ? props.lv[lvIndex] : 0;
    return lv || -getMinConstant(gameVer, getChartLv(levelElement));
  }

  function getChartLv(levelElement: HTMLElement, key: string = 'lv'): string | undefined {
    return levelElement.dataset[key];
  }

  function getSongName(): string {
    return normalizeSongName(document.querySelector('.m_5.f_15.break').textContent);
  }

  function getSongGenre(): string {
    const elem = document.querySelector('.blue');
    return elem instanceof HTMLElement ? elem.innerText : '';
  }

  function getLevelTable(): NodeList {
    return d.querySelectorAll('.music_detail_table tr');
  }

  function getLevelElement(row: HTMLElement): HTMLDivElement {
    return row.querySelector('.music_lv_back');
  }

  const rows = d.querySelectorAll('.music_score_block.w_310') as NodeListOf<HTMLElement>;
  rows.forEach(addDxStarDetail);
  fetchAndAddInternalLv();
})(document);
