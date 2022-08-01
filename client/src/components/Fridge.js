import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FridgeItem from './FridgeItem/FridgeItem.js'
import { addFridgeItem } from "../actions/addFridgeItem.js";
import { removeFridgeItem } from "../actions/removeFridgeItem.js"
import Input from './Input.js'
import Instruction from './Meals/Instruction/Instruction.js'
import Measures from './Meals/Measures/Measures.js'
import MealBadge from "./Meals/MealBadge.js";
import UsedIngredient from "./Meals/Meal/Ingredient/UsedIngredient.js";
import MissedIngredient from "./Meals/Meal/Ingredient/MissedIngredient.js";

export default function Fridge(props) {
  const userState = useSelector((state) => state.user)
  const recipeData = useSelector((state) => state.instructions)


  // set state of fridge item input value
  const [fridgeItem, setFridgeItem] = useState({item: ""})

  const dispatch = useDispatch()

  const handleSubmit = async (event) => {
    console.log("line 21")
    event.preventDefault()
      let asyncAddFridgeItem = addFridgeItem(
        fridgeItem.item,
        userState
        )
        asyncAddFridgeItem(dispatch)
    setFridgeItem({item: ""})
  }

  const handleClick = (item) => {
    dispatch(removeFridgeItem(
      item,
      userState
    ))
  }

  const fridgeContents = userState.fridge.map((item) => {
    return(
      <FridgeItem name={item} handleClick={handleClick}/>
    )
  })

  const mealBadges = () => {
    let keyArray = ["vegetarian", "vegan", "dairyFree", "glutenFree", "veryPopular", "cheap", "sustainable", "lowFodmap"]

    let mealBadges = keyArray.map((key) => {
      if (recipeData[key] === true) {
        return (
          <MealBadge name={key}/>
        )
      }
    })
    return mealBadges

    }
  console.log(recipeData)

  const usedIngredients = props.selectedMeal.usedIngredients.map((ingredient) => {
    return(
        <UsedIngredient
          key={ingredient.id}
          name={ingredient.name}
          id={ingredient.id}
        />
    )
})

const missedIngredients = props.selectedMeal.missedIngredients.map((ingredient) => {
  return (
    <MissedIngredient
      key={ingredient.id}
      name={ingredient.name}
      id={ingredient.id}
    />
  )
})

  
  return (

  
    <div className="fridge--container">
        <div className="fridge--add-form">
        </div>
        <div className="fridge--contents">
        <div className="welcome-container" >
        {userState.userName && <h2 className="welcome" data-cy="nav-username">Hi, {userState.userName[0].toUpperCase() + userState.userName.substring(1)},<br></br>
              here's what's in your fridge!</h2>}
          </div>
          <div className="fridge-session-form-subcontainer">
            <form className="fridge-session-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="form--input"
              placeholder="add ingredient..."
              value={fridgeItem.item} 
              onChange={(event) => setFridgeItem({...fridgeItem, item: event.target.value})}
            />
            <input type="submit" className="form--button"/>

            </form>
          </div>
          <div className="fridge-contents-subcontainer">
            {fridgeContents}
          </div>
        </div>
        <div className="fridge-what-for-dinner-subcontainer">
          <Input />
        </div>
        {props.showInstruction && <div className="fridge--instructions-window">
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
            <div className="meal-badge-box">
              {mealBadges()}
            </div>
            <Measures 
              {...recipeData}
            />
            <Instruction
            {...recipeData}
            /> 
        </div>
        }
    </div>
  )
}