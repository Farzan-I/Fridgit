import * as api from '../api/index.js'

export const getMealData = (search, ranking) => async (dispatch) => {
  try {
    const { data } = await api.fetchMeals({
      search: search,
    ranking: ranking
    });
    dispatch({ type: 'FETCH_RECIPES', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}