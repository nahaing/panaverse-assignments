// Q32: Checking Usernames: Do the following to create a program that simulates how 
// websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the 
// new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. 
// If it has, print a message that the person will need to enter a new username. 
// If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If "John" has been used, "JOHN" 
// should not be accepted.

var current_users: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];

// List of new users (including some that are already in current_users)
let new_users: string[] = ["Charlie", "Frank", "Grace", "John", "Mallory"];

// Function to check if a username is already in use (case-insensitive)
function isUsernameTaken(username: string): boolean {
  return current_users.some((user) => user.toLowerCase() === username.toLowerCase()); // some() is an inbuilt TypeScript function which is used to check for some element in the array passes the test implemented by the provided function. 
};

// Loop through new_users to check for availability
for (let username of new_users) {
  if(isUsernameTaken(username)) {
    console.log(`Sorry, the username "${username}" is already taken. Please choose a different one.`);
  }
  else{
    console.log(`Congratulations! The username "${username}" is available.`);
  };
};