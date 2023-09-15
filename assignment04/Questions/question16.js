// Q16: More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your 
// program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest 
// to the end of your list. • Print a new set of invitation messages, one for each person 
// in your list.
var moreGuests = [
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
console.log("Guest Array Before Adding Required Guests: ", moreGuests);
moreGuests.unshift({ name: "Amal", isInvited: false, acceptInvite: false, livingOrDeceased: true });
moreGuests.splice(5, 0, { name: "Fatima", isInvited: false, acceptInvite: false, livingOrDeceased: true });
moreGuests.push({ name: "Amal", isInvited: false, acceptInvite: false, livingOrDeceased: true });
console.log("Guest Array After Adding Required Guests: ", moreGuests);
for (let index = 0; index < moreGuests.length; index++) {
    console.log(`Hi Dear ${moreGuests[index].name} You're invited On Dinner Tonight`);
}
;
export {};
