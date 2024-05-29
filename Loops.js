const myNumbers = [1,2,3,4,5,6,7,8,9,10]

//Array methods
let sum = 0;
//myNumbers.forEach((value, index)=>{
  //  sum = sum + value;
    //console.log('At position', index, 'the value is',value, 'the sum is', sum);
    
//})

//For loop method
//for (let index = 0; index < myNumbers.length; index++) {
   // const value = myNumbers [index];
    //sum = sum+value;
//    console.log('At position', index, 'the value is',value, 'the sum is', sum);

//}

const person = {'name': 'John Doe', 'age': '34', 'course': ['miniapps, Devops']}
for (const key in person) {
        const value = person[key];
        console.log('the current key is', key, ' which represents is',value);

    }
