import React, { useState } from "react";

export default function ContactUs() {


  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);
  
  return (
    <div>
      <div className="footer-buttons" onClick={toggling}>
        {"Contact us"}
      </div>
        {isOpen && (
          <div className="contact-us-drop-up">
            <h4 className="footer-title">Contact us</h4>
            <p className="footer-info">If you want to have one of your unique recipes added to our database</p>
            <p className="footer-info">Or if you may have any feedback regarding one of the recipes or just fancy a chat...</p>
            <p className="footer-info">Tel: 01935-BRAINS(272467)</p>
            <p className="footer-info">Email: brains.on.brioche@gmail.com</p>
            <p className="footer-info">Address: 33 Brains Ln, Sparkford, Yeovil</p>
            <img src="./Brains-Lane.png" alt="google-map" width="210" height="240"></img>
          </div>
        )}
    </div>
  );
}
