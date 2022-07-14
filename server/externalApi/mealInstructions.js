import axios from 'axios';
import authKey from '../auth.js';

const fetchInstructions = (input = '1') => {
  const options = {
    method: 'GET',
    url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${input}/information`,
    headers: {
      'X-RapidAPI-Key': authKey,
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };
  const mealInstructions = axios.request(options).then(function (response) {
    return response.data;
  }).catch(function (error) {
    console.error(error);
  });

  return mealInstructions
}

export default fetchInstructions;