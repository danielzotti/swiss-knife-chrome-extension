import React, { useEffect } from 'react';
import './App.scss';
import { CaseConverter } from './components/case-converter/CaseConverter';
import { Tabs } from './shared/components/tabs/Tabs';
import { Tab } from './shared/components/tabs/Tab';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faClock, faCheckSquare, faCoffee, faBackspace } from '@fortawesome/free-solid-svg-icons';
import { Notepad } from './components/notepad/Notepad';
import { DatesDifference } from './components/dates/DatesDifference';
import { DatesAddAndSubtract } from './components/dates/DatesAddAndSubtract';
import { getItemFromLocalStorage, setItemToLocalStorage } from './services/LocalStorage';

library.add(fab, faCheckSquare, faClock, faCoffee, faBackspace);

function App(data: any) {
  const [theme, setTheme] = React.useState('light');

  const appVersion = 'v1.2.1';

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    setItemToLocalStorage('Theme', nextTheme);
  };

  useEffect(() => {
    getItemFromLocalStorage('Theme', (theme) => {
      setTheme(theme ? theme : 'light');
    });
  }, []);

  return (
    <div className={ `App ${ theme ? 'theme--' + theme : null }` }>
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
        <Tab title="Future develoments">
          <ul className="future-developments">
            <li>Stopwatch</li>
            <li>Countdown</li>
            <li>More calculations with dates</li>
            <li>Words/Characters counter</li>
            <li>...or <a href="https://github.com/danielzotti/swiss-knife-chrome-extension" target="_blank">propose
              something!</a></li>
          </ul>
        </Tab>
      </Tabs>
      <div className="by">
        <button className="btn-toggle-theme" onClick={ toggleTheme }>Toggle theme</button>
        <a href={ `https://github.com/danielzotti/swiss-knife-chrome-extension/tree/${ appVersion }` }
           target="_blank">{ appVersion }</a>&nbsp; by <a href="https://www.danielzotti.it" target="_blank">Daniel
        Zotti</a>
        <span>{process.env.REACT_APP_ENV ? ` - ${process.env.REACT_APP_ENV}` : null }</span>
      </div>
    </div>
  );
}

export default App;
