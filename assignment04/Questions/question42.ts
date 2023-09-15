// Q42: Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians by 
// adding the phrase the Great to each magician’s name. Call show_magicians() to 
// see that the list has actually been modified.

var magicianNames: string[] = ["Shu Mantar", "Zaibinaaaa", "Hammon Jadugar", "Ainak Wala Jin"];

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
      console.log(magician);
    };
};

function make_great(magicians: string[]): string[] {
  let greatMagicians: string[] = [];
  for (let magician of magicians) {
    greatMagicians.push(`${magician} the Great`);
  };
  return greatMagicians;
};

// Modify the magician names to include "the Great"
let greatMagicianNames = make_great(magicianNames);

// Calling the function to display magician names
show_magicians(magicianNames);
// Display the modified magician names
show_magicians(greatMagicianNames);