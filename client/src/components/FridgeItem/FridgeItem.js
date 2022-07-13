import React from "react";

export default function FridgeItem(props) {
  const handleClick = () => {
    // setRemoveItem(item)
    console.log()
    props.handleClick(props.name)
  }
  return (
    <div className="fridge--item-tile" >
      {props.name} <span className="bold-gray" onClick={handleClick}>-</span>
    </div>
  )
}