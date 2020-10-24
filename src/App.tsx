import React from 'react';
import './App.scss';
import { Casing } from './components/casing/Casing';
import { Tabs } from './components/tabs/Tabs';
import { Tab } from './components/tabs/Tab';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faBackspace } from '@fortawesome/free-solid-svg-icons';
import { Notepad } from './components/notepad/Notepad';

library.add(fab, faCheckSquare, faCoffee, faBackspace);

function App(data: any) {
  console.log(data);
  return (
    <div className="App">
      <Tabs>
        <Tab title="Casing">
          <Casing/>
        </Tab>
        <Tab title="Notepad">
          <Notepad/>
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
