// eslint-disable-next-line import/no-anonymous-default-export
import * as api from '../api/index.js'

export const addFridgeItem = (fridgeItem, userState) => {
  console.log("acrtion line 5 ", userState)
  switch (userState._id) {
    case "":
      let array = userState.fridge
      array.push(fridgeItem)
      return (dispatch) => {
        dispatch({ type: 'NO_USER_ADD_FRIDGE_ITEM', payload: {
          "_id": "",
          "userName": "",
          "fridge": array
        }});
      }
    default:
      return async (dispatch) => {
        try {
          const { data } = await api.addItemToFridge({
            fridgeItem: fridgeItem,
            _id: userState._id
          });
          console.log("Line 23: ", data)
          dispatch({ type: 'ADD_FRIDGE_ITEM', payload: data });
      
        } catch (error) {
          console.log(error.message);
        }
      }
  }
}

