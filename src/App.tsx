import React from 'react';
import './App.scss';
import { Casing } from './components/Casing';

function App() {
  const text = 'Daniel';
  return (
    <div className="App">
      <Casing text={ text }/>
    </div>
  );
}

export default App;
