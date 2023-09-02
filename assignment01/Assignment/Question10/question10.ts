// Assignment-01 [08/07/2023]

// Q10: Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax. Where the tax amount will be calculated by the amount of bill.
// Calculate the Amount of Total with Taxes

var totalConsumedUnits: number = 347;

function calculateTax(units: number): number {
    if (units > 500) {
      return units * 0.25;
    } else if (units > 200) {
      return units * 0.15;
    } else if (units > 100) {
      return units * 0.10;
    } else {
      return 0;
    }
}

console.log(`Tax Calculated for Concsume Units: ${totalConsumedUnits} is ${calculateTax(totalConsumedUnits)}`);
