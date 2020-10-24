import React from 'react';
import './App.scss';
import { Casing } from './components/Casing';
import { Tabs } from './components/tabs/Tabs';
import { Tab } from './components/tabs/Tab';

function App() {

  return (
    <div className="App">
      <Tabs>
        <Tab title="Casing">
          <Casing/>
        </Tab>
        <Tab title="Tab 2">
          <div>Tab 2</div>
        </Tab>
        <Tab title="Tab 3">
          <div>Tab 3</div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
