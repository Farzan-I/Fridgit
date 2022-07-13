import React, { useState } from "react";

export default function ContactUS() {


  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);
  
  return (
    <div className="footer">
      <div className="about-us" onClick={toggling}>
        {"About us"}
      </div>
      <div className="about-us" onClick={toggling}>
        {"Contact us"}
      </div>
        {isOpen && (
          <div className="drop-down-list-container">
            <div className="drop-down-list">
              {/* <form className="fields-container"> */}
                {/* <SignUp/> */}
              {/* </form> */}
            </div>
          </div>
        )}
    </div>
  );
}