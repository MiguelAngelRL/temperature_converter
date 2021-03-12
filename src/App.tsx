import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <p>
        Temperature conversion tool
      </p>
      <input type="number" id="cel" step="0.1"/>
      <input type="number" id="fahr" step="0.1"/>
    </div>
  );
}

export default App;
