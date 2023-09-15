// Q41: Magicians: Make a array of magician’s names. Pass the array to a function called 
// show_magicians(), which prints the name of each magician in the array.

var magicianNames: string[] = ["Shu Mantar", "Zaibinaaaa", "Hammon Jadugar", "Ainak Wala Jin"];

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
      console.log(magician);
    };
};
  
// Calling the function to display magician names
show_magicians(magicianNames);
  