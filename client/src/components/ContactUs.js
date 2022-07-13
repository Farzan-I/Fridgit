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
            <p>If you want to have one of your unique recipes added to our database</p>
            <p>Or if you may have any feedback regarding one of the recipes or just fancy a chat...</p>
            <p>Tel: 01935-BRAINS(272467)</p>
            <p>Email: brains.on.brioche@gmail.com</p>
            <p>Address: 33 Brains Ln, Sparkford, Yeovil</p>
            <img src="./Brains-Lane.png" alt="google-map" width="220" height="260"></img>
            {/* above image will be changed to google map view */}
            {/* hello alex :) does it work now that i uploaded it? */}
            {/* I can't use your terminal so I can't see */}
            {/* let's try see it working now */}
            {/* i actually think it works, cause when i open the file i can see the preview */}
          </div>
        )}
    </div>
  );
}
