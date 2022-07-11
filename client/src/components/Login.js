import React, { useState, useEffect } from "react";
import axios from 'axios';
import { loginUser } from '../actions/loginUserAction.js'
import { useDispatch, useSelector } from 'react-redux';



const Login = ({Login, error}) => {
   
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })

  const clear = () => {
    // setCurrentId(0);
    setUserData({ 
      email: '',
      password: '',
     });
  }; 

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(userData));
    clear()
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        
        <input 
          type="email"
          name="email"
          className="form--input"
          placeholder="Enter your email"
          required
          value={userData.email} onChange={e => setUserData({...userData, email: e.target.value})} 
        />
        
        <input 
          type="password"
          name="password"
          className="form--input"
          placeholder="Choose password"
          required
          value={userData.password} onChange={e => setUserData({...userData, password: e.target.value})}
        />
        
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
