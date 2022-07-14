import React, { useState } from "react";
import { useSelector } from 'react-redux';
import MealBadge from "./MealBadge.js"

import Meal from './Meal/Meal.js'
import Instruction from "./Instruction/Instruction.js"
import Measures from "./Measures/Measures.js"

export default function Meals(props) {
  const mealsData = useSelector((state) => state.meals) // meals is defined in reducers-index
  const recipeData = useSelector((state) => state.instructions)

  


  
  const meals = mealsData.map((meal) => {
    return (
    <Meal 
      key={meal.id}
      {...meal}
      setShowInstruction={props.setShowInstruction}
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
    {/* {showInstruction &&
    <section className="badge--list">
      {mealBadges()}
    </section>
    } */}
     {/* {showInstruction && 
    <section className="instructions--tile">
      <Instruction
        {...recipeData}
      /> 
      <Measures 
        {...recipeData}
      />
    </section>
      } */}
    </div>
  )
}