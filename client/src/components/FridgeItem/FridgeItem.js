import React from "react";

export default function FridgeItem(props) {
  return (
    <div className="fridge--item-tile">
      {props.name}<span className="bold-gray" onClick={props.onClick(props.name)}>-</span>
    </div>
  )
}