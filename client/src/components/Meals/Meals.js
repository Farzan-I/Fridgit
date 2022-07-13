import React, { useState } from "react";
import { useSelector } from 'react-redux';
import MealBadge from "./MealBadge.js"

import Meal from './Meal/Meal.js'
import Instruction from "./Instruction/Instruction.js"
import Measures from "./Measures/Measures.js"

export default function Meals() {
  const mealsData = useSelector((state) => state.meals) // meals is defined in reducers-index
  const recipeData = useSelector((state) => state.instructions)
  
  const [showInstruction, setShowInstruction] = useState(false)

  

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
  
  const meals = mealsData.map((meal) => {
    return (
    <Meal 
      key={meal.id}
      {...meal}
      setShowInstruction={setShowInstruction}
    />
  )
  })

  return (
    <div>
      <section className="meal--list">
    {/* <div className="-parent"> */}
        {meals}
    {/* </div> */}
      </section>
    {showInstruction &&
    <section className="badge--list">
      {mealBadges()}
    </section>
    }
     {showInstruction && 
    <section className="instructions--tile">
      <Instruction
        {...recipeData}
      /> 
      <Measures 
        {...recipeData}
      />
    </section>
      }
    </div>
  )
}