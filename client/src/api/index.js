import axios from 'axios';

const url = 'http://localhost:4000/recipes';

export const fetchRecipes = () => axios.get(url);
