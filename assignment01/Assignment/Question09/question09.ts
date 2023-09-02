// Assignment-01 [08/07/2023]

// Q9: Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
// Determinig the Day of the Week

var givenDayOfWeek: number = 6;

function getDayOfWeek(day: number): string {
    if (day === 1) {
      return `Given Day: ${day} is Monday`;
    } else if (day === 2) {
      return `Given Day: ${day} is Tuesday`;
    } else if (day === 3) {
      return `Given Day: ${day} is Wednesday`;
    } else if (day === 4) {
      return `Given Day: ${day} is Thursday`;
    } else if (day === 5) {
      return `Given Day: ${day} is Friday`;
    } else if (day === 6) {
      return `Given Day: ${day} is Saturday`;
    } else if (day === 7) {
      return `Given Day: ${day} is Sunday`;
    } else {
      return `Given Day: ${day} is Invalid input`;
    }
}

console.log(getDayOfWeek(givenDayOfWeek));
