import React from 'react';
import './App.scss';
import { Casing } from './components/Casing';
import { Tabs } from './components/tabber/Tabs';
import { Tab } from './components/tabber/Tab';

function App() {
  const text = 'Daniel';
  return (
    <div className="App">
      {/*<Casing text={ text }/>*/ }
      <Tabs>
        <Tab title="Lemon">Lemon is yellow</Tab>
        <Tab title="Strawberry">Strawberry is red</Tab>
        <Tab title="Pear">Pear is green</Tab>
      </Tabs>
    </div>
  );
}

export default App;
