// Q19: Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.

type Guests = {name:string, isInvited:boolean, acceptInvite:boolean, livingOrDeceased:boolean};

var guests:Guests[] = [
    {name:"Usman", isInvited:true, acceptInvite:false, livingOrDeceased:true},
    {name:"Ali", isInvited:true, acceptInvite:false, livingOrDeceased:true},
    {name:"Osama", isInvited:true, acceptInvite:false, livingOrDeceased:true},
    {name:"Sami", isInvited:true, acceptInvite:true, livingOrDeceased:true},
    {name:"Affan", isInvited:true, acceptInvite:true, livingOrDeceased:true},
    {name:"Moiz", isInvited:true, acceptInvite:false, livingOrDeceased:true},
    {name:"Dawood", isInvited:true, acceptInvite:false, livingOrDeceased:true},
    {name:"Usman", isInvited:true, acceptInvite:false, livingOrDeceased:true},
    {name:"Ahmad Ali", isInvited:true, acceptInvite:false, livingOrDeceased:false},
    {name:"Fateh Muhammad", isInvited:true, acceptInvite:false, livingOrDeceased:true},
    {name:"Ghafooran Bibi", isInvited:true, acceptInvite:false, livingOrDeceased:false},
];

console.log(`I'm inviting ${guests.length} Guests on Tonight's Dinner`);
