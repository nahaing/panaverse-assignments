// Assignment-01 [08/07/2023]

// Q4: Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
// Calculating the Discount

var totalPrice: number = 117;

function calculateDiscount(price: number): number{
    if(price > 100){
        return (price * 0.1); // 10% Discount
    }
    else{
        return (price * 0.05); // 5% Discount
    }
}

console.log(calculateDiscount(totalPrice));
