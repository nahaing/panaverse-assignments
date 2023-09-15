// Q31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.

var usernames: string[] = ["Admin", "Alice", "Bob", "Charlie", "David"];

for (let username of usernames) {
  if (username === "Admin") {
    console.log("Hello Admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
};

usernames = []; // Emptying The List of Users
if(usernames.length===0){
    console.log('We need to find some users!');
};