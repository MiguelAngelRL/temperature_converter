// export const getNewValues = (origin: string, newValue: number) => {
//     let newCelsius: string="", newFahrenheit: string="";
//     if(origin==="Celsius") {
//         newCelsius=newValue.toString();
//         newFahrenheit=convertCelsiusToFahrenheit(newValue).toString();
//     } else if(origin==="Fahrenheit") {
//         newFahrenheit=convertFahrenheitToCelsius(newValue).toString();
//         newCelsius=((newValue-32)*5/9).toString();
//     }
//     return [newCelsius, newFahrenheit];
// }

export const getNewValues = (origin: string, newValue: string) => {
    let newCelsius: string="", newFahrenheit: string="";
    if(origin==="Celsius") {
        newCelsius=newValue;
        newFahrenheit=convertCelsiusToFahrenheit(newValue);
        // newCelsius = newFahrenheit ? Number.parseFloat(newValue).toString() : newValue;
    } else if(origin==="Fahrenheit") {
        newFahrenheit=newValue;
        newCelsius=convertFahrenheitToCelsius(newValue);
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
