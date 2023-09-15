// Q18: Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the 
// original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its 
// original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that 
// its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. 
// Print the list to show that its order has changed.
var locations = ["Paris", "Tokyo", "Zurich", "Goa", "Agra", "Lahore", "Kuala Lmapur", "Bengcock", "Dubai", "Neom", "Tehran", "Istambul"];
console.log("Locations in Original Order", locations); // Print your array in its original order.
let dummyLocations = [];
for (let location of locations) {
    dummyLocations.push(location);
}
;
let alphabeticalOrderLocations = dummyLocations.sort(); // Print your array in alphabetical order without modifying the actual list.
console.log("Locations in Alphabetical Order", alphabeticalOrderLocations);
console.log("Locations are still in Original Order", locations); // Show that your array is still in its original order by printing it.
let reverseAlphabeticalOrderLocations = dummyLocations.sort((locationA, locationB) => locationB.localeCompare(locationA)); // Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Locations in Reverse Alphabetical Order", reverseAlphabeticalOrderLocations); // localeCompare method method returns a positive number if locationA should come before locationB (normal alphabetical order), locationA negative number if locationB should come before a (reversed alphabetical order), and zero if they are equal.
console.log("Locations are still in Original Order", locations); // Show that your array is still in its original order by printing it again.
locations.reverse(); // Reverse the order of your list. Print the array to show that its order has changed.
console.log("Locations in Reverse Order", locations);
locations.reverse(); // Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Locations are Back to Original Order", locations);
locations.sort(); // Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Locations Order has Changed to Alphabetical Order Now", locations);
locations.reverse(); // Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Locations Order has Changed to Reverse Alphabetical Order Now", locations);
export {};
