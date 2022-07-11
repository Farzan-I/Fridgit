import { combineReducers } from 'redux'; 

import meals from './fetchMeals.js'
import instructions from './fetchInstructions.js'
import user from './addUser.js'

// fetchMeals reducer returns the data from the action 'FETCH_RECIPES' (from the funciton getMealData)
// the function below saves that data into the 'state' using combineReducers
export default combineReducers({ 
  meals,
  instructions,
  user
})


// In index, all the combined reducers get imported and saved to state.

