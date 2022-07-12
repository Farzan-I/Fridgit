import React, { useState } from "react";
// import styled from "styled-components";
import { useDispatch } from 'react-redux';
// import { addUser } from '../actions/addUser.js'
import Login from "./Login.js";

//need to move all of this to sign-up. No need for two different components and routes
//are already established

export default function LoginDropDown() {

  const [userData, setUserData] = useState({
    userName: '',
    email: '',
    password: '',
    fridge: []
  })

  const clear = () => {
    // setCurrentId(0);
    setUserData({ 
      userName: '',
      email: '',
      password: '',
     });
  }; 

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(userData));
    // props.setLoggedInStatus(true)
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);
  
  return (
    <div className="main-drop-down-container">
      <div className="drop-down-container">
        <div className="drop-down-header" onClick={toggling}>
       {"Create Account"}
        </div>
        {isOpen && (
          <div className="drop-down-list-container">
            <div className="drop-down-list">
              <form className="fields-container" onSubmit={handleSubmit}>
                <SignUp/>

                  {/* <input 
                    type="text"
                    name="username"
                    className="drop-down-list-item"
                    placeholder="Choose username"
                    required 
                    value={userData.userName} onChange={e => setUserData({...userData, userName: e.target.value})}
                  />
     */}
                  {/* <input 
                    type="password"
                    name="password"
                    className="drop-down-list-item"
                    placeholder="Choose password"
                    required
                    value={userData.password} onChange={e => setUserData({...userData, password: e.target.value})}
                  /> */}
           
                
                  {/* <input
                    type="email"
                    name="email"
                    className="drop-down-list-item"
                    placeholder="Enter your email"
                    required
                    value={userData.email} onChange={e => setUserData({...userData, email: e.target.value})} 
                  /> */}
          
                  <div className="sign-up-button">
                    {/* <button>Signup</button> */}
                  </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}