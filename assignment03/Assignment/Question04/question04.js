"use strict";
// Assignment-03 [08/22/2023]
// Q4: Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
// Calculate Area of Circle
var radiusOfCircle = 3.5;
function calculateCircleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}
console.log(`Are of Circle with Radius: ${radiusOfCircle} is: ${calculateCircleArea(radiusOfCircle)}`);
