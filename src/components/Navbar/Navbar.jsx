import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Navbar.css';

// Dedicated SVG Icons for Navbar
const NavIcon = ({ name, size = 20 }) => {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };

  switch (name) {
    case 'menu':
      return (
        <svg {...props}>
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      );
    case 'x':
      return (
        <svg {...props}>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      );
    case 'download':
      return (
        <svg {...props}>
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
      );
    case 'arrowRight':
      return (
        <svg {...props}>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      );
    default:
      return null;
  }
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Scroll detection for sticky header styling
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

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'About', path: '/about' },
    { name: 'Community', path: '/community' }
  ];

  return (
    <header className={`navbar-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-container">
        
        {/* LOGO (ALWAYS VISIBLE) */}
        <NavLink to="/" className="navbar-brand" aria-label="Gaurav Portfolio Home">
          <span className="brand-name">GAURAV</span>
          <span className="brand-tag">BUILDS</span>
        </NavLink>

        {/* DESKTOP NAVIGATION (HIDDEN ON MOBILE) */}
        <nav className="desktop-nav-menu" aria-label="Desktop Navigation">
          <ul className="desktop-nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink 
                  to={link.path}
                  className={({ isActive }) => `desktop-nav-link ${isActive ? 'is-active' : ''}`}
                >
                  {link.name}
                  <span className="nav-active-pill" />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* DESKTOP ACTIONS (THEME TOGGLE + RESUME - HIDDEN ON MOBILE) */}
        <div className="desktop-actions">
          <ThemeToggle />
          <a 
            href="/resume.pdf" 
            download="Gaurav_Resume.pdf" 
            className="desktop-resume-btn"
          >
            <NavIcon name="download" size={15} />
            <span>Resume</span>
          </a>
        </div>

        {/* MOBILE HAMBURGER BUTTON (ONLY VISIBLE ON MOBILE) */}
        <button
          type="button"
          className="mobile-hamburger-btn"
          onClick={() => setIsOpen(true)}
          aria-label="Open mobile navigation menu"
          aria-expanded={isOpen}
        >
          <NavIcon name="menu" size={24} />
        </button>

      </div>

      {/* FULLSCREEN MOBILE OVERLAY DRAWER */}
      <div className={`mobile-drawer-overlay ${isOpen ? 'is-open' : ''}`}>
        <div className="mobile-drawer-backdrop" onClick={() => setIsOpen(false)} />
        
        <div className="mobile-drawer-content">
          
          {/* DRAWER TOP BAR */}
          <div className="drawer-header">
            <div className="drawer-brand">
              <span className="brand-name">GAURAV</span>
              <span className="brand-tag">MENU</span>
            </div>
            
            <button 
              type="button" 
              className="drawer-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close mobile navigation menu"
            >
              <NavIcon name="x" size={22} />
            </button>
          </div>

          {/* DRAWER NAVIGATION LINKS */}
          <nav className="drawer-nav" aria-label="Mobile Menu Links">
            <ul className="drawer-links-list">
              {navLinks.map((link, index) => (
                <li key={link.name} className="drawer-link-item" style={{ animationDelay: `${0.08 + index * 0.05}s` }}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => `drawer-nav-link ${isActive ? 'is-active' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="drawer-link-number">0{index + 1}</span>
                    <span className="drawer-link-title">{link.name}</span>
                    <NavIcon name="arrowRight" size={18} />
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* DRAWER BOTTOM CONTROLS (THEME TOGGLE + RESUME DOWNLOAD) */}
          <div className="drawer-footer">
            
            {/* THEME SWITCHER ROW */}
            <div className="drawer-theme-box">
              <div className="theme-label-group">
                <span className="theme-label-title">Theme Mode</span>
                <span className="theme-label-sub">Switch Dark / Light</span>
              </div>
              <ThemeToggle />
            </div>

            {/* DOWNLOAD RESUME BUTTON */}
            <a 
              href="/resume.pdf" 
              download="Gaurav_Resume.pdf" 
              className="drawer-resume-button"
              onClick={() => setIsOpen(false)}
            >
              <NavIcon name="download" size={18} />
              <span>Download Resume (PDF)</span>
            </a>

            {/* AVAILABILITY STATUS */}
            <div className="drawer-status-line">
              <span className="status-live-dot" />
              <span>Available for freelance & SaaS systems</span>
            </div>

          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
