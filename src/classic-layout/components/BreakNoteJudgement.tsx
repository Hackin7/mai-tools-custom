import React from 'react';

import {JudgementDisplayMap} from '../types';
import {getLastColumnText, NoteJudgement} from './NoteJudgement';

interface BreakNoteJudgementProps {
  judgements: JudgementDisplayMap;
  loss: JudgementDisplayMap;
  distribution: Map<number, number>;
  lastColumn: {score: number | string; isMax: boolean};
  isDxMode: boolean;
  showDetail: boolean;
}
export class BreakNoteJudgement extends React.PureComponent<BreakNoteJudgementProps> {
  render() {
    const {judgements, distribution, lastColumn, loss, isDxMode, showDetail} = this.props;
    const scoreClass = lastColumn.isMax ? 'score maxScore' : 'score';
    if (showDetail) {
      return (
        <tr>
          <th className="rowHead">Break</th>
          <td className="perfect">
            {distribution.get(2600)}-{distribution.get(2550)}-{distribution.get(2500)}
            <p>{loss.perfect}</p>
          </td>
          <td className="great">
            {distribution.get(2000)}-{distribution.get(1500)}-{distribution.get(1250)}
            <p>{loss.great}</p>
          </td>
          <td className="good">
            {distribution.get(1000)}
            <p>{loss.good}</p>
          </td>
          <td className="miss">
            {distribution.get(0)}
            <p>{loss.miss}</p>
          </td>
          <td className={scoreClass}>{getLastColumnText(lastColumn.score, isDxMode)}</td>
        </tr>
      );
    } else {
      return (
        <NoteJudgement
          noteType="break"
          judgements={judgements}
          loss={loss}
          lastColumn={lastColumn}
          isDxMode={isDxMode}
          showDetail={showDetail}
        />
      );
    }
  }
}
