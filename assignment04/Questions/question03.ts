// Q3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

var personName: string = "Muhammad Usman Tallat";

function toTitleCase(personName: string): string{
    return personName //We're Converting this String to Title Case
    .toLowerCase() // First Convert to Lower Case
    .split(" ") // Then Splitting String
    .map((word)=> word.charAt(0).toUpperCase() + word.slice(1)) // Converting Each Word to Title Case
    .join(" "); // Connecting Words to Male String Again
};

console.log(`
    Person Name: ${personName} to LowerCase: ${personName.toLowerCase()}
    Person Name: ${personName} to UpperCase: ${personName.toUpperCase()}
    Person Name: ${personName} to TitleCase: ${toTitleCase(personName)}
`);