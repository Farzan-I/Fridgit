import React from "react";
import { getMealInstructions } from "../../../actions/fetchInstructions.js";
import { useDispatch } from "react-redux";
import UsedIngredient from "./Ingredient/UsedIngredient.js";
import MissedIngredient from "./Ingredient/MissedIngredient.js";

export default function Meal(props) {
  const dispatch = useDispatch()
  
  const handleClick = () => {
    dispatch(getMealInstructions(props.id))
    props.setShowInstruction(true)
  }

  
  const usedIngredients = props.usedIngredients.map((ingredient) => {
      return(
          <UsedIngredient
            key={ingredient.id}
            name={ingredient.name}
            id={ingredient.id}
          />
      )
  })

  const missedIngredients = props.missedIngredients.map((ingredient) => {
    return (
      <MissedIngredient
        key={ingredient.id}
        name={ingredient.name}
        id={ingredient.id}
      />
    )
  })
  
  

  return (
    <div className="meal-card" >
      <div className="meal-info" onClick={handleClick}>
        <img className="meal-card--image" src={props.image} alt="meal"></img>
        <p className="meal--title">{props.title}</p>
        <div className="meal-card--info">
          <img className="meal-card--like-thumb" src="./like-thumb.png" alt="like-thumb"></img>
          <span>{props.likes}</span>
        </div>
      </div>
      <div className="ingredient-info">
      <p className="bold-gray">Ingredients you have:</p>
        <div className="used-ingredients">
          {usedIngredients}
        </div>
      <p className="bold-gray">Ingredients you're missing:</p>
        <div className="missed-ingredients">
          {missedIngredients}
        </div>
      </div>
    </div>
  )
}