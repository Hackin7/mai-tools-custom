import React from 'react';

import {SongProperties} from '../../common/song-props';
import {getCandidateSongs} from '../candidate-songs';
import {UIString} from '../i18n';
import {RatingData} from '../types';
import {CandidateChartRecords} from './CandidatesChartRecords';
import {ChartRecordSectionTitle} from './ChartRecordSectionTitle';
import {RatingOverview} from './RatingOverview';
import {RecommendedLevels} from './RecommendedLevels';
import {TopChartRecords} from './TopChartRecords';

const NEW_CANDIDATE_SONGS_POOL_SIZE = 40;
const OLD_CANDIDATE_SONGS_POOL_SIZE = 60;

interface Props {
  songPropsByName: Map<string, ReadonlyArray<SongProperties>>;
  ratingData: RatingData;
  playerGradeIndex: number;
  playerName: string | null;
}

interface State {
  hideNewTopSongs: boolean;
  hideOldTopSongs: boolean;
  hideNewCandidateSongs: boolean;
  hideOldCandidateSongs: boolean;
}

export class RatingOutput extends React.PureComponent<Props, State> {
  private outputArea = React.createRef<HTMLDivElement>();

  state: State = {
    hideNewTopSongs: false,
    hideOldTopSongs: false,
    hideNewCandidateSongs: false,
    hideOldCandidateSongs: false,
  };

  componentDidMount() {
    if (this.outputArea.current) {
      this.outputArea.current.scrollIntoView({behavior: "smooth"});
    }
  }

  render() {
    const {playerName, playerGradeIndex, songPropsByName} = this.props;
    const {
      newChartRecords,
      newChartsRating,
      newTopChartsCount,
      oldChartRecords,
      oldChartsRating,
      oldTopChartsCount,
    } = this.props.ratingData;
    const {
      hideNewCandidateSongs,
      hideNewTopSongs,
      hideOldCandidateSongs,
      hideOldTopSongs,
    } = this.state;
    const newChartCandidates = getCandidateSongs(
      newChartRecords,
      newTopChartsCount,
      NEW_CANDIDATE_SONGS_POOL_SIZE
    );
    const oldChartCandidates = getCandidateSongs(
      oldChartRecords,
      oldTopChartsCount,
      OLD_CANDIDATE_SONGS_POOL_SIZE
    );
    return (
      <div className="outputArea" ref={this.outputArea}>
        <h2 id="outputHeading">
          {UIString.analysisResult}
          {playerName ? ` - ${playerName}` : null}
        </h2>
        <RatingOverview
          newChartsRating={newChartsRating}
          newTopChartsCount={newTopChartsCount}
          oldChartsRating={oldChartsRating}
          oldTopChartsCount={oldTopChartsCount}
          playerGradeIndex={playerGradeIndex}
        />
        <RecommendedLevels
          newChartsRating={newChartsRating}
          newTopChartsCount={newTopChartsCount}
          oldChartsRating={oldChartsRating}
          oldTopChartsCount={oldTopChartsCount}
        />
        <div className="songRecordsContainer">
          <ChartRecordSectionTitle
            title={UIString.newChartsRatingTargets}
            contentHidden={hideNewTopSongs}
            onClick={this.toggleNewTopChartsDisplay}
          />
          <TopChartRecords
            songPropsByName={songPropsByName}
            records={newChartRecords}
            limit={newTopChartsCount}
            hidden={hideNewTopSongs}
          />
        </div>
        <div className="songRecordsContainer">
          <ChartRecordSectionTitle
            title={UIString.oldChartsRatingTargets}
            contentHidden={hideOldTopSongs}
            onClick={this.toggleOldTopChartsDisplay}
          />
          <TopChartRecords
            songPropsByName={songPropsByName}
            records={oldChartRecords}
            limit={oldTopChartsCount}
            hidden={hideOldTopSongs}
          />
        </div>
        {/* TODO: filter by song name from user input */}
        <div className="songRecordsContainer">
          <ChartRecordSectionTitle
            title={UIString.newChartsRatingCandidates}
            contentHidden={hideNewCandidateSongs}
            onClick={this.toggleNewCandidateChartsDisplay}
            isCandidateList
          />
          <CandidateChartRecords
            songPropsByName={songPropsByName}
            records={newChartCandidates}
            hidden={hideNewCandidateSongs}
          />
        </div>
        <div className="songRecordsContainer">
          <ChartRecordSectionTitle
            title={UIString.oldChartsRatingCandidates}
            contentHidden={hideOldCandidateSongs}
            onClick={this.toggleOldCandidateChartsDisplay}
            isCandidateList
          />
          <CandidateChartRecords
            songPropsByName={songPropsByName}
            records={oldChartCandidates}
            hidden={hideOldCandidateSongs}
          />
        </div>
        <hr className="sectionSep" />
      </div>
    );
  }

  private toggleNewTopChartsDisplay = () => {
    this.setState((state) => ({hideNewTopSongs: !state.hideNewTopSongs}));
  };

  private toggleNewCandidateChartsDisplay = () => {
    this.setState((state) => ({hideNewCandidateSongs: !state.hideNewCandidateSongs}));
  };

  private toggleOldTopChartsDisplay = () => {
    this.setState((state) => ({hideOldTopSongs: !state.hideOldTopSongs}));
  };

  private toggleOldCandidateChartsDisplay = () => {
    this.setState((state) => ({hideOldCandidateSongs: !state.hideOldCandidateSongs}));
  };
}
