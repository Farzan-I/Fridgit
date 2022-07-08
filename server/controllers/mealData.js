import fetchMealData from '../externalApi/mealData.js'

export const getMealData = (req, res) => {
  console.log(req.body.search)
  fetchMealData(req.body.search)
  .then(response => res.send(response))
}

