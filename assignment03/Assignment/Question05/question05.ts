// Assignment-03 [08/22/2023]

// Q5: Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
// Remove Failing Grades (Below 50) from Array

var grades: number[] = [75,85,45,35,95,65,95,45];

function removeFailingGrades(grades: number[]): number[] {
    let passingGrades = grades.filter((grade) => grade >= 50);
    return passingGrades;
}

console.log(`New Grades List: ${removeFailingGrades(grades)} After Removing Failing Grades From Grades List: ${grades}`);