import React, { useState } from "react";

export default function ContactUs() {


  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);
  
  return (
    <div>
      <div className="" onClick={toggling}>
        {"Contact us"}
      </div>
        {isOpen && (
          <div className="contact-us-drop-up">
            <h4>Contact us</h4>
          </div>
        )}
    </div>
  );
}