import React, { useEffect, useState } from 'react';
import './DatesAddAndSubtract.scss';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {}
export const DatesAddAndSubtract = (props: Props) => {
  const periodTypeList: Array<string> = [
    'milliseconds',
    'seconds',
    'minutes',
    'hours',
    'days',
    'weeks',
    'months',
    'years'
  ];
  // const chromeDateFormat = 'yyyy-MM-DD';
  const chromeDateFormat = 'yyyy-MM-DDThh:mm';
  const dateFormat = 'DD/MM/yyyy';
  const textFormat = 'dddd, MMMM Do YYYY, h:mm:ss a';

  const [startDate, setStartDate] = useState(moment().format(chromeDateFormat));
  const [periodType, setPeriodType] = useState(periodTypeList[4]);
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState();
  const [resultText, setResultText] = useState();

  useEffect(() => {
    calculate();
  });

  const calculate = () => {
    let resultDate = null;
    let resultString = null;
    if(startDate && amount !== null && amount !== undefined) {
      const resultMoment = moment(startDate, chromeDateFormat).add(amount, periodType as any);
      resultDate = resultMoment.format(dateFormat);
      resultString = resultMoment.format(textFormat);
    }
    setResult(resultDate);
    setResultText(resultString);
  };

  const resetField = () => {
    setStartDate(moment().format(chromeDateFormat));
  };

  const resetTime = () => {
    setStartDate(`${ startDate.split('T')[0] }T00:00`);
  };

  return (
    <div className="DatesAddAndSubtract">
      <button onClick={ resetField }>
        <FontAwesomeIcon icon="backspace"/>&nbsp;<span>Reset field</span>
      </button>

      <button onClick={ resetTime }>
        <FontAwesomeIcon icon="clock"/>&nbsp;<span>Reset time</span>
      </button>

      <input type="datetime-local" name="start-date" value={ startDate } onChange={ (e) => {
        setStartDate(e.target.value);
      } }/>
      <div className="period-container">
        <input type="number" name="amount" placeholder="amount" value={ amount } onChange={ (e) => {
          setAmount(parseInt(e.target.value, 10));
        } }/>
        <select name="period-type" value={ periodType } onChange={ (e) => {
          setPeriodType(e.target.value);
        } }>
          {
            periodTypeList.map((period, index) => (
              <option key={ index } value={ period }>{ period }</option>
            ))
          }
        </select>
      </div>

      <div className="result">
        DATE: <b>{ result }</b>
      </div>
      <div className="result--text">
        { resultText }
      </div>
    </div>
  );
};
