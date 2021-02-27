import {RANK_DEFINITIONS, RankDef} from '../common/rank-functions';

export function calculateRatingRange(lv: number, rank: RankDef) {
  const rankDefs = RANK_DEFINITIONS;
  const idx = rankDefs.indexOf(rank);
  const maxAchv = idx >= 1 ? rankDefs[idx - 1].th - 0.0001 : rank.th;
  const minRating = Math.floor((lv * rank.th * rank.factor) / 100);
  const maxRating = Math.floor((lv * maxAchv * rank.factor) / 100);
  return [minRating, maxRating];
}
