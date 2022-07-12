import React, { useState } from "react";
import { loginUser } from '../actions/loginUserAction.js'
import { useDispatch } from 'react-redux';



const Login = (props, {Login, error}) => {
   
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
    props.setLoggedInStatus(true)
  };

  return (
    <div className="session--form">
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
<<<<<<< HEAD
        <button data-cy="login-button">Login</button>
=======
        <button className="form--button">Login</button>
>>>>>>> 8e02710e9ac2510d2274056b29bfe84354f22837
      </form>
    </div>
  );
}

export default Login;