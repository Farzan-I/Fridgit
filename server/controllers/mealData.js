import fetchMealData from '../externalApi/mealData.js'

export const getMealData = (req, res) => {
  fetchMealData(req.body.search, req.body.ranking)
  .then(response => res.send(response))
}

