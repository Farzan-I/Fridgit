import React, { useState, useEffect } from "react";
import axios from 'axios';
import { loginUser } from '../actions/loginUserAction.js'
import { useDispatch, useSelector } from 'react-redux';



const Login = ({Login, error}) => {
   
  const [userData, setUserData] = useState({
    userName: '',
    email: '',
    password: '',
    fridge: []
  })

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(userData));
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
          data-cy="login-email"
          type="email"
          name="email"
          className="form--input"
          placeholder="Enter your email"
          required
          value={userData.email} onChange={e => setUserData({...userData, email: e.target.value})} 
        />
        <input 
          data-cy="login-password"
          type="password"
          name="password"
          className="form--input"
          placeholder="Choose password"
          required
          value={userData.password} onChange={e => setUserData({...userData, password: e.target.value})}
        />
        <button id='login--button' data-cy='login-button'>Login</button>
      </form>
    </div>
  );
}

export default Login;