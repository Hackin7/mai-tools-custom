import React, {useCallback, useState} from 'react';

import {Language} from '../../common/lang';
import {useLanguage} from '../../common/lang-react';
import {CommonMessages} from '../common-messages';

const MessagesByLang = {
  [Language.en_US]: {
    internalLvHeading: 'Chart Internal Level Data',
    manualInput: 'Manual input',
  },
  [Language.zh_TW]: {
    internalLvHeading: '譜面定數',
    manualInput: '手動輸入',
  },
  [Language.ko_KR]: {
    internalLvHeading: '채보 상수 데이터',
    manualInput: '직접입력',
  },
};

export const InternalLvInput = () => {
  const [showTextarea, setShowTextarea] = useState(false);

  const handleRadioChange = useCallback((evt: React.FormEvent<HTMLInputElement>) => {
    setShowTextarea(evt.currentTarget.value === '1');
  }, []);

  const lang = useLanguage();
  const commonMessages = CommonMessages[lang];
  const messages = MessagesByLang[lang];
  return (
    <div className="w90">
      <h2 className="lvInputHeading">{messages.internalLvHeading}</h2>
      <form>
        <label className="radioLabel">
          <input
            className="radioInput"
            name="showLvInput"
            value="0"
            type="radio"
            checked={!showTextarea}
            onChange={handleRadioChange}
          />
          {commonMessages.autofill}
        </label>
        <label className="radioLabel">
          <input
            className="radioInput"
            name="showLvInput"
            value="1"
            type="radio"
            checked={showTextarea}
            onChange={handleRadioChange}
          />
          {messages.manualInput}
        </label>
      </form>
      {showTextarea && <textarea className="lvInput" />}
    </div>
  );
};
