import axios from 'axios';

const mealsUrl = 'http://localhost:4000/meals';
export const fetchMeals = () => axios.get(mealsUrl)

export const searchMeals = () => axios.post(mealsUrl, {
  search: "chicken, bacon, leeks"
})
