import React, { useEffect } from "react"; 
// import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Recipes from './components/Recipes/Recipes';
import Meals from './components/Meals/Meals.js'
import Navbar from './components/Navbar.js'
import Input from './components/Input.js'
import { useDispatch } from "react-redux";

import { getRecipes } from './actions/recipes'
import { getMealData } from './actions/fetchMeals'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMealData());
  }, [dispatch]);

  return (

    <div>
      <Navbar />
      <Input />
      <Meals />
    </div>
  
  );


}

export default App;