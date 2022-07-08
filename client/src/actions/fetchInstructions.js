import * as api from '../api/index.js'

export const getMealInstructions = (mealId) => async (dispatch) => {
  try {
    const { data } = await api.fetchInstructions({mealId: mealId});
    // don't understand this line
    dispatch({ type: 'FETCH_INSTRUCTIONS', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}