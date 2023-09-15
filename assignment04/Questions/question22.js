// Q22: Intentional Error: If you haven’t received an array index error in one of your 
// programs yet, try to make one happen. Change an index in one of your programs to 
// produce an index error. Make sure you correct the error before closing the program.
var items = ["Pliers", "Screwdriver", "Motoecycle"];
let indexError = items[3]; // This will make an Error about Index of Array
console.log(indexError);
// Correcting Index Error by checking Array Length
if (items.length > 3) {
    let anyValue = items[3];
    console.log("Value at Index 3: ", anyValue);
}
else {
    console.log("This Index Doesn't Exist");
}
;
export {};
