import React from "react";
import axios from 'axios';
import { getMealData } from '../actions/fetchMeals.js'


export default function Input() {
  // const mealsUrl = 'http://localhost:4000/meals/search';

  // const searchMeals = () => axios.post(mealsUrl, {
  //   search: "chicken, bacon, leeks"
  // })

  return (
    <div className="form">
      <form onSubmit={getMealData("beef")}>
        <input 
          type="text"
          className="form--input"
          placeholder="Ingredients here..."
          value="Egg"
        />
        <input type="submit" />
      </form>
    </div>
  )
}