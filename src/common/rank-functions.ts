import {MAX_LEVEL} from './level-helper';
import {roundFloat} from './number-helper';

export interface RankDef {
  minAchv: number;
  factor: number;
  title: string;
  maxAchv?: number;
  maxFactor?: number;
}

export interface RecommendedLevel {
  lv: number;
  minAchv: number;
  rating: number;
}

export const RANK_S: RankDef = {
  minAchv: 97.0,
  factor: 0.2,
  title: 'S',
};

export const RANK_SSS_PLUS: RankDef = {
  minAchv: 100.5,
  factor: 0.224,
  title: 'SSS+',
};

const RANK_DEFINITIONS: ReadonlyArray<RankDef> = [
  RANK_SSS_PLUS,
  {minAchv: 100.0, factor: 0.216, title: 'SSS', maxAchv: 100.4999, maxFactor: 0.222},
  {minAchv: 99.5, factor: 0.211, title: 'SS+', maxAchv: 99.9999, maxFactor: 0.214},
  {minAchv: 99.0, factor: 0.208, title: 'SS'},
  {minAchv: 98.0, factor: 0.203, title: 'S+', maxAchv: 98.9999, maxFactor: 0.206},
  RANK_S,
  {
    minAchv: 94.0,
    factor: 0.168,
    title: 'AAA',
    maxAchv: 96.9999,
    maxFactor: 0.176,
  },
  {minAchv: 90.0, factor: 0.152, title: 'AA'},
  {minAchv: 80.0, factor: 0.136, title: 'A'},
  {
    minAchv: 75.0,
    factor: 0.12,
    title: 'BBB',
    maxAchv: 79.9999,
    maxFactor: 0.128,
  },
  {minAchv: 70.0, factor: 0.112, title: 'BB'},
  {minAchv: 60.0, factor: 0.096, title: 'B'},
  {minAchv: 50.0, factor: 0.08, title: 'C'},
  {minAchv: 0.0, factor: 0.016, title: 'D'},
];

export function getRankDefinitions() {
  return RANK_DEFINITIONS;
}

export function getRankIndexByAchievement(achievement: number) {
  return RANK_DEFINITIONS.findIndex((rank) => {
    return achievement >= rank.minAchv;
  });
}

export function getRankByAchievement(achievement: number) {
  const idx = getRankIndexByAchievement(achievement);
  return idx < 0 ? null : getRankDefinitions()[idx];
}

export function getRankTitle(achievement: number) {
  const idx = getRankIndexByAchievement(achievement);
  return idx < 0 ? 'D' : RANK_DEFINITIONS[idx].title;
}

export function getFinaleRankTitle(achievement: number) {
  return getRankTitle(achievement).replace('SSS+', 'SSS');
}

/** Returns recommended levels by rank title */
export function calcRecommendedLevels(
  rating: number,
  ranks: RankDef[]
): Record<string, RecommendedLevel[]> {
  rating = Math.floor(rating);
  const ranksLowToHigh = ranks.slice();
  ranksLowToHigh.sort((r1, r2) => {
    return r1.minAchv < r2.minAchv ? -1 : 1;
  });
  const levelsByRank: Record<string, RecommendedLevel[]> = {};
  for (let rankIdx = 0; rankIdx < ranksLowToHigh.length; rankIdx++) {
    const r = ranksLowToHigh[rankIdx];
    levelsByRank[r.title] = [];
    const levels = levelsByRank[r.title];
    let maxLv = roundFloat(rating / r.factor / r.minAchv, 'ceil', 0.1);
    if (maxLv > MAX_LEVEL) continue;
    /* Show another 0.1 level. This is too verbose so disable it for now */
    // const previousLevels = rankIdx > 0 ? levelsByRank[ranksLowToHigh[rankIdx - 1].title] : [];
    // if (previousLevels.length && maxLv + 0.1 < previousLevels[previousLevels.length - 1].lv) {
    //   maxLv += 0.1;
    // }
    // NOTE(myjian): ignore r.maxAchv and r.maxFactor because it makes levels unnecessarily long
    const maxAchv =
      rankIdx + 1 < ranksLowToHigh.length
        ? ranksLowToHigh[rankIdx + 1].minAchv - 0.0001
        : r.minAchv;
    while (Math.floor(maxLv * r.factor * maxAchv) >= rating) {
      const minAchv = Math.max(roundFloat(rating / r.factor / maxLv, 'ceil', 0.0001), r.minAchv);
      levels.push({
        lv: maxLv,
        minAchv,
        rating: Math.floor(maxLv * r.factor * minAchv),
      });
      maxLv -= 0.1;
    }
    levels.reverse();
  }
  return levelsByRank;
}