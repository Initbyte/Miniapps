// Constructors are blueprints for creating an object of a particular type.
//const firstString ="This is the first string";
//console.log(firstString);

//Using constructors
//const secondString = new String('This is the second string');
//console.log(secondString.valueOf()); 

const person1 = {'name': 'John Doe', 'age': '34', 'course': ['miniapp,', 'Devops', 'cybersecurity']};
const person2 = {'name': 'Jane Doe', 'age': '29', 'course': ['Devops', 'cybersecurity']};
const person3 = {'name': 'James Bond', 'age': '24', 'course': ['miniapp,', 'cybersecurity']};

//Creating constructors using functions
function Person(name,age,course){
    this.name = name;
    this.age = age;
    this.course = course;
    

    this.speak =() => {
        return `my name is ${name}, I am ${age} years old, undertaking ${course} courses`;
        }
}

const person4 = new Person ('Monica Green', 40 , ['miniapps', 'Devops']);
console.log(person4.speak())