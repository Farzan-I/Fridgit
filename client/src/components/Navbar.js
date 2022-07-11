import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo-and-title">
          <img className="nav--logo" src='./brains-on-brioche.png' alt="logo"></img>
          <h3 className="nav--title">Brains On Brioche</h3>
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