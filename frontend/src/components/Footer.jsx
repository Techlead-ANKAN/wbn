import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Keep all relevant styles here

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-left">
        <img src="WBN_BlackWhite.png" alt="Logo" />
      </div>

      <div className="footer-links">
        {/* QUICK LINKS */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* POLICIES */}
        <div className="footer-column">
          <h4>Policies</h4>
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/return-cancellation">Return & Cancellation</Link></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li><Link to="/membership">Membership</Link></li>
            <li><Link to="/mentorship">Mentorship</Link></li>
            <li><Link to="/safari">Safaris</Link></li>
            <li><Link to="/competition">Competitions</Link></li>
          </ul>
        </div>
      </div>

      {/* SOCIAL MEDIA */}
      <div className="footer-right">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="https://www.instagram.com/wild_bynature_official" target="_blank" rel="noopener noreferrer">
            <img src="instagram-white-logo.png" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/share/1EJGriQpDN/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
            <img src="fuk.png" alt="Facebook" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="you.png" alt="YouTube" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
