import axios from 'axios';

const mealsUrl = 'http://localhost:4000/meals';
export const fetchMeals = () => axios.get(mealsUrl)

export const searchMeals = (string) => axios.post(mealsUrl, {
  search: string
})