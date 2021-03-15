// export const getNewValues = (origin: string, newValue: number) => {
//     let newCelsius: string="", newFahrenheit: string="";
//     if(origin===constants.CELSIUS) {
//         newCelsius=newValue.toString();
//         newFahrenheit=convertCelsiusToFahrenheit(newValue).toString();
//     } else if(origin===constants.FAHRENHEIT) {
//         newFahrenheit=convertFahrenheitToCelsius(newValue).toString();
//         newCelsius=((newValue-32)*5/9).toString();
//     }
//     return [newCelsius, newFahrenheit];
// }

import { constants } from '../common';

export const getNewValues = (origin: string, newValue: string) => {
    let newCelsius: string="", newFahrenheit: string="";
    if(origin===constants.CELSIUS) {
        newCelsius=checkDot(newValue);
        newFahrenheit=convertCelsiusToFahrenheit(newCelsius);
        // newCelsius = newFahrenheit ? Number.parseFloat(newValue).toString() : newValue;
    } else if(origin===constants.FAHRENHEIT) {
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