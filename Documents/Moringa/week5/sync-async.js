//synchronous function - the code is evaluated line by line
function makeToastBread(){
    console.log('1. put bread in the toaster');
    console.log('2. wait for bread to toast');
    console.log('3. take out the toasted bread');
}
//makeToastBread();

//asynchronous function - code continues running while waiting for a certain operation to be finished.
function orderOnline(){
    console.log('1. logged into an online app to place an order');
    //function that completes after a certain period
    setTimeout(function(){
        console.log('2. The food has been delivered')},
        5000);
        console.log('3. Do something else as you wait for the food');
    }
    //orderOnline();

    //Example 2
    function superMarketCheckout(){
        console.log('1. Shopping completed and I\'m at the check out counter');
        console.log('2. M-Pesa payment through STK initiated');
        setTimeout(function(){
            console.log('3. M-Pesa payment confimed');
        }, 2000);
        console.log('4. pack into shopping bags while waiting for the confirmation');
        
    }
   // superMarketCheckout();

    /**
     * PROMISES
     * A promise is something that will happen in the future, either sucessfully or unsuccessfully.
     * It has 3 states
     * Pending - Initiated but not completed 
     * fulfilled - successful
     * rejected - failure
     */

    // example 1
    function fetchdatafromexternalsource(){
        console.log('initiated');
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                const fetcheddata = 'This is the data from the external source';

                //resolve = successful
                //resolve(fetcheddata);

                //reject= failure
                reject(new Error ('There was a problem fectching the data'));

            }, 2000);

        })
    }

/*fetchdatafromexternalsource()
  .then((value) => {
    console.log('value', value);
  })
  .catch((error) => {
    console.log(error);
  });*/
  
  /*
  *CHAINING PROMISES
  *Example - logging in to a chat system and fetching messages
  promise 1- Logging in
  promise 2 - fetching messages
  */

  function logIn(){
    console.log('initiated log in');
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const fetcheddata = {id: 1, firstName: 'Jane', lastName: 'Doe'};

            //resolve = successful
            resolve(fetcheddata);

            //reject= failure
            reject(new Error ('There was a problem logging in the user'));

        }, 2000);

    })
}

function fetchmessage(userId){
    console.log('initiated message fetch ...');
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const fetcheddata = ['message 1' , 'message 2' , 'message 3'];

            //resolve = successful
            //resolve(fetcheddata);

            //reject= failure
            reject(new Error ('There was a problem fetching messages for the user'));

        }, 2000);

    })
}

logIn()
 .then((user) => {
    console.log('Logged in user is', user);
    const id = user.id;
    return fetchmessage(id);
 })
 .then((messages) => {
    console.log('user messages are', messages);
 })
 .catch((error) => {
    console.error(error);
 });