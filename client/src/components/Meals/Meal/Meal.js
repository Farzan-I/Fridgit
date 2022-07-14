import React from "react";
import { getMealInstructions } from "../../../actions/fetchInstructions.js";
import { useDispatch } from "react-redux";
import UsedIngredient from "./Ingredient/UsedIngredient.js";
import MissedIngredient from "./Ingredient/MissedIngredient.js";

export default function Meal(props) {
  const dispatch = useDispatch()
  
  const handleClick = () => {
    dispatch(getMealInstructions(props.id))
    props.setSelectedMeal(props)
    props.setShowInstruction(true)
  }

  const isReadyToMake = () => {
    return props.missedIngredients.length === 0 ? true : false
  }

  const ingredientCount = `${props.usedIngredients.length}/${(props.usedIngredients.length + props.missedIngredients.length)} `
  

  const usedIngredients = props.usedIngredients.map((ingredient) => {
      return(
          <UsedIngredient
            key={ingredient.id}
            name={ingredient.name}
            id={ingredient.id}
            measure={ingredient.originalName}
          />
      )
  })

  const missedIngredients = props.missedIngredients.map((ingredient) => {
    return (
      <MissedIngredient
        key={ingredient.id}
        name={ingredient.name}
        id={ingredient.id}
        measure={ingredient.originalName}
      />
    )
  })
  
  

  return (
    <div className="meal-card">
        <div className="meal--title">{props.title}</div>
        <div className="meal-card--info" onClick={handleClick}>
          <img className="meal-card--image" src={props.image} alt="meal"></img>
      
        </div>
          <div class="badge">
            <div className="meal-card--spec">
              <img className="meal-card--like-thumb" src="./like-thumb.png" alt="like-thumb"></img>
              <span className="meal-card--likes-count">{props.likes}</span>
              <div className="meal--ingredient-count">
                <span className="bold">{ingredientCount}</span>Ingredients
              </div>
            </div>
          {isReadyToMake() && <div className="badge">Ready to Make ✅</div>}
          </div>
      {/* <div className="ingredient-info">
      <p className="bold-gray">Ingredients you have:</p>
        <div className="used-ingredients">
          {usedIngredients}
        </div>
      <p className="bold-gray">Ingredients you're missing:</p>
        <div className="missed-ingredients">
          {missedIngredients}
        </div>
      </div> */}
    </div>
  )
}