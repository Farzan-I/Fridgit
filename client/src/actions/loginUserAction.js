import * as api from '../api/index.js'

export const loginUser = (userData) => async (dispatch) => {
  try {
    console.log('data dispatched')
    const { data } = await api.loginUser({userData: userData});
    console.log('data returned')
    dispatch({ type: 'VERIFY_USER', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}