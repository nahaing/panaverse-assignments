"use strict";
// Assignment-03 [08/22/2023]
// Q1: Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
// Calculate and Print Sum of 1st n Even numbers
var givenNumber = 12;
function sumOfFirstNEvenNumbers(number) {
    let sum = 0;
    for (let i = 2; i <= 2 * number; i += 2) {
        sum += i;
    }
    return (`Sum of First ${number} Even Numbers is: ${sum}`);
}
console.log(sumOfFirstNEvenNumbers(givenNumber));
