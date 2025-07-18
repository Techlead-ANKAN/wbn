import React from 'react';
import './Footer.css'; // Keep all relevant styles here

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-left">
        <img src="WBN_BlackWhite.png" alt="Logo" />
      </div>

      <div className="footer-links">
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Policies</h4>
          <ul>
            <li><a href="privacy-policy.html">Privacy Policy</a></li>
            <li><a href="terms.html">Terms & Conditions</a></li>
            <li><a href="return-cancellation.html">Return & Cancellation</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Membership</a></li>
            <li><a href="mentorship.html">Mentorship</a></li>
            <li><a href="safari.html">Safaris</a></li>
            <li><a href="competition.html">Competitions</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-right">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="https://www.instagram.com/wild_bynature_official">
            <img src="instagram-white-logo.png" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/share/1EJGriQpDN/?mibextid=wwXIfr">
            <img src="fuk.png" alt="Facebook" />
          </a>
          <a href="https://www.facebook.com/share/1EJGriQpDN/?mibextid=wwXIfr">
            <img src="you.png" alt="youtude" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
