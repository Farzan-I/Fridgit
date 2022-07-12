import React, { useState } from "react";
import { useSelector } from 'react-redux';
import MealBadge from "./MealBadge.js"

import Meal from './Meal/Meal.js'
import Instruction from "./Instruction/Instruction.js"

export default function Meals() {
  const mealsData = useSelector((state) => state.meals) // meals is defined in reducers-index
  const instructionData = useSelector((state) => state.instructions)
  
  const [showInstruction, setShowInstruction] = useState(false)

  console.log(instructionData)

  const mealBadges = () => {
    let keyArray = ["vegetarian", "vegan", "dairyFree", "glutenFree", "veryPopular", "cheap", "sustainable", "lowFodmap"]

    let mealBadges = keyArray.map((key) => {
      if (instructionData[key] === true) {
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
      {meals}
    </section>
    {showInstruction &&
    <section className="badge--list">
      {mealBadges()}
    </section>
    }
     {showInstruction && 
    <section className="instructions--tile">
      <Instruction
        {...instructionData}
      /> 
    </section>
      }
    </div>
  )
}