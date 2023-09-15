// Q17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in 
// time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying 
// that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. 
// Each time you pop a name from your list, print a message to that person letting them know 
// you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re 
// still invited.
// • Remove the last two name
var shrinkGuests = [
    { name: "Usman", isInvited: true, acceptInvite: false, livingOrDeceased: true },
    { name: "Ali", isInvited: true, acceptInvite: false, livingOrDeceased: true },
    { name: "Osama", isInvited: true, acceptInvite: false, livingOrDeceased: true },
    { name: "Sami", isInvited: true, acceptInvite: true, livingOrDeceased: true },
    { name: "Affan", isInvited: true, acceptInvite: true, livingOrDeceased: true },
    { name: "Moiz", isInvited: true, acceptInvite: false, livingOrDeceased: true },
    { name: "Dawood", isInvited: true, acceptInvite: false, livingOrDeceased: true },
    { name: "Usman", isInvited: true, acceptInvite: false, livingOrDeceased: true },
    { name: "Ahmad Ali", isInvited: true, acceptInvite: false, livingOrDeceased: false },
    { name: "Fateh Muhammad", isInvited: true, acceptInvite: false, livingOrDeceased: true },
    { name: "Ghafooran Bibi", isInvited: true, acceptInvite: false, livingOrDeceased: false },
];
console.log(`I can only invite ${2} new Guests as the required Tables are not arrived on time`);
while (shrinkGuests.length > 2) {
    let removedGuest = shrinkGuests.pop();
    console.log(`Sorry ${removedGuest?.name} We can't invite you to dinner`);
}
;
shrinkGuests.forEach((guest) => console.log(`Dear ${guest.name} you're still on Invition List`));
shrinkGuests = []; //Emptying the Guest List
console.log("Guest List is Empty Now", shrinkGuests);
export {};
