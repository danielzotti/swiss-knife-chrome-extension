import React, { useEffect, useState } from 'react';
import './DatesAddAndSubtract.scss';
import moment from 'moment';

type Props = {}
export const DatesAddAndSubtract = (props: Props) => {
  const periodTypeList = [
    'milliseconds',
    'seconds',
    'minutes',
    'hours',
    'days',
    'weeks',
    'months',
    'years'
  ];
  const chromeDateFormat = 'yyyy-MM-DD';
  const dateFormat = 'DD/MM/yyyy';

  const [startDate, setStartDate] = useState(moment().format(chromeDateFormat));
  const [periodType, setPeriodType] = useState(periodTypeList[4]);
  const [amount, setAmount] = useState(10);
  const [result, setResult] = useState();

  // const locale = (window.navigator as any)?.userLanguage || window.navigator.language;
  // moment.locale(locale);

  useEffect(() => {
    calculate();
  });

  const calculate = () => {
    let result = null;
    if(startDate && amount) {
      result = moment(startDate, chromeDateFormat).add(amount, periodType as any).format(dateFormat);
    }
    setResult(result);
  };

  return (
    <div className="DatesAddAndSubtract">
      <div className="dates-container">
        <input type="date" name="startDate" value={ startDate } onChange={ (e) => {
          setStartDate(e.target.value);
        } }/>
        <input type="number" value={ amount } onChange={ (e) => {
          setAmount(parseInt(e.target.value, 10));
        } }/>
        <select value={ periodType } onChange={ (e) => {
          setPeriodType(e.target.value);
        } }>
          {
            periodTypeList.map((period, index) => (
              <option key={ index } value={ period }>{ period }</option>
            ))
          }
        </select>
      </div>
      <div className="results">
        <ul>
          <li>result: { result }</li>
        </ul>
      </div>
    </div>
  );
};
