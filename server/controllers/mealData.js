import fetchMealData from '../externalApi/mealData.js'

export const getMealData = (req, res) => {
  fetchMealData(req.body.search)
  .then(response => res.send(response))
}

