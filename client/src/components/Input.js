import React, { useState } from "react";
import { getMealData } from '../actions/fetchMeals.js'
import { useDispatch, useSelector } from 'react-redux';



const Input = () => {

  const userFridge = useSelector((state) => state.user.fridge)
  
  const [searchData, setSearchData] = useState({
    ingredients: ''
  })
  const [isChecked, setIsChecked] = useState(false);
  
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  // const mealsUrl = 'http://localhost:4000/meals/search';

  // const clear = () => {
  //   // setCurrentId(0);
  //   setSearchData({ ingredients: '' });
  // };

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    dispatch(getMealData(
      userFridge.join(","),
      isChecked ? 1 : 2
      ));
  };

  return (
    <div>
      <h1 className="input--header">What's in your fridge?</h1>
      <div>
        <h3>How do you want to use your ingredients?</h3>
        {isChecked ? "Use as many as I can" : "See recipes I have all the ingredients for"}
        <label class="switch">
        <input type="checkbox" checked={isChecked} onChange={handleOnChange}/>
        <span class="slider round"></span>
      </label>
      </div>
      <div>
        <button className="form--button" onClick={handleSubmit}>What's for Dinner?</button>
      </div>
    </div>
    
  );
}

export default Input;