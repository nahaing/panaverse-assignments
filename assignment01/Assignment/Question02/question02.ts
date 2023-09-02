// Assignment-01 [08/07/2023]

// Q2: Write a program that calculates the percentage.
// Calculationg the Percentage
var totalValue: number = 1100;
var partOfValue: number = 817;

function calculatePercentage(total: number, part: number): number{
    console.log(`Part of Value:${part} is following % of ${total}`);
    return ((part / total) * 100);
}

console.log(calculatePercentage(totalValue,partOfValue));
