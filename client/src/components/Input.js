import React, { useState } from "react";
import { getMealData } from '../actions/fetchMeals.js'
import { useDispatch } from 'react-redux';



const Input = () => {

  const [searchData, setSearchData] = useState({
    ingredients: ''
  })

  // const mealsUrl = 'http://localhost:4000/meals/search';

  // const searchMeals = () => axios.post(mealsUrl, {
  //   search: "chicken, bacon, leeks"
  // })

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
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