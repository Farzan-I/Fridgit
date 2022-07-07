import mealData from '../externalApi/mealData.js'

export const getMealData = (req, res) => {
  res.send(mealData)
}

