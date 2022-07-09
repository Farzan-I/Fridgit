import React, { useEffect } from "react"; 
// import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Meals from './components/Meals/Meals.js'
import Navbar from './components/Navbar.js'
import Input from './components/Input.js'
import SignUp from './components/SignUp.js'
import { useDispatch } from "react-redux";

import { getMealData } from './actions/fetchMeals.js'
import { getMealInstructions} from './actions/fetchInstructions.js'

const App = () => {
  const dispatch = useDispatch();

  // this is the call to the backend
  useEffect(() => {
    dispatch(getMealData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getMealInstructions());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <SignUp />
      <Input />
      <Meals />
    </div>
  );
}

export default App;