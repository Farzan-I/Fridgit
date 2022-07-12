import * as api from '../api/index.js'

export const addFridgeItem = (fridgeItem, userID) => async (dispatch) => {
  try {
    console.log("Action send:" + fridgeItem + userID)
    const { data } = await api.addItemToFridge({
      fridgeItem: fridgeItem,
      userID: userID
    });
    console.log(data)
    dispatch({ type: 'ADD_FRIDGE_ITEM', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}