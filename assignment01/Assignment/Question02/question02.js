"use strict";
// Assignment-01 [08/07/2023]
// Q2: Write a program that calculates the percentage.
// Calculationg the Percentage
var totalValue = 1100;
var partOfValue = 817;
function calculatePercentage(total, part) {
    console.log(`Part of Value:${part} is following % of ${total}`);
    return ((part / total) * 100);
}
console.log(calculatePercentage(totalValue, partOfValue));
