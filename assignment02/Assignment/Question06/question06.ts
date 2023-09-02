// Assignment-03 [08/15/2023]

// Q6: Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
// Remove Negative Numbers from An Array

var numbers: number[] = [-5,-4,-3,-2,-1,0,1,2,3,4,5];

function removeNegativeNumbers(numbers: number[]): number[] {
    let newNumbers = [];
    for (let num of numbers) {
      if (num >= 0) {
        newNumbers.push(num);
      }
    }
    return newNumbers;
}

console.log(`New Array After Removing Negative Number From Array: ${numbers} is: ${removeNegativeNumbers(numbers)}`);
