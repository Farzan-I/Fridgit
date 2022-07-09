import React, { useState, useEffect } from "react";
import axios from 'axios';
import { addUser } from '../actions/addUser.js'
import { useDispatch, useSelector } from 'react-redux';



const SignUp = () => {

  
  const [userData, setUserData] = useState({
    userName: '',
    password: '',
    email: ''
  })

  // const handleChange = (e) => {
  //   const {name, value} = e.target  
  //   this.setState({[name]:value}) 
  // }

  // const clear = () => {
  //   // setCurrentId(0);
  //   setSearchData({ ingredients: '' });
  // };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('form submitted')
    //this should prevent the page re-rendering, but it doesn't...
    //have to refresh to get page back...
    //need to reset state?
  
    //what happens when we submit? Where does the data go... 
    
    dispatch(addUser(userData));
  };

  return (
    <div className="signup-form">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="username"
          className="form--input"
          placeholder="Choose username"
          required 
          // onChange={this.handleChange}
          // value={searchData.ingredients} onChange={(e) => setSearchData({ ...searchData, ingredients: e.target.value })}
        />
        <input 
          type="password"
          name="password"
          className="form--input"
          placeholder="Choose password"
          // value={searchData.ingredients} onChange={(e) => setSearchData({ ...searchData, ingredients: e.target.value })}
        />
        <input 
          type="email"
          name="email"
          className="form--input"
          placeholder="Enter your email"
          // value={searchData.ingredients} onChange={(e) => setSearchData({ ...searchData, ingredients: e.target.value })}
        />
        {/* <input type="submit" value="sign up" /> */}
        <button>Signup</button>
      </form>
    </div>
  );
}

export default SignUp;