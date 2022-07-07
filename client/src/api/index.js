import axios from 'axios';

const recipesUrl = 'http://localhost:4000/recipes';

export const fetchRecipes = () => axios.get(recipesUrl);


const mealsUrl = 'http://localhost:4000/meals';

export const fetchMeals = () => axios.get(mealsUrl)


