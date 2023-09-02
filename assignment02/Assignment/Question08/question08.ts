// Assignment-03 [08/15/2023]

// Q8: Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
// Convert Temperatures from Celsius to Fahrenheit

var temperatureValuesInCelsius: number[] = [25,37,45,19,20,-4,57,103];

function celsiusToFahrenheit(temps: number[]): number[]{
    let temperatureInFahrenheit: number[] = [];
    let count = 0;
    while(count < temps.length){
        let fahrenheit = (temps[count] * 9) / 5 + 32;
        temperatureInFahrenheit.push(fahrenheit);
        count++;
    }
    return temperatureInFahrenheit;
}

console.log(`Temperatures in Celcius: ${temperatureValuesInCelsius} Converted to Fahrenheit: ${celsiusToFahrenheit(temperatureValuesInCelsius)}`);
