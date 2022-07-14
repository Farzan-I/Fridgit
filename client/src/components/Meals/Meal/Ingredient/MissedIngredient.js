import React from "react";

export default function MissedIngredient(props) {

  const handleClick = () => {
    console.log(props.id)
  }
  
  return (
    <div>
      <div className="missed-ingredient--tile">
        {props.name}
      </div>
    </div>
  )
} 

