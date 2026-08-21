import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

// Experience & Education Timeline Data
const TIMELINE_DATA = [
  {
    type: "work",
    period: "August 2025 – Present",
    role: "Sales Executive & Web Systems",
    company: "LuxuryNest",
    location: "Gurugram, Haryana, India",
    description: "Driving client acquisitions and luxury real estate advisory while architecting automated listing platforms and serverless Google Sheets lead capture workflows."
  },
  {
    type: "work",
    period: "September 2024 – August 2025",
    role: "Sales Executive",
    company: "Reside Network",
    location: "Gurugram, Haryana, India",
    description: "Managed property transactions, inventory mapping, and client requirement profiling for high-value residential and commercial assets."
  },
  {
    type: "education",
    period: "2021 – 2024",
    role: "Bachelor of Computer Applications (BCA)",
    company: "Lords University",
    location: "Alwar, Rajasthan, India",
    description: "Rigorous foundation in computer science, software engineering, database management systems (DBMS), data structures, and web application architecture."
  }
];

// Engineering Principles
const PRINCIPLES = [
  {
    number: "01",
    title: "System Architecture First",
    description: "Before writing UI components, I structure schemas, data flows, and API boundaries to guarantee seamless scalability and zero technical debt."
  },
  {
    number: "02",
    title: "Domain Knowledge × Deep Engineering",
    description: "My background in real estate sales directly informs how I build SaaS CRMs—optimizing for lead velocity, conversion rates, and friction-free user workflows."
  },
  {
    number: "03",
    title: "Mobile-First & Zero-Bloat UI",
    description: "Clean, modern CSS3 and modular React components. I prioritize 60 FPS interactions, sub-second API sync, and flawless responsive layouts over heavy dependencies."
  },
  {
    number: "04",
    title: "Automated Workflows & Resilience",
    description: "From two-way Google Sheets database bridges to instant SMS/Email triggers, I eliminate manual friction through dependable serverless automations."
  }
];

