import React from "react";

export default function Meal(props) {
  const handleClick = () => {
    console.log(props.id)
  }

  return (
    <div className="meal-card" onClick={handleClick}>
      <img className="meal-card--image" src={props.image} alt="meal"></img>
      <p className="meal--title">{props.title}</p>
      <div className="meal-card--info">
        <img className="meal-card--like-thumb" src="./like-thumb.png" alt="like-thumb"></img>
        <span>{props.likes}</span>
      </div>
      <p className="bold-gray">Ingredients you have:</p>
      <p className="bold-gray">Ingredients you're missing:</p>

    </div>
  )
}