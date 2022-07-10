import axios from 'axios';

const mealsUrl = 'http://localhost:4000/meals';
export const fetchMeals = (mealString) => axios.post(mealsUrl, mealString)

const instructionsUrl = 'http://localhost:4000/instructions';
export const fetchInstructions = (mealId) => axios.post(instructionsUrl, mealId)

const addUserUrl = 'http://localhost:4000/addUser';
//= //this is where I get confused - where are we sending the userData
export const addUser = (userData) => axios.post(addUserUrl, userData)

//need an api to get the user info to the backend... where is it getting posted? mongodb? look 
//at the books one...

//I *think* that under normal circumstances, i.e. if mongoDB didn't have to be commented out
//in the app.js to allow the page to load, it would be a case of posting to localhost:4000 
//as this has been set as proxy in package.json...