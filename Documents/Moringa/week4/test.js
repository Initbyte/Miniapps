//import
const myFunction = require('./index');

// define the test
test('it can perform basic arithmetic', () => {
    //assertion method
    expect (myFunction(1,2)).toBe(3); 

})
test('it can detect failed arithmetic', () => {
    //assertion method
    expect (myFunction(1,2)).not.toBe(4); 

})
test('it can perform basic arithmetic with numbers', () => {
    //assertion method
    expect (myFunction(1,2)).toBe(3); 

})
test('it detect parameters that are not numbers', () => {
    //assertion method
    expect(() => myFunction('hello','world')).toThrow('Please provide valid numbers'); 

})