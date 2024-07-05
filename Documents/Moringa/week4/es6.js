//introduction javascript ES6

//Variables
var x = 1
console.log(x);

//variables that won't change
const Y = 11

// variables that change
let a = 22;
console.log("initial value", a);

a = 34;
console.log("current value", a);

//2. Arrow function
 
//standard way of defining a function
function add(a,b){
    return a+b;
}
 const std = add(1,2);
 console.log("initial", std);

 //newer way of defining functions
 const addNewer = (a,b) => a+b;
 console.log("change to", addNewer(1,2));

 //Destructuring
 const person = {'name':'John Doe' , 'age': 30 , 'ocupation': 'blogger'};
 //const name = person.name;
 //const age = person[age];

 const {name} = person;
 console.log(name);

 const numbers = [1,2,3];
 const numberOne = numbers[0];

 const [numberFour, numberFive, numberSix] = [4,5,6];
 console.log(numberSix);

 //spread operators
 const firstArray =[1,2,3];
 const SecondArray = [...firstArray,4,5,6];
 console.log(firstArray, SecondArray);

 const person2 ={...person, 'location': 'Nairobi', 'yob': 2000, 'degree': 'BBIT'};
 console.log(person, person2);

 //OOP -> Inheritance
 //parent
 class animal {
    constructor(name){
    }
    move(){
        console.log("the animal", name, "is moving.");
    }
 }
//child
 class dog extends animal{
    constructor(name){
        super(name);
    }
    bark(){
        console.log(name, "woof! woof!!");
    }
 }

 const cat = new animal ('Jane');
 cat.move();

 const dog2 = new dog('Rex');
 dog2.move();
 dog2.bark();