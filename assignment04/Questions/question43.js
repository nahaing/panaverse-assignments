// Q43: Unchanged Magicians: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store 
// it in a separate array. Call show_magicians() with each array to show that you 
// have one array of the original names and one array with the Great added to each 
// magician’s name.
var magicianNames = ["Shu Mantar", "Zaibinaaaa", "Hammon Jadugar", "Ainak Wala Jin"];
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
    ;
}
;
function make_great(magicians) {
    let greatMagicians = [];
    for (let magician of magicians) {
        greatMagicians.push(`${magician} the Great`);
    }
    ;
    return greatMagicians;
}
;
// Create a copy of the magician names array
let magicianNamesCopy = [...magicianNames]; // This part is using the spread operator (...) to create a new array by copying the elements from magicianNames into a new array. It essentially spreads the elements of magicianNames into the new array.
// Modify the copy to include "the Great"
let greatMagicianNames = make_great(magicianNamesCopy);
// Display the original and modified magician names
console.log("Original Magician Names:");
show_magicians(magicianNames);
console.log("\nModified Magician Names:");
show_magicians(greatMagicianNames);
export {};
