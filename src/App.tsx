import React from 'react';
import './App.scss';
import { CaseConverter } from './components/case-converter/CaseConverter';
import { Tabs } from './components/tabs/Tabs';
import { Tab } from './components/tabs/Tab';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faBackspace } from '@fortawesome/free-solid-svg-icons';
import { Notepad } from './components/notepad/Notepad';

library.add(fab, faCheckSquare, faCoffee, faBackspace);

function App(data: any) {
  return (
    <div className="App">
      <Tabs>
        <Tab title="Case Converter">
          <CaseConverter/>
        </Tab>
        <Tab title="Notepad">
          <Notepad/>
        </Tab>
      </Tabs>
      <div className="by">
        by <a href="https://www.danielzotti.it" target="_blank">Daniel Zotti</a>
      </div>
    </div>
  );
}

export default App;
