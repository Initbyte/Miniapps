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
    superMarketCheckout();
