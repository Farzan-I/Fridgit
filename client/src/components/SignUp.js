import React, { useState } from "react";
import { addUser } from '../actions/addUser.js'
import { useDispatch } from 'react-redux';



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
    dispatch(addUser(userData));
  };

  return (
    <div className="session--form">
      <h2>Join the no-waste revolution...</h2>
      <form onSubmit={handleSubmit}>
        <input 
          data-cy="signup-username"
          type="text"
          name="username"
          className="form--input"
          placeholder="Choose username"
          required 
          value={userData.userName} onChange={e => setUserData({...userData, userName: e.target.value})}
        />
        <input 
          data-cy="signup-password"
          type="password"
          name="password"
          className="form--input"
          placeholder="Choose password"
          required
          value={userData.password} onChange={e => setUserData({...userData, password: e.target.value})}
        />
        <input 
          data-cy="signup-email"
          type="email"
          name="email"
          className="form--input"
          placeholder="Enter your email"
          required
          value={userData.email} onChange={e => setUserData({...userData, email: e.target.value})} 
        />
<<<<<<< HEAD
        <button data-cy="signup-button">Signup</button>
=======
        <button className="form--button">Signup</button>
>>>>>>> 8e02710e9ac2510d2274056b29bfe84354f22837
      </form>
    </div>
  );
}

export default SignUp;