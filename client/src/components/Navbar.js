import React from "react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const userData  = useSelector((state) => state.user)

  return (
    <nav>
      <img className="nav--logo" src='./brains-on-brioche.png' alt="logo"></img>
      <h3 className="nav--title">Brains on Brioche</h3>
      {userData.userName && <h2 className="nav--username">Hi, {userData.userName}!</h2>}
    </nav>
  )
}

