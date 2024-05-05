import React from 'react';

import {DisplayValue} from './RatingTable';

export const LEVELS: ReadonlyArray<string> = [
  '15',
  '14+',
  '14',
  '13+',
  '13',
  '12+',
  '12',
  '11+',
  '11',
  '10+',
  '10',
];

interface OptionsInputProps {
  heightUnit: number;
  minLv: string;
  maxLv: string;
  minRank: string;
  tableDisplay: DisplayValue;
  onSetRange: (minLv: string, maxLv: string) => void;
  onChangeUnit: (heightUnit: number) => void;
  onSetMinRank: (minRank: string) => void;
  onSetTableDisplay: (display: DisplayValue) => void;
}

export class OptionsInput extends React.PureComponent<OptionsInputProps> {
  render() {
    const {heightUnit, minLv, minRank, maxLv, tableDisplay} = this.props;
    return (
      <div className="optionsContainer">
        <div className="container" tabIndex={-1}>
          <span className="lvRangeLabelContainer">
            <label className="optionGroup">
              Min&nbsp;Lv:&nbsp;
              <select onChange={this.handleChangeMinLv} value={minLv}>
                {this.renderLvOptions()}
              </select>
            </label>
            <label className="optionGroup">
              Max&nbsp;Lv:&nbsp;
              <select onChange={this.handleChangeMaxLv} value={maxLv}>
                {this.renderLvOptions()}
              </select>
            </label>
          </span>
          <label className="optionGroup">
            Min Rank:&nbsp;
            <select onChange={this.handleChangeMinRank} value={minRank}>
              <option value="AAA">AAA</option>
              <option value="S">S</option>
              <option value="SS">SS</option>
              <option value="SSS">SSS</option>
            </select>
          </label>
          <br></br>
          <label className="optionGroup">
            Graph:&nbsp;
            <select onChange={this.handleChangeHeightUnit} value={heightUnit.toFixed(0)}>
              <option value="0">Hide</option>
              <option value="3">3x</option>
              <option value="4">4x</option>
              <option value="5">5x</option>
              <option value="8">8x</option>
              <option value="12">12x</option>
            </select>
          </label>
          <label className="optionGroup">
            Table values:&nbsp;
            <select onChange={this.handleChangeTableDisplay} value={tableDisplay}>
              <option value="MIN">MIN</option>
              <option value="MAX">MAX</option>
              <option value="RANGE">RANGE</option>
            </select>
          </label>
        </div>
      </div>
    );
  }

  private renderLvOptions() {
    const options: JSX.Element[] = [];
    for (let i = 0; i <= LEVELS.length; i++) {
      const lv = LEVELS[i];
      options.push(
        <option key={i} value={lv}>
          {lv}
        </option>
      );
    }
    return options;
  }

  private handleChangeMinLv = (evt: React.SyntheticEvent<HTMLSelectElement>) => {
    const minLv = evt.currentTarget.value;
    const minLvIdx = LEVELS.indexOf(minLv);
    const maxLvIdx = LEVELS.indexOf(this.props.maxLv);
    this.props.onSetRange(minLv, LEVELS[Math.min(minLvIdx, maxLvIdx)]);
  };

  private handleChangeMaxLv = (evt: React.SyntheticEvent<HTMLSelectElement>) => {
    const maxLv = evt.currentTarget.value;
    const minLvIdx = LEVELS.indexOf(this.props.minLv);
    const maxLvIdx = LEVELS.indexOf(maxLv);
    this.props.onSetRange(LEVELS[Math.max(minLvIdx, maxLvIdx)], maxLv);
  };

  private handleChangeHeightUnit = (evt: React.SyntheticEvent<HTMLSelectElement>) => {
    const unit = parseInt(evt.currentTarget.value);
    this.props.onChangeUnit(unit);
  };

  private handleChangeMinRank = (evt: React.SyntheticEvent<HTMLSelectElement>) => {
    this.props.onSetMinRank(evt.currentTarget.value);
  };

  private handleChangeTableDisplay = (evt: React.SyntheticEvent<HTMLSelectElement>) => {
    this.props.onSetTableDisplay(evt.currentTarget.value as DisplayValue);
  };
}
