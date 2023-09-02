// Assignment-03 [08/22/2023]

// Q2: Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
// Print only Even Numbers in an Array

var givenNumbers: number[] = [1,2,3,4,5,6,7,8,9,10];

function printEvenNumbers(numbers: number[]): void {
  for (let num of numbers) {
    if (num % 2 === 0) {
      console.log(num);
    }
  }
}

printEvenNumbers(givenNumbers);