import React, { useEffect } from 'react';
import './App.scss';
import { CaseConverter } from './components/case-converter/CaseConverter';
import { Tabs } from './shared/components/tabs/Tabs';
import { Tab } from './shared/components/tabs/Tab';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faBackspace } from '@fortawesome/free-solid-svg-icons';
import { Notepad } from './components/notepad/Notepad';
import { DatesDifference } from './components/dates/DatesDifference';
import { DatesAddAndSubtract } from './components/dates/DatesAddAndSubtract';
import { getItemFromLocalStorage, setItemToLocalStorage } from './services/LocalStorage';

library.add(fab, faCheckSquare, faCoffee, faBackspace);

function App(data: any) {
  const [currentTheme, setTheme] = React.useState('light');

  const lightTheme = {
    '--primary-default-bg': '#FFF',
    '--primary-default-text': '#000',
    '--primary': '#1976d2',
    '--primary-light': '#63a4ff',
    '--primary-extra-light': '#d0e6fb',
    '--primary-dark': '#004ba0',
    '--primary-text': '#FFF',
    '--secondary': '#fdd835',
    '--secondary-light': '#ffff6b',
    '--secondary-dark': '#c6a700',
    '--secondary-text': '#000'
  };
  const darkTheme = {
    '--primary-default-bg': '#212121',
    '--primary-default-text': '#FFF',
    '--primary': '#1976d2',
    '--primary-light': '#484848',
    '--primary-extra-light': '#909090',
    '--primary-dark': '#000000',
    '--primary-text': '#FFF',
    '--secondary': '#607d8b',
    '--secondary-light': '#8eacbb',
    '--secondary-dark': '#34515e',
    '--secondary-text': '#000'
  };

  const toggleTheme = () => {
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  const applyTheme = (nextTheme: string) => {
    const theme: any = nextTheme === 'dark' ? darkTheme : lightTheme;
    setItemToLocalStorage('Theme', nextTheme);
    Object.keys(theme).map((key: string) => {
      const value: string = theme[key];
      document.documentElement.style.setProperty(key, value);
    });
  };

  useEffect(() => {
    getItemFromLocalStorage('Theme', (theme) => {
      setTheme(theme ? theme : 'light');
      applyTheme(theme ? theme : 'light');
    });
  },[]);

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
        <button className="btn-toggle-theme" onClick={ toggleTheme }>Toggle theme</button>
        <a href="https://github.com/danielzotti/swiss-knife-chrome-extension/tree/v1.1.0"
           target="_blank">v1.1.0</a>&nbsp; by <a href="https://www.danielzotti.it" target="_blank">Daniel Zotti</a>
      </div>
    </div>
  );
}

export default App;
