import React from 'react';
import './Navbar.css'; // Assuming your styles are here


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
          <a href="#">HOME</a>
          <a href="#">ABOUT US</a>

          {/* GALLERIES DROPDOWN */}
          <div className="dropdown">
            <a href="#">
              GALLERIES <i className="fa fa-caret-down"></i>
            </a>
            <ul className="dropdown-menu">
              <li><a href="mentorsgall.html">Mentors Gallery</a></li>
              <li><a href="members-gallery.html">Members Gallery</a></li>
            </ul>
          </div>

          {/* MARKETPLACE DROPDOWN */}
          <div className="dropdown highlighted">
            <a href="#">
              MARKETPLACE <i className="fa fa-caret-down"></i>
            </a>
            <ul className="dropdown-menu">
              <li><a href="merchandise.html">Merchandise</a></li>
              <li><a href="used-gear.html">Used Gear</a></li>
            </ul>
          </div>

          <a href="#">BLOG</a>
          <a href="#">CONTACT US</a>
        </nav>

        <a href="signup.html" className="member-btn">MEMBER ZONE</a>
      </header>

      {/* BOTTOM NAVIGATION */}
      <div className="bottom-bar">
        <div className="left-nav">
          <a href="workshop.html">Workshops</a>
          <a href="safari.html">Safaris</a>
          <a href="competition.html">Competitions</a>
          <a href="exhibition.html">Exhibitions</a>
          <a href="safinfo.html">Parks & Reserves</a>
          <a href="#">Conservation</a>
        </div>

        <div className="right-nav">
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
