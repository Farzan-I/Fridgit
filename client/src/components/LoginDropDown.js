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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   dispatch(loginUser(userData));
  //   // props.setLoggedInStatus(true)
  // };

  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);
  
  return (
    <div className="main-drop-down-container">
      <div className="drop-down-container">
        <div className="drop-down-header" onClick={toggling}>
       {"Login"}
        </div>
        {isOpen && (
          <div className="drop-down-list-container">
            <div className="drop-down-list">
                <Login/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}