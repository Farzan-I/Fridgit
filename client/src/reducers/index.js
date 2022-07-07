import { combineReducers } from 'redux'; 

import recipes from './recipes.js'

import meals from './fetchMeals.js'

export default combineReducers({ 
  meals,
  recipes
})