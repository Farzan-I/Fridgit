import React from "react";
import axios from 'axios';


export default function Input() {
  const mealsUrl = 'http://localhost:4000/meals';

  const searchMeals = () => axios.post(mealsUrl, {
    search: "chicken, bacon, leeks"
  })

  return (
    <div className="form">
      <form onSubmit={searchMeals}>
        <input 
          type="text"
          className="form--input"
          placeholder="Ingredients here..."
          value="Salmon,Brain,Potatoes,Chicken,Brioche,Flour,Lemon,Egg "
        />
        <input type="submit" />
      </form>
    </div>
  )
}