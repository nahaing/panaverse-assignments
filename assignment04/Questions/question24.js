// Q24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. Have at least one True and one 
// False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
var name = "Usman";
var number1 = 100;
var number2 = 10;
var boolean1 = true;
var boolean2 = false;
var cars = ["Toyota", "Honda", "Suzuki", "Kia"];
var colors = ["White", "Black", "Brown", "Red"];
// Test 1: Is name equal to 'Usman'? I predict True.
console.log(name === 'Usman');
// Test 2: Is name not equal to 'Jane'? I predict True.
console.log(name !== 'Jane');
// Test 3: Is name equal to 'USMAN'? (Case-sensitive comparison) I predict False.
console.log(name === 'USMAN');
// Test 4: Is name equal to 'usman'? (Case-insensitive comparison) I predict True.
console.log(name.toLowerCase() === 'usman');
// Test 5: Is number 1 greater than number 2? I predict True.
console.log(number1 > number2);
// Test 6: Is number 1 less than number 2? I predict False.
console.log(number1 < number2);
// Test 7: Is number 1 greater than or equal to 100? I predict True.
console.log(number1 >= 100);
// Test 8: Is number 2 less than or equal to 4? I predict False.
console.log(number2 <= 4);
// Test 9: Is boolean 1 true and boolean 2 true? I predict False.
console.log(boolean1 && boolean2);
// Test 10: Is boolean 1 true or boolean 2 true? I predict True.
console.log(boolean1 || boolean2);
// Test 11: Is 'Toyota' in the cars array? I predict True.
console.log(cars.includes('Toyota'));
// Test 12: Is 'Hyundai' in the cars array? I predict False.
console.log(cars.includes('Hyundai'));
// Test 13: Is 'White' not in the colors array? I predict True.
console.log(!colors.includes('White'));
// Test 14: Is 'Brown' not in the colors array? I predict False.
console.log(!colors.includes('Brown'));
export {};
