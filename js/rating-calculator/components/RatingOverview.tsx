import React from 'react';

import {getGradeByIndex} from '../grade';
import {UIString} from '../i18n';

interface Props {
  oldChartsRating: number;
  oldTopChartsCount: number;
  newChartsRating: number;
  newTopChartsCount: number;
  playerGradeIndex: number;
}

export class RatingOverview extends React.PureComponent<Props> {
  render() {
    const {
      oldChartsRating,
      oldTopChartsCount,
      newChartsRating,
      newTopChartsCount,
      playerGradeIndex,
    } = this.props;
    let totalRating = newChartsRating + oldChartsRating;
    const playerGrade = playerGradeIndex > 0 ? getGradeByIndex(playerGradeIndex) : null;
    if (playerGrade) {
      totalRating += playerGrade.bonus;
    }
    return (
      <div className="ratingOverview">
        <div className="totalRatingRow">
          Rating： <span>{totalRating}</span>
        </div>
        <table className="ratingOverviewTable">
          <tbody>
            <tr>
              <td>{UIString.newChartsRating}</td>
              <td className="columnColumn">{UIString.column}</td>
              <td className="subRatingColumn">{newChartsRating}</td>
              <td className="avgRatingColumn">
                ({UIString.average}
                {UIString.column} {this.getAvg(newChartsRating, newTopChartsCount)})
              </td>
            </tr>
            <tr>
              <td>{UIString.oldChartsRating}</td>
              <td>{UIString.column}</td>
              <td className="subRatingColumn">{oldChartsRating}</td>
              <td className="avgRatingColumn">
                ({UIString.average}
                {UIString.column} {this.getAvg(oldChartsRating, oldTopChartsCount)})
              </td>
            </tr>
            {playerGrade && (
              <tr>
                <td>
                  {UIString.grade} (<span>{playerGrade.title}</span>)
                </td>
                <td>{UIString.column}</td>
                <td className="subRatingColumn">{playerGrade.bonus}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }

  private getAvg(sum: number, count: number) {
    return count ? (sum / count).toFixed(0) : 0;
  }
}
