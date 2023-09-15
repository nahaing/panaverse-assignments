// Q15: Changing Guest List: You just heard that one of your guests can’t make 
// the dinner, so you need to send out a new set of invitations. 
// You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of 
// your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the 
// name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var newGuests = [
    { name: "Usman", isInvited: false, acceptInvite: false, livingOrDeceased: true },
    { name: "Ali", isInvited: true, acceptInvite: false, livingOrDeceased: true },
    { name: "Osama", isInvited: false, acceptInvite: false, livingOrDeceased: true },
    { name: "Sami", isInvited: true, acceptInvite: true, livingOrDeceased: true },
    { name: "Affan", isInvited: true, acceptInvite: true, livingOrDeceased: true },
    { name: "Moiz", isInvited: true, acceptInvite: false, livingOrDeceased: true },
    { name: "Dawood", isInvited: false, acceptInvite: false, livingOrDeceased: true },
    { name: "Usman", isInvited: false, acceptInvite: false, livingOrDeceased: true },
    { name: "Ahmad Ali", isInvited: true, acceptInvite: false, livingOrDeceased: false },
    { name: "Fateh Muhammad", isInvited: true, acceptInvite: false, livingOrDeceased: true },
    { name: "Ghafooran Bibi", isInvited: true, acceptInvite: false, livingOrDeceased: false },
];
for (let index = 0; index < newGuests.length; index++) {
    if (newGuests[index].isInvited && !newGuests[index].acceptInvite) {
        console.log(`Guest ${newGuests[index].name} was invited and didn't accepted invite to attend Dinner`);
    }
    else if (!newGuests[index].isInvited) {
        console.log(`New Guest ${newGuests[index].name} can be Invited`);
    }
    ;
}
;
export {};
