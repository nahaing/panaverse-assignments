"use strict";
// Assignment-03 [08/15/2023]
// Q7: Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
// Calculate Sum of all Numbers of An Array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function calculateSum(numbers) {
    let sum = 0;
    let count = 0;
    while (count < numbers.length) {
        sum += numbers[count];
        count++;
    }
    return sum;
}
console.log(`Sum of Numbers of Array: ${numbers} is: ${calculateSum(numbers)}`);