// Inline SVG Icon Component
const AboutIcon = ({ name, size = 18 }) => {
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
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      );
    case 'briefcase':
      return (
        <svg {...props}>
          <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
    case 'graduation':
      return (
        <svg {...props}>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      );
    case 'check':
      return (
        <svg {...props}>
          <polyline points="20 6 9 17 4 12" />
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

export const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        
        {/* HEADER SECTION */}
        <header className="about-header">
          <div className="about-micro-label">
            <span className="live-dot" />
            <span>BACKGROUND & PERSPECTIVE</span>
          </div>
          <h1 className="about-title">
            Engineering digital systems with intent.<br />
            <span className="title-gradient">Solving real-world business challenges.</span>
          </h1>
          <p className="about-lead">
            I am Gaurav—a Full-Stack Developer, SaaS System Developer, and System Architect based in Gurugram, India. I bridge deep software engineering with real-world sales acumen to build digital products that people remember.
          </p>
        </header>

        {/* MAIN EDITORIAL GRID */}
        <div className="about-layout-grid">
          
          {/* MAIN COLUMN */}
          <main className="about-main-col">
            
            {/* STORY & PERSPECTIVE */}
            <section className="about-card">
              <span className="card-section-label">WHO I AM</span>
              <h2 className="card-section-title">Full-Stack Craftsmanship & Product Thinking</h2>
              <div className="about-text-content">
                <p>
                  My journey combines formal computer science education (BCA from Lords University) with hands-on real estate industry execution at <strong>LuxuryNest</strong> and <strong>Reside Network</strong>. This unique intersection gives me a distinctive advantage: I understand both the code behind the screen and the exact business friction points faced by sales teams, agents, and clients.
                </p>
                <p>
                  Rather than just writing code for the sake of features, I build purpose-driven software systems. I have designed and deployed multi-tenant SaaS CRMs (<strong>DealNexis</strong>), property intelligence workspaces (<strong>PropIntel</strong>), automated lead ingestion pipelines, and D2C e-commerce platforms (<strong>NaturalNestOrganic</strong>).
                </p>
                <p>
                  I believe in performance over hype—delivering sub-second API sync, mobile-first responsive architecture, and fluid 60 FPS user interactions built on modern vanilla CSS and React.
                </p>
              </div>
            </section>

            {/* CAREER & EDUCATION TIMELINE */}
            <section className="about-card">
              <span className="card-section-label">EXPERIENCE & EDUCATION</span>
              <h2 className="card-section-title">Career Timeline</h2>
              <div className="timeline-list">
                {TIMELINE_DATA.map((item, idx) => (
                  <div key={idx} className="timeline-item">
                    <div className="timeline-icon-box">
                      <AboutIcon name={item.type === 'work' ? 'briefcase' : 'graduation'} size={16} />
                    </div>
                    <div className="timeline-body">
                      <div className="timeline-meta">
                        <span className="timeline-period">{item.period}</span>
                        <span className="timeline-location">{item.location}</span>
                      </div>
                      <h3 className="timeline-role">{item.role}</h3>
                      <h4 className="timeline-company">{item.company}</h4>
                      <p className="timeline-desc">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ARCHITECTURAL PRINCIPLES */}
            <section className="about-card">
              <span className="card-section-label">CORE VALUES</span>
              <h2 className="card-section-title">Engineering Principles</h2>
              <div className="principles-grid">
                {PRINCIPLES.map((principle) => (
                  <div key={principle.number} className="principle-card">
                    <span className="principle-num">{principle.number}</span>
                    <h3 className="principle-title">{principle.title}</h3>
                    <p className="principle-desc">{principle.description}</p>
                  </div>
                ))}
              </div>
            </section>

          </main>

          {/* ASIDE SIDEBAR */}
          <aside className="about-aside-col">
            
            {/* PROFILE SNAPSHOT CARD */}
            <div className="snapshot-card">
              <span className="card-section-label">PROFILE SNAPSHOT</span>
              
              <div className="snapshot-row">
                <span className="snapshot-label">NAME</span>
                <span className="snapshot-val">Gaurav</span>
              </div>

              <div className="snapshot-row">
                <span className="snapshot-label">ROLES</span>
                <span className="snapshot-val">Full-Stack Developer • SaaS System Developer • System Architect</span>
              </div>

              <div className="snapshot-row">
                <span className="snapshot-label">LOCATION</span>
                <span className="snapshot-val">Gurugram, Haryana, India</span>
              </div>

              <div className="snapshot-row">
                <span className="snapshot-label">EDUCATION</span>
                <span className="snapshot-val">BCA, Lords University (2021–2024)</span>
              </div>

              <div className="snapshot-row">
                <span className="snapshot-label">EXPERIENCE</span>
                <span className="snapshot-val">LuxuryNest (2025–Present)<br />Reside Network (2024–2025)</span>
              </div>

              <div className="snapshot-row">
                <span className="snapshot-label">STATUS</span>
                <div className="snapshot-status-box">
                  <span className="status-live-dot" />
                  <span>Available for freelance & SaaS systems</span>
                </div>
              </div>

              <div className="snapshot-divider" />

              <a 
                href="/resume.pdf" 
                download="Gaurav_Resume.pdf" 
                className="btn-download-full-resume"
              >
                <AboutIcon name="download" size={16} />
                <span>Download Resume (PDF)</span>
              </a>
            </div>

            {/* KEY METRICS CARD */}
            <div className="metrics-card">
              <span className="card-section-label">SYSTEM HIGHLIGHTS</span>
              <ul className="metrics-list">
                <li>
                  <div className="metric-check"><AboutIcon name="check" size={14} /></div>
                  <span>Multi-tenant SaaS & CRM Engines</span>
                </li>
                <li>
                  <div className="metric-check"><AboutIcon name="check" size={14} /></div>
                  <span>Automated 2-Way Google Sheets Sync</span>
                </li>
                <li>
                  <div className="metric-check"><AboutIcon name="check" size={14} /></div>
                  <span>Sub-Second REST API Integrations</span>
                </li>
                <li>
                  <div className="metric-check"><AboutIcon name="check" size={14} /></div>
                  <span>100% Mobile-First Responsive Layouts</span>
                </li>
              </ul>
            </div>

          </aside>

        </div>

        {/* BOTTOM CTA CALLOUT */}
        <section className="about-footer-cta">
          <div className="cta-glow-effect" />
          <div className="about-cta-content">
            <h2>Let's build something remarkable.</h2>
            <p>
              Looking for a dedicated developer to architect your SaaS CRM, launch a web platform, or streamline automated workflows?
            </p>
          </div>
          <div className="about-cta-actions">
            <a href="mailto:gauravquest00@gmail.com" className="btn-cta-primary">
              <span>Initiate Contact</span>
              <AboutIcon name="arrowRight" size={16} />
            </a>
            <Link to="/projects" className="btn-cta-secondary">
              <span>Explore Projects</span>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;