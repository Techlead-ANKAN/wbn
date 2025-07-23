// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSubmenuOpen, setIsMobileSubmenuOpen] = useState({
    galleries: false,
    marketplace: false
  });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const enterButton = document.getElementById("enterSiteBtn");
    const splash = document.getElementById("splash-screen");
    const roarSound = document.getElementById("roarSound");

    if (enterButton && splash && roarSound) {
      enterButton.addEventListener("click", function() {
        roarSound.play();
        splash.style.opacity = 0;
        setTimeout(() => {
          splash.style.display = "none";
        }, 800);
      });
    }
    
    // Handle scroll effect for header
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubmenu = (menu) => {
    setIsMobileSubmenuOpen({
      ...isMobileSubmenuOpen,
      [menu]: !isMobileSubmenuOpen[menu]
    });
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileSubmenuOpen({
      galleries: false,
      marketplace: false
    });
  };

  return (
    <>
      {/* Splash Screen */}
      <div id="splash-screen" className="nv-splash">
        <div className="nv-splash-content">
          <h1 className="nv-splash-title">Wildlife Lens</h1>
          <p className="nv-splash-subtitle">Capturing Nature's Majesty</p>
          <button id="enterSiteBtn">Enter Site</button>
        </div>
        <audio id="roarSound" src="roar.mp3" preload="auto"></audio>
      </div>

      {/* Top Header */}
      <header className={`nv-top-header ${isScrolled ? 'nv-scrolled' : ''}`}>
        <div className="nv-logo">
          <img src="img.avif" alt="Wildlife Lens Logo" />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="nv-main-nav nv-desktop-nav">
          <NavLink to="/" end className="nv-nav-item">HOME</NavLink>
          <NavLink to="/about" className="nv-nav-item">ABOUT US</NavLink>
          
          <div className="nv-dropdown">
            <span className="nv-nav-item">GALLERIES <i className="fa fa-caret-down"></i></span>
            <ul className="nv-dropdown-menu">
              <li><NavLink to="/mentorsgall" className="nv-dropdown-item">Mentors Gallery</NavLink></li>
              <li><NavLink to="/members-gallery" className="nv-dropdown-item">Members Gallery</NavLink></li>
            </ul>
          </div>
          
          <div className="nv-dropdown nv-highlighted">
            <span className="nv-nav-item">MARKETPLACE <i className="fa fa-caret-down"></i></span>
            <ul className="nv-dropdown-menu">
              <li><NavLink to="/merchandise" className="nv-dropdown-item">Merchandise</NavLink></li>
              <li><NavLink to="/used-gear" className="nv-dropdown-item">Used Gear</NavLink></li>
            </ul>
          </div>
          
          <NavLink to="/blog" className="nv-nav-item">BLOG</NavLink>
          <NavLink to="/contact" className="nv-nav-item">CONTACT US</NavLink>
        </nav>
        
        <NavLink to="/signup" className="nv-member-btn">MEMBER ZONE</NavLink>
        
        {/* Mobile Menu Toggle */}
        <button className="nv-mobile-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </header>

      {/* Mobile Navigation Menu */}
      <div className={`nv-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="nv-mobile-menu-header">
          <div className="nv-logo">
            <img src="img.avif" alt="Wildlife Lens Logo" />
          </div>
          <button className="nv-close-menu" onClick={closeMobileMenu}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <nav className="nv-mobile-nav">
          <NavLink to="/" end onClick={closeMobileMenu} className="nv-mobile-nav-item">HOME</NavLink>
          <NavLink to="/about" onClick={closeMobileMenu} className="nv-mobile-nav-item">ABOUT US</NavLink>
          
          <div className="nv-mobile-submenu">
            <div 
              className="nv-submenu-header" 
              onClick={() => toggleSubmenu('galleries')}
            >
              <span className="nv-mobile-nav-item">GALLERIES</span>
              <i className={`fa fa-caret-${isMobileSubmenuOpen.galleries ? 'up' : 'down'}`}></i>
            </div>
            {isMobileSubmenuOpen.galleries && (
              <div className="nv-submenu-items">
                <NavLink to="/mentorsgall" onClick={closeMobileMenu} className="nv-submenu-item">Mentors Gallery</NavLink>
                <NavLink to="/members-gallery" onClick={closeMobileMenu} className="nv-submenu-item">Members Gallery</NavLink>
              </div>
            )}
          </div>
          
          <div className="nv-mobile-submenu nv-highlighted">
            <div 
              className="nv-submenu-header" 
              onClick={() => toggleSubmenu('marketplace')}
            >
              <span className="nv-mobile-nav-item">MARKETPLACE</span>
              <i className={`fa fa-caret-${isMobileSubmenuOpen.marketplace ? 'up' : 'down'}`}></i>
            </div>
            {isMobileSubmenuOpen.marketplace && (
              <div className="nv-submenu-items">
                <NavLink to="/merchandise" onClick={closeMobileMenu} className="nv-submenu-item">Merchandise</NavLink>
                <NavLink to="/used-gear" onClick={closeMobileMenu} className="nv-submenu-item">Used Gear</NavLink>
              </div>
            )}
          </div>
          
          <NavLink to="/blog" onClick={closeMobileMenu} className="nv-mobile-nav-item">BLOG</NavLink>
          <NavLink to="/contact" onClick={closeMobileMenu} className="nv-mobile-nav-item">CONTACT US</NavLink>
          <NavLink to="/signup" className="nv-member-btn nv-mobile-member-btn" onClick={closeMobileMenu}>MEMBER ZONE</NavLink>
        </nav>
        
        <div className="nv-mobile-social">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="nv-bottom-bar">
        <div className="nv-left-nav">
          <NavLink to="/workshop" className="nv-bottom-nav-item">Workshops</NavLink>
          <NavLink to="/safari" className="nv-bottom-nav-item">Safaris</NavLink>
          <NavLink to="/competition" className="nv-bottom-nav-item">Competitions</NavLink>
          <NavLink to="/exhibition" className="nv-bottom-nav-item">Exhibitions</NavLink>
          <NavLink to="/safinfo" className="nv-bottom-nav-item">Parks & Reserves</NavLink>
          <NavLink to="/conservation" className="nv-bottom-nav-item">Conservation</NavLink>
        </div>
        <div className="nv-right-nav">
          <div className="nv-social-icons">
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