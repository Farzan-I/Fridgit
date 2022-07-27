import React, { useState } from "react";

export default function AboutUs() {

 
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);
  
  return (
    <div>
      <div className="footer-buttons" onClick={toggling}>
        {"About Us"}
      </div>
        {isOpen && (
          <div className="about-us-drop-up">
            <h4 className="footer-title">About Brains On Brioche</h4>
            <p className="footer-info">We are on a mission to minimise food waste. This can start from someone's fridge. By providing the contents of your fridge, you can bring restaurant quality food to your dinner table and with a few clicks enjoy your leftovers!</p>
            <p className="footer-info">Take on the Brains On Brioche challenge and get creative with the meals you could make!</p>
            <img src="./food.jpg" alt="about-us-food" width="280" height="130"></img>
          </div>
        )}
    </div>
  );
}
