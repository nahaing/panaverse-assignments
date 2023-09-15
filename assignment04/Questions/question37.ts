// Q37: Large Shirts: Modify the make_shirt() function so that shirts are large 
// by default with a message that reads I love TypeScript. Make a large shirt and a 
// medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size: string = 'Large', message: string = 'I love Panaverse'): void { // Creating Make Shirt Function with Default Values
    console.log(`You have ordered a ${size}-sized shirt with the message: "${message}".`);
};
  
// Making a large shirt with the default message
make_shirt();
  
// Making a medium shirt with the default message
make_shirt('Medium');
  
// Making a small shirt with a different message
make_shirt('Small', 'This Panavere Course is awesome!');
  