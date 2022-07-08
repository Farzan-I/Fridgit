import axios from 'axios';

const mealsUrl = 'http://localhost:4000/meals';
export const fetchMeals = (mealString) => axios.post(mealsUrl, mealString)
