"use strict";
// Assignment-01 [08/07/2023]
// Q8: Write a program that checks if the given year is leap year or not.
// Checking If Given Year is a Leap Year
var givenYear = 2023;
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return (`The Given Year: ${year} is a Leap Year`);
    }
    else {
        return (`The Given Year: ${year} is not a Leap Year`);
    }
}
console.log(isLeapYear(givenYear));
