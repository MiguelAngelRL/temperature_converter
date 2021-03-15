import React from 'react';
import './App.css';
import { InputField, MainTitle, InputFieldTitle } from './components';
import { getNewValues } from './utils';
import { constants } from './common';

const App: React.FC = () => {
  const [celsius, setCelsius] = React.useState<string>("");
  const [fahrenheit, setFahrenheit] = React.useState<string>("");
  const validation = new RegExp(/^[-]?\d*\.?\d*$/);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(!validation.test(event.target.value))
          return;
    const [newCelsius, newFahrenheit] = getNewValues(event.target.id, event.target.value);
    setCelsius(newCelsius);
    setFahrenheit(newFahrenheit);
  }

  const handleOnFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setCelsius("");
    setFahrenheit("");
  }

  return (
    <div className="App">
      <MainTitle textLiteral="Temperature Conversion Tool"/>
      <div>
        <InputFieldTitle textLiteral={constants.CELSIUS}/>
        <InputField handleOnFocus={handleOnFocus} handleOnChange={handleOnChange} value={celsius} name={constants.CELSIUS} step="0.1"/>
      </div>
      <div>
        <InputFieldTitle textLiteral={constants.FAHRENHEIT}/>
        <InputField handleOnFocus={handleOnFocus} handleOnChange={handleOnChange} value={fahrenheit} name={constants.FAHRENHEIT} step="0.1"/>
      </div>
    </div>
  );
}

export default App;
