import React from "react";

export default function Navbar() {
  return (
    <nav>
      <img className="nav--logo" src='./brains-on-brioche.png' alt="logo"></img>
      <h3 className="nav--title">Brains On Brioche</h3>    

      <a href="http://localhost:3000/" className="home--link">Fridge</a>
      <a href="" className="about--link">About Us</a>
      <a href="" className="contact--link">Contact Us</a>
    </nav>
  )
}