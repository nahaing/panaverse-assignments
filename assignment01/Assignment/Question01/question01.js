"use strict";
// Assignment-01 [08/07/2023]
// Q1: Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
// From Celcius to Fehrenheit
var temperatureInCelcius = 25;
var temperatureInFahrenheit = 25;
// Covert Celsius to Fahrenheit
function celciusToFahrenheit(celcius) {
    console.log(`Coverting Celsius: ${celcius} to Fahrenheit`);
    // Formula for Celsius to Fahrenheit [(celsius * 9) / 5 + 32]
    return ((celcius * 9) / 5 + 32);
}
// Covert Fahrenheit to Celsius
function fahrenheitToCelcius(fahrenheit) {
    console.log(`Coverting Fahrenheit: ${fahrenheit} to Celsius`);
    // Formula for Fahrenheit to Celsius [(celsius * 9) / 5 + 32]
    return (((fahrenheit - 32) * 5) / 9);
}
console.log(celciusToFahrenheit(temperatureInCelcius));
console.log(fahrenheitToCelcius(temperatureInFahrenheit));
