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
            <h4>About Brains On Brioche</h4>
            <p>We are on a mission to minimise food waste. This can start from someone's fridge.</p>
            <p>By providing the contents of your fridge, you can bring restaurant quality food to your dinner table with a few clicks and prepare a recipe to make your neighbour jealous!</p>
          </div>
        )}
    </div>
  );
}
