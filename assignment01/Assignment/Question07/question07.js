"use strict";
// Assignment-01 [08/07/2023]
// Q7: Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
// Checking the Divisibility of Given Number
var givenNumber = 31;
function checkDivisibility(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return (`Number: ${number} is Divisible by both 3 and 5`);
    }
    else if (number % 3 === 0) {
        return (`Number: ${number} is Divisible by 3`);
    }
    else if (number % 5 === 0) {
        return (`Number: ${number} is Divisible by 5`);
    }
    else {
        return (`Number: ${number} is Not divisible by either 3 or 5`);
    }
}
console.log(checkDivisibility(givenNumber));
