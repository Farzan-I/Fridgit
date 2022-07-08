import fetchMealData from '../externalApi/mealData.js'

export const searchMealDB = (req, res) => {
  console.log(req.body)
  fetchMealData()
  .then(response => res.send(response))
}

export const getMealData = (req, res) => {
  console.log(req.body.search)
  fetchMealData(req.body.search)
  .then(response => res.send(response))
}

