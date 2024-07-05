/*
*fetch data from an external API
*format data
*/
//fetch data from an external API
async function fetchRecipes() {
    try {
        const apiKey = 'INSERT YOUR API KEY';
        const URL = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=' + apiKey;
        const headers = {'Content-Type': 'application/json'};

        const response = await fetch(URL, {headers});
        const status = response.status;
        const body = await response.json();

        if (status == 200) {
            console.log('success');
            return {status: true, data:body};
           // console.log('Data', body);

        } else {
            console.log('error')
            return {status:false};

        }

    } 
    catch (error) {
        console.error('Error fetching recipes', error);
        return {status:false};

    }
}

async function loadAndFetchRecipes() {
    try{
        //fetch recipes
        const response = await fetchRecipes();
         if (response.status == true ) {
            //retrieve the data
            const data = response.data;
            const results = data.results

             //get reference to list
        const recipeList = document.getElementById('recipeList');
        recipeList.innerHTML = ''; //clear any existing items

        results.forEach(results => {
            //create elements
            const listItem = document.createElement('li');
            const img = document.createElement('img');

            //gather required properties from the response data
            const title = results.title; // clearly access the title from each recipe
            const image = results.image;

            //modify the elements created with the data
            listItem.textContent = title;
            img.src= image;

            //make changes on the UI
            recipeList.append(listItem);
            recipeList.append(img);
        });
         } else {
            console.error(error);
         }      
        //return messages
    } catch (error) {
            console.error(error);
    }
}
window.onload = loadAndFetchRecipes;