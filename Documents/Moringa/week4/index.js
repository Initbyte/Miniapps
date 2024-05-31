function myFunction (a,b){
    return a+b;
}

//example
const answer = myFunction (1,2);
console.log('the answer is', answer);

//export function for testing
module.exports = myFunction;