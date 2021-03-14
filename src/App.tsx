import React from 'react';
import './App.css';
import { NumberInputField } from './components/NumberInputField'
import { getNewValues } from './utils'

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
      <p>
        Temperature conversion tool
      </p>
      <NumberInputField handleOnFocus={handleOnFocus} handleOnChange={handleOnChange} value={celsius} name="Celsius" step="0.1"/>
      <NumberInputField handleOnFocus={handleOnFocus} handleOnChange={handleOnChange} value={fahrenheit} name="Fahrenheit" step="0.1"/>
    </div>
  );
}

export default App;
