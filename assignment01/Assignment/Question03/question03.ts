// Assignment-01 [08/07/2023]

// Q3: Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
// Converting given number of Days in Weeks and remaining Days

var totalNumberOfDays: number = 47;

function convertDaysToWeekAndDays(days: number): string{
    let weeks = Math.floor(days / 7);
    let remainingDays = days % 7;
    return (`Days: ${days} are converted to Weeks: ${weeks} and Days: ${remainingDays}`);
}

console.log(convertDaysToWeekAndDays(totalNumberOfDays));
