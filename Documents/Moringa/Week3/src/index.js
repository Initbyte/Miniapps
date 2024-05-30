function saveData(){
    //alert('function triggered');

    //retrieve the data from the input field
    const emailData= document.getElementById('emailInput').value;
    //alert('Email received');
    //validate data
    if (!String(emailData).includes('@')){
        alert('email is not valid');
    } else {
       //save the data using local storage
        localStorage.setItem('email', emailData);
        alert('email captured succesfully');

        displayData();
    }
  
function displayData(){
    //Get element where saved data is going to be displayed
    const displayParagraph= document.getElementById('savedData');
    //retrieve the saved data
    const dataFromStorage = localStorage.getItem('email');
    //append the saved data to the element
    //verify if actual data has been retrieve
    //if so, show data in paragraph else show error message

    if (dataFromStorage){
        displayParagraph.textContent = "current data on storage is" + dataFromStorage;
    }else {
        displayParagraph.textContent = "We did not find any data from storage";
    }
} 
}
function deleteData(){
    localStorage.clear();
 
     }
//trigger display data when page loads
window.onload = displayData;
