import React from 'react';
import './App.css';
import { NumberInputField } from './components/NumberInputField'

const App: React.FC = () => {
  const [celsius, setCelsius] = React.useState<number|"">("");
  const [fahrenheit, setFahrenheit] = React.useState<number|"">("");

  const handleOnChange = (event: any) => {
    const newValue = Number(event.target.value) || "";
    let newCelsius: number|""="", newFahrenheit: number|""="";
    if(newValue) {
      const origin = event.target.id;
      if(origin==="Celsius") {
        newCelsius=newValue;
        newFahrenheit=newValue*2;
      } else if(origin==="Fahrenheit") {
        newFahrenheit=newValue;
        newCelsius=newValue/2;
      }
    }
    updateTempValues(newCelsius, newFahrenheit);
  }
  
  const updateTempValues = (newCelsius: number|"", newFahrenheit: number|"") => {
    setCelsius(newCelsius);
    setFahrenheit(newFahrenheit);
  }

  return (
    <div className="App">
      <p>
        Temperature conversion tool
      </p>
      <NumberInputField handleOnChange={handleOnChange} value={Number(celsius)||""} name="Celsius" step="0.1"/>
      <NumberInputField handleOnChange={handleOnChange} value={Number(fahrenheit)||""} name="Fahrenheit" step="0.1"/>
    </div>
  );
}

export default App;
