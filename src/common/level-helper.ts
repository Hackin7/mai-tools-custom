import {GameVersion} from './game-version';

export type LevelDef = {
  title: string;
  minLv: number;
  maxLv: number;
};

export const MAX_LEVEL = 15;

const MIN_LEVEL = 1;

export function getMaxMinorBeforePlus(gameVer: GameVersion): number {
  return gameVer > GameVersion.BUDDiES ? 0.5 : 0.6;
}

export function getMinMinorOfPlus(gameVer: GameVersion): number {
  return gameVer > GameVersion.BUDDiES ? 0.6 : 0.7;
}

export function getOfficialLevel(gameVer: GameVersion, level: number): string {
  const baseLevel = Math.floor(level);
  return level - baseLevel > getMaxMinorBeforePlus(gameVer)
    ? baseLevel + '+'
    : baseLevel.toString();
}

/**
 * Compute the default level based on the official level.
 * Game version before BUDDiES PLUS:
 *   Lv10 => 10.0 (actual range: 10.0 - 10.6)
 *   Lv10+ => 10.7 (actual range: 10.7 - 10.9)
 * Game version after BUDDiES PLUS:
 *   Lv10 => 10.0 (actual range: 10.0 - 10.5)
 *   Lv10+ => 10.6 (actual range: 10.6 - 10.9)
 */
export function getMinConstant(gameVer: GameVersion, officialLevel: string): number {
  if (!officialLevel) {
    return MIN_LEVEL;
  }
  const baseLevel = parseInt(officialLevel);
  return officialLevel.endsWith('+') ? baseLevel + getMinMinorOfPlus(gameVer) : baseLevel;
}

export function getMaxConstant(gameVer: GameVersion, officialLevel: string): number {
  if (!officialLevel) {
    return MIN_LEVEL;
  }
  const baseLevel = parseInt(officialLevel);
  return officialLevel.endsWith('+') ? baseLevel + 0.9 : baseLevel + getMaxMinorBeforePlus(gameVer);
}

export function getDisplayLv(internalLv: number, lvIsEstimate = false): string {
  // If internalLv is negative, we also consider it estimate.
  lvIsEstimate = lvIsEstimate || internalLv < 0;
  if (lvIsEstimate) {
    return Math.abs(internalLv).toFixed(1) + '~';
  }
  return internalLv.toFixed(1);
}

export function compareLevels(lv1: number, lv2: number): number {
  if (Math.abs(lv1) === Math.abs(lv2)) {
    return lv1 < 0 ? -1 : lv2 < 0 ? 1 : 0;
  }
  const absLv1 = Math.abs(lv1);
  const absLv2 = Math.abs(lv2);
  return absLv1 < absLv2 ? -1 : absLv2 < absLv1 ? 1 : 0;
}
