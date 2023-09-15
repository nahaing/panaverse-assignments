// Q14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them 
// to dinner.

type Guests = {name:string, isInvited:boolean, acceptInvite:boolean, livingOrDeceased:boolean};

var guests:Guests[] = [
    {name:"Usman", isInvited:false, acceptInvite:false, livingOrDeceased:true},
    {name:"Ali", isInvited:true, acceptInvite:false, livingOrDeceased:true},
    {name:"Osama", isInvited:false, acceptInvite:false, livingOrDeceased:true},
    {name:"Sami", isInvited:true, acceptInvite:true, livingOrDeceased:true},
    {name:"Affan", isInvited:true, acceptInvite:true, livingOrDeceased:true},
    {name:"Moiz", isInvited:true, acceptInvite:false, livingOrDeceased:true},
    {name:"Dawood", isInvited:false, acceptInvite:false, livingOrDeceased:true},
    {name:"Usman", isInvited:false, acceptInvite:false, livingOrDeceased:true},
    {name:"Ahmad Ali", isInvited:true, acceptInvite:false, livingOrDeceased:false},
    {name:"Fateh Muhammad", isInvited:true, acceptInvite:false, livingOrDeceased:true},
    {name:"Ghafooran Bibi", isInvited:true, acceptInvite:false, livingOrDeceased:false},
];

for(let index=0; index<guests.length; index++){
    if(guests[index].livingOrDeceased){
        console.log(`I would like to invide ${guests[index].name} at Dinner tonight`);        
    }
    else{
        console.log(`I would like to invide ${guests[index].name} at Dinner tonight but they are living in Heaven Now`); 
    }
};
