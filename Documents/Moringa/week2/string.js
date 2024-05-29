const firstName = "John";
const secondName = "Doe";

//concatenation -> Addition of strings
const concatenationResult = firstName + " " + secondName;
console.log('Concatenation Result =', concatenationResult);

//methods
const splitResult = concatenationResult.split(' ');
console.log( 'split result', splitResult);

const startsWithResult = concatenationResult.startsWith('J');
console.log( 'Start with result', startsWithResult);

const includesResult = concatenationResult.includes('hu');
console.log( 'Includes result', includesResult);

const indexOfResult = concatenationResult.indexOf('e');
console.log( 'Index of result', indexOfResult);