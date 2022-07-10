import * as api from '../api/index.js'

export const getMealInstructions = (mealId) => async (dispatch) => {
  try {
    const { data } = await api.fetchInstructions({mealId: mealId});
    console.log("Actions log: " + data)
    dispatch({ type: 'FETCH_INSTRUCTIONS', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}