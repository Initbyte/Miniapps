//function addition(firstNum , secondNum){
 //   const result = firstNum + secondNum;
 //   return result;
//}
//const additionResult = addition(4,5);
//console.log('the sum =', additionResult);

//example 2
function addition(firstNum, secondNum) {
    if(typeof firstNum != 'number') {
        return null;
    } else if (typeof secondNum != 'number') {
        return null;
    } else {
        const result = firstNum + secondNum;
        return result;
    }
    
}
const x = "not a number"
const additionResult = addition(10,x);
console.log('the sum =', additionResult);