import React, { useState } from "react";
import ContactUs from './ContactUs.js';
import AboutUs from './AboutUs.js';


export default function Footer() {

  return (
    <footer className="footer">
      <>
      <div className="footer-links-container">
        <div className="footer-links">
          <AboutUs/>
        </div>
        <div className="footer-links">
          <ContactUs/>
        </div>
      </div>
      </>
    </footer>
  )
}