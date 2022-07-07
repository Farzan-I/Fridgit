import fetchMealData from '../externalApi/mealData.js'

export const getMealData = (req, res) => {
  fetchMealData()
  .then(response => res.send(response))
}

