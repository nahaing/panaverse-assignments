"use strict";
// Assignment-03 [08/15/2023]
// Q1: Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
// Insert a Value at Specified Index in an Array
var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var index = 4;
var value = 75;
function insertValueAtIndex(array, index, value) {
    array.splice(index, 0, value);
    return array;
}
console.log(`New Array: ${insertValueAtIndex(values, index, value)} after Inserting a Value: ${value} at Index: ${index} in Array: ${values}`);
