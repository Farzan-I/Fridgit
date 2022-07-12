import React, { useState } from "react";
import { useSelector } from 'react-redux';

import Meal from './Meal/Meal.js'
import Instruction from "./Instruction/Instruction.js"

export default function Meals() {
  const mealsData = useSelector((state) => state.meals) // meals is defined in reducers-index
  const instructionData = useSelector((state) => state.instructions)
  
  const [showInstruction, setShowInstruction] = useState(false)

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
    <section className="meal--list" data-cy="meal-list">
      {meals}
    </section>
    <section className="instructions--tile">
     {showInstruction && 
      <Instruction
        {...instructionData}
      />}
    </section>
    </div>
  )
}