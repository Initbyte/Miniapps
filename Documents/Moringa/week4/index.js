function myFunction (a,b){
    return a+b;

    const numberA = number (a);
    const numberB = number (b);

    if (isNaN(numberA) && isNaN(numberB)) {
        throw new Error('Please provide valid numbers');
    }
  return numberA+numberB;
}

//example
//const answer = myFunction (1,2);
//console.log('the answer is', answer);

//export function for testing
module.exports = myFunction;