import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FridgeItem from './FridgeItem/FridgeItem.js'
import { addFridgeItem } from "../actions/addFridgeItem.js";

export default function Fridge() {
  let userState = useSelector((state) => state.user)

  // set state of fridge item input value
  const [fridgeItem, setFridgeItem] = useState({item: ""})
  //set removal item
  const [removeItem, setRemoveItem] = useState("")
  // get data of fridge
  const [fridgeState, setFridgeState] = useState(userState.fridge)

  
  const dispatch = useDispatch()

  const handleSubmit = async (event) => {
    event.preventDefault()
    dispatch(addFridgeItem(
      fridgeItem.item,
      userState._id
    ))
  }

  const handleClick = (item) => {
    // setRemoveItem(item)
    console.log(item)
    //dispatch(removeFridgeItem(item))
  }

  const fridgeContents = userState.fridge.map((item) => {
    return(
      <FridgeItem name={item} handleClick={handleClick}/>
    )
  })
  
  return (
    <div className="fridge--container">
        <div className="fridge--add-form">
          <form className="session--form" onSubmit={handleSubmit}>
          <h2>Add to your fridge!</h2>
            <input
              type="text"
              className="form--input"
              placeholder="Ingredients here..."
              value={fridgeItem.item} 
              onChange={(event) => setFridgeItem({...fridgeItem, item: event.target.value})}
            />
            <input type="submit" className="form--button"/>

          </form>
        </div>
        <div className="fridge--contents">
          {fridgeContents}
        </div>
    </div>
  )
}