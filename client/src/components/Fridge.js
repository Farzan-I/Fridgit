import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FridgeItem from './FridgeItem/FridgeItem.js'

export default function Fridge() {

  // set state of fridge item input value
  const [fridgeItem, setFridgeItem] = useState({item: ""})
  //set removal item
  const [removeItem, setRemoveItem] = useState("")
  // get data of fridge

  const fridge = useSelector((state) => state.user.fridge)
  

  const dispatch = useDispatch()

  const handleSubmit = async (event) => {
    event.preventDefault()
    // dispatch(addFridgeItem(fridgeItem))
  }

  const handleClick = (item) => {
    // setRemoveItem(item)
    console.log(item)
    //dispatch(removeFridgeItem(item))
  }

  const fridgeContents = fridge.map((item) => {
    return(
      <FridgeItem name={item} onClick={handleClick}/>
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
              onChange={(event) => setFridgeItem({...fridgeItem, fridgeItem: event.target.value})}
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