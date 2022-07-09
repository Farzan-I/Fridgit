import axios from 'axios';

const fetchInstructions = (input = '479101') => {
  const options = {
    method: 'GET',
    url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${input}/analyzedInstructions`,
    params: {stepBreakdown: 'true'},
    headers: {
      'X-RapidAPI-Key': 'b9052fa1b0mshe5a3cada7e50498p1a517cjsn6c055d673a00',
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };
  const mealInstructions = axios.request(options).then(function (response) {
    console.log("ExternalApi log: " + response.data)
    return(response.data);
  }).catch(function (error) {
    console.error(error);
  });

  return mealInstructions
}

export default fetchInstructions;