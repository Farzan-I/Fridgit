import * as api from '../api/index.js'

export const getMealData = (search) => async (dispatch) => {
  try {
    const { data } = await api.fetchMeals({search: search});
    // don't understand this line
    dispatch({ type: 'FETCH_RECIPES', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}