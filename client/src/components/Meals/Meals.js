import React from "react";
import { useSelector } from 'react-redux';

import Meal from './Meal/Meal.js'
import Instruction from "./Instruction/Instruction.js"

export default function Meals() {
  const mealsData = useSelector((state) => state.meals) // meals is defined in reducers-index
  
  const instructionData = useSelector((state) => state.instructions)
  console.log(instructionData)

    console.log("Meals component:" + instructionData)
    const meals = mealsData.map((meal) => {
      return (
      <Meal 
        key={meal.id}
        {...meal}
      />
    )
  })

  return (
    <div>
    <section className="meal--list">
      {meals}
    </section>
    <section className="instructions--tile">
     <Instruction
        {...instructionData}
      />
    </section>
    </div>
  )
}