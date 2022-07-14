import React from "react";
import { useSelector } from "react-redux";
import Login from './Login.js'
import Logout from './Logout.js'
import LoginDropDown from "./LoginDropDown.js";
import SignUpDropDown from "./SignUpDropDown.js";

export default function Navbar() {
  const userData  = useSelector((state) => state.user)

  return (
    <nav>
      <div className="nav-container">
        <div className="logo-and-title">
          <img className="nav--logo" src='./brioche_sliced.png' alt="logo"></img>
          <div className="nav-title-and-slogan"> 
            <h3 className="nav--title">Brains On Brioche</h3>
            <h4 className="nav-slogan">The no-waste revolution</h4>
          </div>
        </div>    
        <div className="nav--username--container">
          {userData.userName && <h2 className="nav--username">Hi, {userData.userName[0].toUpperCase() + userData.userName.substring(1)}!</h2>}
        </div>
        <div className="navbar-main-drop-down-container">
          <div className="signup-dropdown-container">  
            <SignUpDropDown/>
          </div>
          <div className="login-dropdown-container">
            <LoginDropDown/>
          </div>
          <div className="login-dropdown-container">
            <Logout />
          </div>
        </div>
        {/* <div className="nav-links">
          <a href="http://localhost:3000/" className="home--link">Fridge</a>
          <a href="" className="about--link">About Us</a>
          <a href="" className="contact--link">Contact Us</a>
        </div> */}
      </div>
    </nav>
  )
}


