import * as api from '../api/index.js'

export const addFridgeItem = (fridgeItem, userID) => async (dispatch) => {
  try {
    const { data } = await api.addItemToFridge({
      fridgeItem: fridgeItem,
      _id: userID
    });
    console.log(data)
    dispatch({ type: 'ADD_FRIDGE_ITEM', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}