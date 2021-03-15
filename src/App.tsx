import React from 'react';
import './App.css';
import { InputField, MainTitle, InputFieldTitle } from './components';
import { getNewValues } from './utils';
import { constants, TemperatureType } from './common';

const App: React.FC = () => {
  const [celsius, setCelsius] = React.useState<string>("");
  const [fahrenheit, setFahrenheit] = React.useState<string>("");
  const validation = new RegExp(/^[-]?\d*\.?\d*$/);

  const handleOnChange = (type: TemperatureType, value: string) => {
    if(!validation.test(value))
          return;
    const [newCelsius, newFahrenheit] = getNewValues(type, value);
    setCelsius(newCelsius);
    setFahrenheit(newFahrenheit);
  }

  const handleOnFocus = () => {
    setCelsius("");
    setFahrenheit("");
  }

  return (
    <div className='App'>
      <MainTitle textLiteral={constants.MAIN_TITLE}/>
      <div>
        <InputFieldTitle textLiteral={TemperatureType.CELSIUS}/>
        <InputField handleOnFocus={handleOnFocus} handleOnChange={handleOnChange} value={celsius} name={TemperatureType.CELSIUS}/>
      </div>
      <div>
        <InputFieldTitle textLiteral={TemperatureType.FAHRENHEIT}/>
        <InputField handleOnFocus={handleOnFocus} handleOnChange={handleOnChange} value={fahrenheit} name={TemperatureType.FAHRENHEIT}/>
      </div>
    </div>
  );
}

export default App;
