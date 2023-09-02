"use strict";
// Assignment-03 [08/22/2023]
// Q6: Write a program that uses a function to find the largest element in an array of numbers.
// Find Largest Number of An Array
var numbers = [50, 40, 30, 20, 10, 90, 80, 100, 70, 60];
function findLargestElement(numbers) {
    let largest = numbers[0];
    for (let num of numbers) {
        if (num > largest) {
            largest = num;
        }
    }
    return largest;
}
console.log(`Largest Number of Array: ${numbers} is: ${findLargestElement(numbers)}`);
