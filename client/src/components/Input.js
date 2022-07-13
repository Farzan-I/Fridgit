import React, { useState } from "react";
import { getMealData } from '../actions/fetchMeals.js'
import { useDispatch, useSelector } from 'react-redux';



const Input = () => {

  const userFridge = useSelector((state) => state.user.fridge)

  const [searchData, setSearchData] = useState({
    ingredients: ''
  })

  console.log(userFridge)

  // const mealsUrl = 'http://localhost:4000/meals/search';

  // const clear = () => {
  //   // setCurrentId(0);
  //   setSearchData({ ingredients: '' });
  // };

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    //this is what prevents the page re-rendering  
    dispatch(getMealData(searchData.ingredients));
  };

  return (
    <div>
      <h1 className="input--header">What's in your fridge?</h1>

      <div className="form">
        <form onSubmit={handleSubmit}>
          <div style={{width:0,height:0}}>
            <input 
              type="hidden"
              className="form--input"
              placeholder="Ingredients here..."
              value={searchData.ingredients} onChange={(e) => setSearchData({ ...searchData, ingredients: e.target.value })}
            />
          </div>
          <input type="submit" className="form--button"/>
        </form>
      </div>
    </div>
    
    // <div className="form">
    //   <form onSubmit={handleSubmit}>
    //     <input 
    //       type="text"
    //       className="form--input"
    //       placeholder="Ingredients here..."
    //       value={searchData.ingredients} onChange={(e) => setSearchData({ ...searchData, ingredients: e.target.value })}
    //     />
    //     <input type="submit" className="form--button"/>
        
    //   </form>
    // </div>
  );
}

export default Input;