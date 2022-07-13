import axios from 'axios';

const fetchMealData = (input = '') => {
    const options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients',
      params: {
        ingredients: input,
        number: '15',
        ignorePantry: 'true',
        ranking: '1'
      },
      headers: {
        'X-RapidAPI-Key': '202b97b4f1mshb0fffa196885901p101664jsn054d3907db41',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    };
  
    const recipes = axios.request(options).then(function (response) {
      return(response.data);
    }).catch(function (error) {
      console.error(error);
    });

    return recipes
}

export default fetchMealData;