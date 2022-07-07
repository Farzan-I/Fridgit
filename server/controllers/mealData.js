import fetchMealData from '../externalApi/mealData.js'
import sendMealSearch from '../externalApi/mealSearch.js'

export const searchMealDB = (req, res) => {
  // this is recieving info from the frontend
  // i think that we just need to modify the get route
  console.log(req.body)
}

export const getMealData = (req, res) => {
  fetchMealData()
  .then(response => res.send(response))
}

