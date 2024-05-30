//prototypes creates a custom method
const myFirstString = 'Hello';
const mySecondString = 'world';

myFirstString.toUpperCase();
mySecondString.toUpperCase();

//custom method for vehicle -> use of protype & constructors
function vehicle(color, is4WD){
    this.color = color;
    this.is4WD = is4WD;
}

vehicle.prototype.moveforward = function(){
    console.log('The car is moving  forward now');
}

const civic = new vehicle ('silver', false)
console.log(civic.moveforward());

// example 2
Number.prototype.half = function(){
    return this/2;
}

const myNumber = 10;
console.log(myNumber.half());