import React from 'react';
import './App.css';
import { NumberInputField } from './components/NumberInputField'

const App: React.FC = () => {
  const [celsius, setCelsius] = React.useState<string>("");
  const [fahrenheit, setFahrenheit] = React.useState<string>("");

  const handleOnChange = (event: any) => {
    const newValue = Number.parseFloat(event.target.value);
    let newCelsius:string="", newFahrenheit:string="";
    if(newValue.toString()) {
      const origin = event.target.id;
      if(origin==="Celsius") {
        newCelsius=newValue.toString();
        newFahrenheit=(newValue*2).toString();
      } else if(origin==="Fahrenheit") {
        newFahrenheit=newValue.toString();
        newCelsius=(newValue/2).toString();
      }
    }
    updateTempValues(newCelsius, newFahrenheit);
  }
  
  const updateTempValues = (newCelsius: string, newFahrenheit: string) => {
    setCelsius(newCelsius);
    setFahrenheit(newFahrenheit);
  }

  return (
    <div className="App">
      <p>
        Temperature conversion tool
      </p>
      <NumberInputField handleOnChange={handleOnChange} value={celsius} name="Celsius" step="0.1"/>
      <NumberInputField handleOnChange={handleOnChange} value={fahrenheit} name="Fahrenheit" step="0.1"/>
    </div>
  );
}

export default App;
