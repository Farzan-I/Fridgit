import fetchInstructions from "../externalApi/mealInstructions.js"

export const getInstructionData = (req, res) => {
  fetchInstructions(req.body.mealId)
  .then(response => res.send(response))
}
