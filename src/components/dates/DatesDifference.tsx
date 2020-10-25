import React, { useEffect, useState } from 'react';
import './DatesDifference.scss';
import moment from 'moment';

type Props = {}
export const DatesDifference = (props: Props) => {
  const chromeDateFormat = 'yyyy-MM-DD';
  const [startDate, setStartDate] = useState(moment().format(chromeDateFormat));
  const [endDate, setEndDate] = useState(moment().format(chromeDateFormat));
  const [days, setDays] = useState();
  const [weeks, setWeeks] = useState();
  const [months, setMonths] = useState();
  const [years, setYears] = useState();

  useEffect(() => {
    calculate();
  });

  const calculate = () => {
    let days = null;
    let weeks = null;
    let months = null;
    let years = null;
    if(startDate && endDate) {
      days = moment(endDate, chromeDateFormat).diff(moment(startDate, chromeDateFormat), 'd', true);
      weeks = moment(endDate, chromeDateFormat).diff(moment(startDate, chromeDateFormat), 'w', true);
      months = moment(endDate, chromeDateFormat).diff(moment(startDate, chromeDateFormat), 'M', true);
      years = moment(endDate, chromeDateFormat).diff(moment(startDate, chromeDateFormat), 'y', true);
    }
    setDays(days);
    setWeeks(weeks);
    setMonths(months);
    setYears(years);
  };

  return (
    <div className="DatesDifference">
      <div className="dates-container">
        <input type="date" name="startDate" value={ startDate } onChange={ (e) => {
          setStartDate(e.target.value);
        } }/>
        <input type="date" name="endDate" value={ endDate } onChange={ (e) => {
          setEndDate(e.target.value);
        } }/>
      </div>
      <div className="results">
        <ul>
          <li>days: { days?.toFixed(2) }</li>
          <li>weeks: { weeks?.toFixed(2) }</li>
          <li>months: { months?.toFixed(2) }</li>
          <li>years: { years?.toFixed(2) }</li>
        </ul>
      </div>
    </div>
  );
};
