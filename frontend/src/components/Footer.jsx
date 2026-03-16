import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="triofit-footer">
      <div className="footer-container">

        <div className="footer-column">
          <h3>Help</h3>
          <ul>
            <li><Link to="/faq">Frequently Asked Questions</Link></li>
            <li><Link to="/returns">Return And Exchange</Link></li>
            <li><Link to="/support">Support Team</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Corporate</h3>
          <ul>
            <li><Link to="/careers">Career Opportunities</Link></li>
            <li><Link to="/stores">Our Stores</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Policies</h3>
          <ul>
            <li><Link to="/privacy">Privacy Policy</Link></li> 
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/return-policy">Return Policy</Link></li> 
          </ul>
        </div>

      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p>© 2026 TrioFit — Classic style, modern tech</p>
      </div>
    </footer>
  );
};

export default Footer;