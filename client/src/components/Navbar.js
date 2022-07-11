import React from "react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const userData  = useSelector((state) => state.user)

  return (
    <nav>
      <div className="nav-container">
        <div className="logo-and-title">
          <img className="nav--logo" src='./brains-on-brioche.png' alt="logo"></img>
          <h3 className="nav--title">Brains On Brioche</h3>
          {userData.userName && <h2 className="nav--username">Hi, {userData.userName}!</h2>}
        </div>    
        <div className="nav-links">
          <a href="http://localhost:3000/" className="home--link">Fridge</a>
          <a href="" className="about--link">About Us</a>
          <a href="" className="contact--link">Contact Us</a>
        </div>
      </div>
    </nav>
  )
}

