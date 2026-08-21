import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

// Exact Social Media Links
const FOOTER_SOCIALS = [
  { name: "GitHub", url: "https://github.com/gauravquest00-create", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/gaurav-verma-10b287248/", icon: "linkedin" },
  { name: "Twitter / X", url: "https://x.com/Gouravcreationn", icon: "twitter" },
  { name: "Instagram", url: "https://www.instagram.com/gaurav_v9636/", icon: "instagram" },
  { name: "Gumroad", url: "https://questor63.gumroad.com/", icon: "gumroad" },
  { name: "Pinterest", url: "https://in.pinterest.com/gauravquest00/", icon: "pinterest" },
  { name: "Reddit", url: "https://www.reddit.com/user/Additional_Horse8713/", icon: "reddit" }
];

// Inline SVG Icon Renderer
const FooterIcon = ({ name, size = 15 }) => {
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
    case 'github':
      return (
        <svg {...props}>
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...props}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case 'twitter':
      return (
        <svg {...props}>
          <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
        </svg>
      );
    case 'instagram':
      return (
        <svg {...props}>
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    case 'gumroad':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M10 8h4a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-4v-5z" />
          <path d="M14 13h-4v3" />
        </svg>
      );
    case 'pinterest':
      return (
        <svg {...props}>
          <line x1="8" y1="20" x2="12" y2="11" />
          <path d="M10.7 14c.437 1.263 1.43 2 2.55 2 2.071 0 3.75-1.554 3.75-4a5 5 0 1 0-9.7 1.7" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
    case 'reddit':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="9" cy="11" r="1" fill="currentColor" />
          <circle cx="15" cy="11" r="1" fill="currentColor" />
          <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
          <path d="M12 8l2 -3l3 1" />
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
    case 'mail':
      return (
        <svg {...props}>
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        
        {/* TOP SECTION */}
        <div className="footer-top">
          
          {/* BRAND COLUMN */}
          <div className="footer-brand">
            <NavLink to="/" className="footer-logo">
              <span className="logo-gradient">GAURAV</span>
              <span className="logo-sub">SYSTEMS</span>
            </NavLink>
            <p className="footer-role">
              Full-Stack Developer • System Designer • System Architecture
            </p>
            <p className="footer-tagline">
              Building digital products, SaaS platforms, and conversion-focused web systems that people remember.
            </p>
            <div className="footer-contact-badge">
              <span className="footer-contact-dot" />
              <a href="mailto:gauravquest00@gmail.com" className="footer-email-text">
                gauravquest00@gmail.com
              </a>
            </div>
          </div>

          {/* NAVIGATION COLUMNS */}
          <div className="footer-nav-groups">
            
            {/* INDEX */}
            <div className="footer-col">
              <span className="footer-col-title">INDEX</span>
              <ul className="footer-links">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/skills">Skills</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/community">Community</NavLink></li>
              </ul>
            </div>

            {/* DOCUMENTS */}
            <div className="footer-col">
              <span className="footer-col-title">RESOURCES</span>
              <ul className="footer-links">
                <li>
                  <a href="/resume.pdf" download="Gaurav_Resume.pdf" className="footer-resume-link">
                    <span>Resume (PDF)</span>
                    <FooterIcon name="download" size={14} />
                  </a>
                </li>
                <li>
                  <a href="mailto:gauravquest00@gmail.com" className="footer-inquiry-link">
                    <span>Direct Inquiry</span>
                    <FooterIcon name="mail" size={14} />
                  </a>
                </li>
              </ul>
            </div>

            {/* NETWORK CHANNELS */}
            <div className="footer-col footer-col-wide">
              <span className="footer-col-title">NETWORK</span>
              <ul className="footer-social-links">
                {FOOTER_SOCIALS.map((social) => (
                  <li key={social.name}>
                    <a 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="footer-social-pill"
                    >
                      <FooterIcon name={social.icon} size={14} />
                      <span>{social.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="footer-bottom">
          <div className="footer-copy">
            © {currentYear} Gaurav. Engineered with precision.
          </div>
          <div className="footer-status-pill">
            <span className="status-live-dot" />
            <span>Available for freelance & system architecture</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;