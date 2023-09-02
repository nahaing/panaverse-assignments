"use strict";
// Assignment-01 [08/07/2023]
// Q6: Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
// Suggesting user to wear Clothes according to the weather
var temperature = 27;
function suggestClothes(temperature) {
    if (temperature < 11) {
        return (`Temperature is: ${temperature} Wear Warm Clother`);
    }
    else if (temperature >= 11 && temperature < 21) {
        return (`Temperature is: ${temperature} Light Jacket Will be Fine`);
    }
    else {
        return (`Temperature is: ${temperature} Enjoy the Normal Weather`);
    }
}
console.log(suggestClothes(temperature));
