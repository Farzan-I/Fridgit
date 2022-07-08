import React from "react";
import axios from 'axios';
import { getMealData } from '../actions/fetchMeals.js'
import { useDispatch, useSelector } from 'react-redux';



const Input = () => {
  // const mealsUrl = 'http://localhost:4000/meals/search';

  // const searchMeals = () => axios.post(mealsUrl, {
  //   search: "chicken, bacon, leeks"
  // })

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    dispatch(getMealData("beef, potatoes"));
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          className="form--input"
          placeholder="Ingredients here..."
          value="Egg"
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Input;