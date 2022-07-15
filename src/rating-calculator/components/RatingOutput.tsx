import React, {useEffect, useMemo, useRef} from 'react';

import {DxVersion} from '../../common/game-version';
import {Language} from '../../common/lang';
import {useLanguage} from '../../common/lang-react';
import {SongProperties} from '../../common/song-props';
import {getCandidateCharts, getNotPlayedCharts} from '../candidate-songs';
import {getNumOfTopNewCharts, getNumOfTopOldCharts} from '../rating-analyzer';
import {calculateMaxRating} from '../rating-functions';
import {ChartRecordWithRating, GameRegion, RatingData} from '../types';
import {RatingDetails} from './RatingDetails';
import {RatingOverview} from './RatingOverview';
import {RecommendedLevels} from './RecommendedLevels';

const MessagesByLang = {
  [Language.en_US]: {
    analysisResult: "Analysis Result",
  },
  [Language.zh_TW]: {
    analysisResult: "分析結果",
  },
};

const NEW_CANDIDATE_SONGS_POOL_SIZE = 100;
const OLD_CANDIDATE_SONGS_POOL_SIZE = 250;

interface Props {
  gameRegion: GameRegion;
  gameVer: DxVersion;
  songPropsByName: Map<string, ReadonlyArray<SongProperties>>;
  ratingData: RatingData;
  playerGradeIndex: number;
  playerName: string | null;
  oldSongs?: ReadonlyArray<SongProperties>;
  newSongs?: ReadonlyArray<SongProperties>;
}

interface State {
  newCandidateCharts: ReadonlyArray<ChartRecordWithRating>;
  oldCandidateCharts: ReadonlyArray<ChartRecordWithRating>;
  notPlayedNewCharts?: ReadonlyArray<ChartRecordWithRating>;
  notPlayedOldCharts?: ReadonlyArray<ChartRecordWithRating>;
  maxNewChartsRating?: number;
  maxOldChartsRating?: number;
}

export const RatingOutput = ({
  gameVer,
  newSongs,
  oldSongs,
  ratingData,
  gameRegion,
  playerName,
  playerGradeIndex,
  songPropsByName,
}: Props) => {
  const state = useMemo<State>(() => {
    const {newChartRecords, newTopChartsCount, oldChartRecords, oldTopChartsCount} = ratingData;

    const newCandidateCharts = getCandidateCharts(
      gameVer,
      newChartRecords,
      newTopChartsCount,
      NEW_CANDIDATE_SONGS_POOL_SIZE
    );
    const notPlayedNewCharts = newSongs
      ? getNotPlayedCharts(
          gameVer,
          newSongs,
          newChartRecords,
          newTopChartsCount,
          NEW_CANDIDATE_SONGS_POOL_SIZE
        )
      : [];
    const oldCandidateCharts = getCandidateCharts(
      gameVer,
      oldChartRecords,
      oldTopChartsCount,
      OLD_CANDIDATE_SONGS_POOL_SIZE
    );
    const notPlayedOldCharts = oldSongs
      ? getNotPlayedCharts(
          gameVer,
          oldSongs,
          oldChartRecords,
          oldTopChartsCount,
          OLD_CANDIDATE_SONGS_POOL_SIZE
        )
      : [];

    const maxNewChartsRating = newSongs
      ? calculateMaxRating(gameVer, newSongs, getNumOfTopNewCharts())
      : 0;
    const maxOldChartsRating = oldSongs
      ? calculateMaxRating(gameVer, oldSongs, getNumOfTopOldCharts(gameVer))
      : 0;
    return {
      newCandidateCharts,
      oldCandidateCharts,
      notPlayedNewCharts,
      notPlayedOldCharts,
      maxNewChartsRating,
      maxOldChartsRating,
    };
  }, [gameVer, newSongs, oldSongs, ratingData]);

  const outputArea = useRef<HTMLDivElement>();

  useEffect(() => {
    if (outputArea.current) {
      outputArea.current.scrollIntoView({behavior: "smooth"});
    }
  });

  const {newChartsRating, newTopChartsCount, oldChartsRating, oldTopChartsCount} = ratingData;
  const {
    newCandidateCharts,
    oldCandidateCharts,
    notPlayedNewCharts,
    notPlayedOldCharts,
    maxNewChartsRating,
    maxOldChartsRating,
  } = state;
  const messages = MessagesByLang[useLanguage()];
  return (
    <div className="outputArea" ref={outputArea}>
      <h2 id="outputHeading">
        {messages.analysisResult}
        {playerName ? ` - ${playerName}` : null}
      </h2>
      <RatingOverview
        gameVer={gameVer}
        newChartsRating={newChartsRating}
        newChartsMaxRating={maxNewChartsRating}
        newTopChartsCount={newTopChartsCount}
        oldChartsRating={oldChartsRating}
        oldChartsMaxRating={maxOldChartsRating}
        oldTopChartsCount={oldTopChartsCount}
        playerGradeIndex={gameVer > DxVersion.SPLASH ? 0 : playerGradeIndex}
      />
      <RecommendedLevels
        gameRegion={gameRegion}
        gameVer={gameVer}
        newChartsRating={newChartsRating}
        newTopChartsCount={newTopChartsCount}
        oldChartsRating={oldChartsRating}
        oldTopChartsCount={oldTopChartsCount}
      />
      <RatingDetails
        gameVer={gameVer}
        songPropsByName={songPropsByName}
        newCandidateCharts={newCandidateCharts}
        oldCandidateCharts={oldCandidateCharts}
        notPlayedNewCharts={notPlayedNewCharts}
        notPlayedOldCharts={notPlayedOldCharts}
        ratingData={ratingData}
      />
      <hr className="sectionSep" />
    </div>
  );
};
