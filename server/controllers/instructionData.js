import fetchInstructions from "../externalApi/mealInstructions.js"

export const getInstructionData = (req, res) => {
  console.log("Server controller:" + req.body.mealId)
  fetchInstructions(req.body.mealId)
  .then(response => res.send(response))
}
