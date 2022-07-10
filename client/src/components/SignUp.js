import React, { useState, useEffect } from "react";
import axios from 'axios';
import { addUser } from '../actions/addUser.js'
import { useDispatch, useSelector } from 'react-redux';



const SignUp = ({Signup, error}) => {
   
  const [userData, setUserData] = useState({
    userName: '',
    email: '',
    password: '',
    fridge: []
  })

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("SignUp form:" + userData.userName)  
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
          value={userData.userName} onChange={e => setUserData({...userData, userName: e.target.value})}
        />
        <input 
          type="password"
          name="password"
          className="form--input"
          placeholder="Choose password"
          required
          value={userData.password} onChange={e => setUserData({...userData, password: e.target.value})}
        />
        <input 
          type="email"
          name="email"
          className="form--input"
          placeholder="Enter your email"
          required
          value={userData.email} onChange={e => setUserData({...userData, email: e.target.value})} 
        />
        {/* <input type="submit" value="sign up" /> */} 
        {/* not sure which is preferable, submit or button */}
        <button>Signup</button>
      </form>
    </div>
  );
}

export default SignUp;