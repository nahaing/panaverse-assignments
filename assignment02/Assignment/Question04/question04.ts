// Assignment-03 [08/15/2023]

// Q4: Write a program that uses a while loop to print the first 10 even numbers.
// Print First 10 Even Numbers

var even: number = 2;
var count: number = 1;
while(count <= 10){
    console.log(`Even Number ${count}: ${even}`);
    even += 2;
    count++;    
}