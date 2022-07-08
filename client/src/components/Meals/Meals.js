import React from "react";
import { useSelector } from 'react-redux';

import Meal from './Meal/Meal.js'

export default function Meals() {
  const mealsData = useSelector((state) => state.meals) // meals is defined in reducers-index
  
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
    </div>
  )
}