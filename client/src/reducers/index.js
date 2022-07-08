import { combineReducers } from 'redux'; 

import meals from './fetchMeals.js'
//import foo from bah

// fetchMeals reducer returns the data from the action 'FETCH_RECIPES' (from the funciton getMealData)
// the function below saves that data into the 'state' using combineReducers
export default combineReducers({ 
  meals
  //foo
})
// In index, all the combined reducers get imported and saved to state.