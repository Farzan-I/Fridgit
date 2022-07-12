import React, { useEffect, useState } from "react"; 
import Meals from './components/Meals/Meals.js'
import Navbar from './components/Navbar.js'
import Input from './components/Input.js'
import SignUp from './components/SignUp.js'
import Login from './components/Login.js'

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


  const [loggedInStatus, setLoggedInStatus] = useState(false)
 
  return (
    <div className="app">

      <Navbar />
      {!loggedInStatus &&
        <>
      <SignUp />
      <Login setLoggedInStatus={setLoggedInStatus}/>
        </>
      }
      <div className="search-container">
        <Input />
      </div>

      <div className="meals-container">
        <Meals />
      </div>

    </div>
  );
}

export default App;