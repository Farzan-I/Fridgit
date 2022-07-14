import React, { useState } from "react";
import { logoutUser } from '../actions/logoutUserAction.js'
import { useDispatch } from 'react-redux';



const Logout = (props, {Logout, error}) => {
   
  const userData = {
    userName: '',
    email: '',
    password: '',
    fridge: []
  }

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(logoutUser(userData));
    props.setLoggedInStatus(false)
  };

  return (
    <div>
      <form onClick={handleSubmit}>
        <div className="logout-header">
          {"Logout"}
        </div>
      </form>
    </div>
  );
}

export default Logout;