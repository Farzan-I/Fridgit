import axios from 'axios';

const fetchInstructions = (input = '479101') => {
  const options = {
    method: 'GET',
    url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${input}/information`,
    headers: {
      'X-RapidAPI-Key': '202b97b4f1mshb0fffa196885901p101664jsn054d3907db41',
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };

  const mealInstructions = axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

  return mealInstructions
}

export default fetchInstructions;