//import
const myFunction = require('./index');

// define the test
test('it can perform basic arithmetic', () => {
    //assertion method
    expect (myFunction(1,2)).toBe(3); 
})
