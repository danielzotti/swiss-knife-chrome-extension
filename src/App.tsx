import React from 'react';
import './App.scss';
import { CaseConverter } from './components/case-converter/CaseConverter';
import { Tabs } from './components/tabs/Tabs';
import { Tab } from './components/tabs/Tab';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faBackspace } from '@fortawesome/free-solid-svg-icons';
import { Notepad } from './components/notepad/Notepad';
import { DatesDifference } from './components/dates/DatesDifference';
import { DatesAddAndSubtract } from './components/dates/DatesAddAndSubtract';

library.add(fab, faCheckSquare, faCoffee, faBackspace);

function App(data: any) {
  return (
    <div className="App">
      <Tabs scope="App">
        <Tab title="Case Converter">
          <CaseConverter/>
        </Tab>
        <Tab title="Notepad">
          <Notepad/>
        </Tab>
        <Tab title="Dates">
          <Tabs scope="Dates">
            <Tab title="Difference">
              <DatesDifference/>
            </Tab>
            <Tab title="Add & Subtract">
              <DatesAddAndSubtract/>
            </Tab>
          </Tabs>
        </Tab>
        <Tab title="Future develoment">
          <ul>
            <li>Stopwatch</li>
            <li>Countdown</li>
            <li>More calculations with dates</li>
            <li>Words/Characters counter</li>
            <li>...</li>
          </ul>
        </Tab>
      </Tabs>
      <div className="by">
        <a href="https://github.com/danielzotti/swiss-knife-chrome-extension/tree/v1.1.0"
           target="_blank">v1.1.0</a>&nbsp; by <a href="https://www.danielzotti.it" target="_blank">Daniel Zotti</a>
      </div>
    </div>
  );
}

export default App;
