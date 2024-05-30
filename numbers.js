//Addition
const firstNum = 10
const secondNum = 100

//addition result
const additionResult = firstNum + secondNum;
console.log( 'addition Result =', additionResult);

//subtraction result
const subtractionResult = secondNum - firstNum;
console.log( 'subtraction Result =', subtractionResult);

//Multiplication result
const MultiplicationResult = secondNum * firstNum;
console.log( 'Multiplication Result =', MultiplicationResult);

//Division result
const divisionResult = firstNum / secondNum;
console.log( 'division Result =', divisionResult);

//methods
const fixedNumber = divisionResult.toFixed(2);
console.log('fixed result =', fixedNumber);


//const numberAsString = fixedNumber.toString();
//console.log('number as string result =', numberAsString);
//console.log(typeof numberAsString);

console.log(typeof fixedNumber);

const numberAsString = divisionResult.toString();
console.log('number as string result =', numberAsString);
console.log(typeof numberAsString);