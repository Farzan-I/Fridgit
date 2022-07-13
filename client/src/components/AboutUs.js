import React, { useState } from "react";

export default function AboutUs() {

 
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);
  
  return (
    <div>
      <div className="" onClick={toggling}>
       {"About us"}
      </div>
        {isOpen && (
          <div className="about-us-drop-up">
            <h4>About us</h4>
          </div>
        )}
    </div>
  );
}