import React from 'react';

import {LvLabel} from './LvLabel';
import {LvRankRatingSegment} from './LvRankRatingSegment';
import {RankRangeDef} from './types';

interface LvRatingContainerProps {
  canZoomIn: boolean;
  lvTitle: string;
  minLv: number;
  maxLv: number;
  ranks: ReadonlyArray<RankRangeDef>;
  heightUnit: number;
  containerHeight: number;
  onZoomIn: (minLv: number, maxLv: number) => void;
  highlightInterval: (min: number, max: number) => void;
}

export class LvRatingContainer extends React.PureComponent<LvRatingContainerProps> {
  render() {
    const {canZoomIn, lvTitle, minLv, maxLv, heightUnit, containerHeight, ranks} = this.props;
    const style = {
      height: containerHeight + "px",
    };
    return (
      <div className="lvRatingContainer" style={style}>
        <LvLabel title={lvTitle} onClick={this.handleLabelClick} canZoomIn={canZoomIn} />
        {heightUnit
          ? ranks.map((rank) => (
              <LvRankRatingSegment
                key={rank.title}
                minLv={minLv}
                maxLv={maxLv}
                minAchv={rank.minAchv}
                maxAchv={rank.maxAchv}
                rankFactor={rank.rankFactor}
                heightUnit={heightUnit}
                title={rank.title}
                highlightInterval={this.props.highlightInterval}
              />
            ))
          : null}
      </div>
    );
  }

  private handleLabelClick = () => {
    const {minLv, maxLv} = this.props;
    this.props.onZoomIn(minLv, maxLv);
  };
}
