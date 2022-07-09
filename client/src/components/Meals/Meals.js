import React from "react";
import { useSelector } from 'react-redux';

import Meal from './Meal/Meal.js'
import Instruction from "./Instruction/Instruction.js"

export default function Meals() {
  const mealsData = useSelector((state) => state.meals) // meals is defined in reducers-index
  
  const instructionData = useSelector((state) => state.instructions)

  const instructions = {instructionData: instructionData}
  
  console.log("Meals component:" + instructionData)
  const meals = mealsData.map((meal) => {
    return (
      <>
      <Meal 
        key={meal.id}
        {...meal}
      />
      </>
    )
  })

  return (
    <div>
    <section className="meal--list">
      {meals}
    </section>
     {/* <Instruction
        {...instructions}
      /> */}
      
    </div>
  )
}