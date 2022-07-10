import React, { useState, useEffect } from "react";
import axios from 'axios';
import { getMealData } from '../actions/fetchMeals.js'
import { useDispatch, useSelector } from 'react-redux';



const Input = () => {

  const [searchData, setSearchData] = useState({
    ingredients: ''
  })

  // SHS - implement clear

  // const clear = () => {
  //   // setCurrentId(0);
  //   setSearchData({ ingredients: '' });
  // };

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