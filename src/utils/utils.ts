import { TemperatureType } from '../common';

export const getNewValues = (origin: TemperatureType, newValue: string): [celsius: string, fahrenheit: string] => {
    let newCelsius: string="", newFahrenheit: string="";
    if(origin===TemperatureType.CELSIUS) {
        newCelsius=checkDot(newValue);
        newFahrenheit=convertCelsiusToFahrenheit(newCelsius);
    } else if(origin===TemperatureType.FAHRENHEIT) {
        newFahrenheit=checkDot(newValue);
        newCelsius=convertFahrenheitToCelsius(newFahrenheit);
    }
    return [newCelsius, newFahrenheit];
}

const convertCelsiusToFahrenheit = (celsius: string): string => {
    const value = Number.parseFloat(celsius);
    let fahrenheit: string="";
    if(value || Math.abs(value)===0) {
        fahrenheit=((value*9/5)+32).toString();
    }
    return fahrenheit;
}

const convertFahrenheitToCelsius = (fahrenheit: string): string => {
    const value = Number.parseFloat(fahrenheit);
    let celsius: string="";
    if(value || Math.abs(value)===0) {
        celsius=((value-32)*5/9).toString();
    }
    return celsius;
}

const checkDot = (value: string): string => {
    let result: string = value;
    if(value.startsWith("."))
        result="0.";
    else if(value.startsWith("-."))
        result="-0.";
    return result;
}