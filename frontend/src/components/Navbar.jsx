import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      {/* TOP HEADER */}
      <header className="top-header">
        <div className="logo">
          <img src="img.avif" alt="Wildlife Lens Logo" />
          <span><br /><small></small></span>
        </div>

        <nav className="main-nav">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT US</Link>

          {/* GALLERIES DROPDOWN */}
          <div className="dropdown">
            <span>
              GALLERIES <i className="fa fa-caret-down"></i>
            </span>
            <ul className="dropdown-menu">
              <li><Link to="/mentors-gallery">Mentors Gallery</Link></li>
              <li><Link to="/members-gallery">Members Gallery</Link></li>
            </ul>
          </div>

          {/* MARKETPLACE DROPDOWN */}
          <div className="dropdown highlighted">
            <span>
              MARKETPLACE <i className="fa fa-caret-down"></i>
            </span>
            <ul className="dropdown-menu">
              <li><Link to="/merchandise">Merchandise</Link></li>
              <li><Link to="/used-gear">Used Gear</Link></li>
            </ul>
          </div>

          <Link to="/blog">BLOG</Link>
          <Link to="/contact">CONTACT US</Link>
        </nav>

        <Link to="/signup" className="member-btn">MEMBER ZONE</Link>
      </header>

      {/* BOTTOM NAVIGATION */}
      <div className="bottom-bar">
        <div className="left-nav">
          <Link to="/workshops">Workshops</Link>
          <Link to="/safaris">Safaris</Link>
          <Link to="/competitions">Competitions</Link>
          <Link to="/exhibitions">Exhibitions</Link>
          <Link to="/parks-reserves">Parks & Reserves</Link>
          <Link to="/conservation">Conservation</Link>
        </div>

        <div className="right-nav">
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
