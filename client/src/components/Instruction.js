import React, { useState, useEffect } from "react";
import axios from 'axios';
import { getMealData } from '../actions/fetchMeals.js'
import { useDispatch, useSelector } from 'react-redux';

//inside each meal container, need code to say that when tile is clicked 
//on, send this request to the server. This returns response to change 
//state of something called instructions, initially empty in state, once 
//state changes and is populated with instructions, all that gets
//printed into instructions container

//server needs:
//route
//controller

//client needs:
//reducers
//check actions
//Instruction component 

const Input = () => {

  const [searchData, setSearchData] = useState({
    ingredients: ''
  })

  const clear = () => {
    // setCurrentId(0);
    setSearchData({ ingredients: '' });
  };

  // const mealsUrl = 'http://localhost:4000/meals/search';

  // const searchMeals = () => axios.post(mealsUrl, {
  //   search: "chicken, bacon, leeks"
  // })

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //this is what prevents the page re-rendering
    
    dispatch(getMealData(searchData.ingredients));
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          className="form--input"
          placeholder="Ingredients here..."
          value={searchData.ingredients} onChange={(e) => setSearchData({ ...searchData, ingredients: e.target.value })}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Input;