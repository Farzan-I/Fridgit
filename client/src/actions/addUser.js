import * as api from '../api/index.js'

//change this so it sends the user data to the backend. In the Input example, it was sending
//said data to a route in localhost:4000, I think...

export const addUser = (userData) => async (dispatch) => {
  try {
    const { data } = await api.fetchInstructions({userData});
    console.log("Actions log: " + data)
    dispatch({ type: 'FETCH_INSTRUCTIONS', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}