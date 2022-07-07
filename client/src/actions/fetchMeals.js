import * as api from '../api/index.js'

export const getMealData = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMeals();

    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}