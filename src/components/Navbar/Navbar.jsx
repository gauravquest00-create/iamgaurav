import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Icon } from '../Icons';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Navbar.css';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => {
      const next = !prev;
      if (next) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      return next;
    });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'About', path: '/about' },
    { name: 'Community', path: '/community' }
  ];

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* LOGO */}
        <NavLink to="/" className="navbar-logo" aria-label="Gaurav Home" data-cursor-magnetic>
          <span className="logo-text">GAURAV</span>
          <span className="logo-badge">SYSTEMS</span>
        </NavLink>

        {/* DESKTOP NAVIGATION */}
        <nav className="navbar-desktop-nav" aria-label="Main Navigation">
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
                >
                  {link.name}
                  <span className="nav-link-indicator" />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* ACTIONS (Theme Toggle & Resume Button) */}
        <div className="navbar-actions">
          <ThemeToggle />

          <a 
            href="/resume.pdf" 
            download="Gaurav_Resume.pdf" 
            className="btn btn-secondary btn-resume-desktop"
            data-cursor-magnetic
          >
            <Icon name="Download" size={16} />
            <span>Resume</span>
          </a>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <button 
            className="mobile-menu-btn" 
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
      </div>

      {/* FULLSCREEN MOBILE OVERLAY MENU */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'is-open' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <span className="micro-label">NAVIGATION</span>
            <button className="mobile-close-btn" onClick={toggleMobileMenu} aria-label="Close menu">
              <Icon name="X" size={24} />
            </button>
          </div>

          <nav className="mobile-nav" aria-label="Mobile Navigation">
            <ul className="mobile-nav-list">
              {navLinks.map((link, index) => (
                <li 
                  key={link.name} 
                  className="mobile-nav-item"
                  style={{ animationDelay: `${0.1 + index * 0.06}s` }}
                >
                  <NavLink 
                    to={link.path}
                    className={({ isActive }) => `mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="mobile-nav-num">0{index + 1}</span>
                    <span className="mobile-nav-label">{link.name}</span>
                    <Icon name="ArrowRight" size={20} className="mobile-nav-arrow" />
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-menu-footer">
            <a 
              href="/resume.pdf" 
              download="Gaurav_Resume.pdf" 
              className="btn btn-accent btn-resume-mobile"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Icon name="Download" size={18} />
              <span>Download Resume</span>
            </a>
            
            <div className="mobile-availability">
              <span className="status-dot"></span>
              <span>Available for freelance & contract</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
