// eslint-disable-next-line import/no-anonymous-default-export
import * as api from '../api/index.js'

export const removeFridgeItem = (fridgeItem, userState) => {
  switch (userState._id) {
    case true:
      return async (dispatch) => {
      try {
        const { data } = await api.removeItemFromFridge({
          fridgeItem: fridgeItem,
          _id: userState._id
        });
        console.log(data)
        dispatch({ type: 'REMOVE_FRIDGE_ITEM', payload: data });
      } catch (error) {
        console.log(error.message);
      }
    }
    default:
      return (dispatch) => {
        dispatch({ type: 'NO_USER_REMOVE_FRIDGE_ITEM', payload: {
          "_id": userState._id,
          "userName": userState.userName,
          "fridge": userState.fridge.push(fridgeItem)
        } });
      }
  }
}