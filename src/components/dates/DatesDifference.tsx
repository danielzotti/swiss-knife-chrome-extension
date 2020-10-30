import React, { useEffect, useState } from 'react';
import './DatesDifference.scss';
import moment from 'moment';
import { DecimalNumber } from '../../shared/components/decimal-number/DecimalNumber';


type Props = {}
export const DatesDifference = (props: Props) => {
  const chromeDateFormat = 'yyyy-MM-DD';
  const [startDate, setStartDate] = useState(moment().format(chromeDateFormat));
  const [endDate, setEndDate] = useState(moment().format(chromeDateFormat));

  const resultsInit = [
    {
      name: 'days',
      unit: 'd',
      value: null
    },
    {
      name: 'weeks',
      unit: 'w',
      value: null
    },
    {
      name: 'months',
      unit: 'M',
      value: null
    },
    {
      name: 'years',
      unit: 'y',
      value: null
    }
  ];

  const [results, setResults] = useState(resultsInit);


  useEffect(() => {
    calculate();
  }, []);

  useEffect(() => {
    calculate();
  }, [startDate, endDate]);

  const calculate = () => {
    if(startDate && endDate) {
      const x: Array<any> = results.map(i => {
          const value = moment(endDate, chromeDateFormat).diff(moment(startDate, chromeDateFormat), (i.unit as any), true);
          return {
            ...i,
            value
          };
        }
      );
      setResults(x);
    }
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
        { results.map((i, index) => (
          <div className="results__item" key={ index }>
            <div className="item__name">
              { i.name }
            </div>
            <div className="item__value">
              <DecimalNumber value={ i.value } separator=","/>
            </div>
          </div>
        )) }
      </div>
    </div>
  );
};
