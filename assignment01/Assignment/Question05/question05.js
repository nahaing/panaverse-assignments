"use strict";
// Assignment-01 [08/07/2023]
// Q5: Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
// Detemining the User Provided Age Category
var ageProvided = 27;
function determineAgeCategory(age) {
    if (age >= 0 && age <= 12) {
        return (`At Age: ${age} this Person is Child`);
    }
    else if (age > 13 && age <= 19) {
        return (`At Age: ${age} this Person is Teenager`);
    }
    else {
        return (`At Age: ${age} this Person is Adult`);
    }
}
console.log(determineAgeCategory(ageProvided));
