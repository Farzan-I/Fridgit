import React from "react";

export default function Input() {
  return (
    <div className="form">
      <input 
        type="text"
        className="form--input"
        placeholder="Ingredients here..."
        value="Salmon,Brain,Potatoes,Chicken,Brioche,Flour,Lemon,Egg "
      />
      <button 
        className="form--button"
        
      >Submit</button>

    </div>
  )
}