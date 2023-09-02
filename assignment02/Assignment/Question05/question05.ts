// Assignment-03 [08/15/2023]

// Q5: Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
// Calculate Factorial of a Positive Number

var number: number = -10;

function calculateFactorialOfAPositiveNumber(num: number){
    if(num >= 0){
        let factorial = 1;
        let count = 1;
        while(count <= num){
            factorial *= count;
            count++;
        }
        console.log(`Factorial of Number: ${number} is: ${factorial}`);
    }
    else{
        console.log(`Given Number: ${num} is not a Positive Number`);
        
    }
}

calculateFactorialOfAPositiveNumber(number);