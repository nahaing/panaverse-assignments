// Q45: Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs, 
// such as a color or an optional feature. Print the Object that’s returned to 
// make sure all the information was stored correctly.
function createCar(manufacturer, model, options) {
    let carInfo = {
        Manufacturer: manufacturer,
        Model: model,
        ...options,
    };
    return carInfo;
}
;
// Calling the function with required and optional information
let car1 = createCar('Toyota', 'Camry', { Color: 'Silver', Year: 2022 });
console.log(car1);
let car2 = createCar('Honda', 'Civic', { Color: 'Blue', Features: ['Sunroof', 'Navigation'] });
console.log(car2);
export {};
