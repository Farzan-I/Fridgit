import * as api from '../api/index.js'

export const removeFridgeItem = (fridgeItem, userID) => async (dispatch) => {
  try {
    const { data } = await api.removeItemFromFridge({
      fridgeItem: fridgeItem,
      _id: userID
    });
    console.log(data)
    dispatch({ type: 'REMOVE_FRIDGE_ITEM', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}