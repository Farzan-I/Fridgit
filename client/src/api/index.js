import axios from 'axios';

const mealsUrl = 'http://localhost:4000/meals';
export const fetchMeals = (mealString) => axios.post(mealsUrl, mealString)

const instructionsUrl = 'http://localhost:4000/instructions';
export const fetchInstructions = (mealId) => axios.post(instructionsUrl, mealId)

const addUserUrl = 'http://localhost:4000/user/add';
export const addUser = (userData) => axios.post(addUserUrl, userData)

const loginUserUrl = 'http://localhost:4000/sessions/new';
export const loginUser = (userData) => axios.post(loginUserUrl, userData)

const addFridgeURL = 'http://localhost:4000/user/fridge/add';
export const addItemToFridge = (fridgeData) => axios.post(addFridgeURL, fridgeData)
