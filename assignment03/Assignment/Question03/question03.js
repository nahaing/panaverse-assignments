"use strict";
// Assignment-03 [08/22/2023]
// Q3: Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
// Remove all the Even numbers from an Array
var givenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeEvenNumbers(numbers) {
    let oddNumbers = [];
    for (let num of numbers) {
        if (num % 2 !== 0) {
            oddNumbers.push(num);
        }
    }
    return oddNumbers;
}
console.log(`Original Array of Given Numbers: ${givenNumbers}`);
console.log(`New Array after Removing all Even Numbers: ${removeEvenNumbers(givenNumbers)}`);
