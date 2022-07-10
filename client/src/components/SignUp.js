import React, { useState, useEffect } from "react";
import axios from 'axios';
import { addUser } from '../actions/addUser.js'
import { useDispatch, useSelector } from 'react-redux';



const SignUp = ({Signup, error}) => {
   
  const [userData, setUserData] = useState({
    userName: '',
    password: '',
    email: ''
  })

  // const clear = () => {
  //   // setCurrentId(0);
  //   setSearchData({ ingredients: '' });
  // };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData)
    //handleSubmit works, now just need to use it to send the data somewhere... 
    // SignUp(userData)
    console.log('form submitted')
    
    //what happens when we submit? Where does the data go...??? 

    //Do we need to call this SignUp function somewhere outside of the 
    //component? In the tutorial I was watching (https://www.youtube.com/watch?v=91qEdc6dSUs), he calls it from the App.js, but 
    //that seems wrong for our setup...

    
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
          onChange={e => setUserData({...userData, userName: e.target.value})} value={userData.userName}
        />
        <input 
          type="password"
          name="password"
          className="form--input"
          placeholder="Choose password"
          required
          onChange={e => setUserData({...userData, password: e.target.value})} value={userData.password}
        />
        <input 
          type="email"
          name="email"
          className="form--input"
          placeholder="Enter your email"
          required
          onChange={e => setUserData({...userData, email: e.target.value})} value={userData.email}
        />
        {/* <input type="submit" value="sign up" /> */} 
        {/* not sure which is preferable, submit or button */}
        <button>Signup</button>
      </form>
    </div>
  );
}

export default SignUp;