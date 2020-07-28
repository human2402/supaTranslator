import React from 'react';

import './App.css'

import SimpleTranslator from './components/simpleTranslator/SimpleTranslator'
import DragHandler from './components/dragHandler/DragHandler'
import HardTranslator from './components/hardTranslator/HardTranslator'

function App() {
  return (
    <div
      className="App"
    >
      <SimpleTranslator />
      <DragHandler />    
      <HardTranslator />
    </div>
  );
}

export default App
