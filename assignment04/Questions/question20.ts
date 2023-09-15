// Q20: Think of something you could store in a array. For example, you could make a 
// list of mountains, rivers, countries, cities, languages, or anything else you’d like. 
// Write a program that creates a list containing these items.

import inquirer from "inquirer";

console.log("Enter Your Desired Data 1 by 1");
inquirer.prompt([
    {name:"item1", type:"input", message:"Enter Item 1"},
    {name:"item2", type:"input", message:"Enter Item 2"},
    {name:"item3", type:"input", message:"Enter Item 3"},
    {name:"item4", type:"input", message:"Enter Item 4"},
    {name:"item5", type:"input", message:"Enter Item 5"},
    {name:"item6", type:"input", message:"Enter Item 6"},
]).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});

// Tried to Ask Desired Type of List and Desired Count of List
// async function makingListOfItems(){
//     const listOfItems = await inquirer.prompt([
//             {name:"listOfItems", type:"list", message:"What type of Data You'd like to store", choices: ["Mountains","Rivers","Countries","Cities","Languages","Anything Else"]},
//             {name:"Count of List", type:"number", message:`What should be count of List`},
//             {name:"items", type:"list", message:`Enter Item ${makingListOfItems}`}
//         ]);
// };

