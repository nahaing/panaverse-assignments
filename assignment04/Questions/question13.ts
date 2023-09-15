// Q13: Your Own Array: Think of your favorite mode of transportation, such as a 
// motorcycle or a car, and make a list that stores several examples. 
// Use your list to print a series of statements about these items, 
// such as “I would like to own a Honda motorcycle.”


// Using Simple Array
console.log("Using Simple Array Method");
var modesOfTransportationSimple: string[] = ["Motorcycle","Car","Bus","Train","Areoplane"];
console.log(modesOfTransportationSimple);

console.log("I Like to Have Honda ",modesOfTransportationSimple[0]);
console.log("I Like to Own Toyotw ",modesOfTransportationSimple[1]);
console.log("I Like to Travel on Modern ",modesOfTransportationSimple[2]);
console.log("I Like to Travel on ",modesOfTransportationSimple[3] + " " + "For Long Journey");
console.log("I Like to Fly on ",modesOfTransportationSimple[4] + " " + "For International Trips");

// Using Custom Types
type TransportationMode = { // Defining User Data Type
    mode: string,
};

var modesOfTransportation: TransportationMode[] = [ // Declaring Varialbe Array of Custom Type
    {
        mode: "Motorcycle",
    },
    {
        mode: "Car",
    },
    {
        mode: "Bus",
    },
    {
        mode: "Train",
    },
    {
        mode: "Aeroplane",
    },
];

console.log("I Like to Have Honda ",modesOfTransportation[0].mode);
console.log("I Like to Own Toyotw ",modesOfTransportation[1].mode);
console.log("I Like to Travel on Modern ",modesOfTransportation[2].mode);
console.log("I Like to Travel on ",modesOfTransportation[3].mode + " " + "For Long Journey");
console.log("I Like to Fly on ",modesOfTransportation[4].mode + " " + "For International Trips");