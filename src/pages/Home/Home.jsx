import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icons';
import HeroVisual from '../../components/HeroVisual/HeroVisual';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Reveal from '../../components/Reveal/Reveal';

import profileData from '../../data/profile.json';
import projectsData from '../../data/projects.json';
import './Home.css';

export const Home = () => {
  // Get featured projects
  const featuredProjects = projectsData.filter(p => p.featured);

  return (
    <div className="home-page">
      {/* ==================================================
          1. HERO SECTION
          ================================================== */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <Reveal variant="fade-up" delay={0.1}>
              <div className="hero-status-pill">
                <span className="status-dot"></span>
                <span className="hero-status-text">{profileData.availability}</span>
              </div>
            </Reveal>

            <Reveal variant="fade-up" delay={0.2}>
              <span className="micro-label hero-micro-label">
                {profileData.microLabel}
              </span>
            </Reveal>

            <Reveal variant="fade-up" delay={0.3}>
              <h1 className="hero-headline">
                Building digital products<br />
                <span className="headline-gradient">that people remember.</span>
              </h1>
            </Reveal>

            <Reveal variant="fade-up" delay={0.4}>
              <p className="hero-subheadline">
                {profileData.subheadline}
              </p>
            </Reveal>

            <Reveal variant="fade-up" delay={0.5}>
              <div className="hero-cta-group">
                <Link to="/projects" className="btn btn-primary" data-cursor-magnetic>
                  <span>View My Work</span>
                  <Icon name="ArrowRight" size={18} />
                </Link>

                <a 
                  href="/resume.pdf" 
                  download="Gaurav_Resume.pdf" 
                  className="btn btn-secondary"
                  data-cursor-magnetic
                >
                  <Icon name="Download" size={18} />
                  <span>Download Resume</span>
                </a>
              </div>
            </Reveal>

            <Reveal variant="fade-up" delay={0.6}>
              <div className="hero-trust-metrics">
                <div className="trust-metric">
                  <span className="trust-metric-val">7+</span>
                  <span className="trust-metric-lbl">Live Systems</span>
                </div>
                <div className="trust-metric-divider"></div>
                <div className="trust-metric">
                  <span className="trust-metric-val">100%</span>
                  <span className="trust-metric-lbl">Responsive Mobile-First</span>
                </div>
                <div className="trust-metric-divider"></div>
                <div className="trust-metric">
                  <span className="trust-metric-val">60 FPS</span>
                  <span className="trust-metric-lbl">Fluid Motion</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="hero-visual-col">
            <Reveal variant="scale" delay={0.3} duration={0.8}>
              <HeroVisual />
            </Reveal>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="hero-scroll-indicator" aria-hidden="true">
          <span className="scroll-text">Scroll to explore</span>
          <div className="scroll-line">
            <div className="scroll-dot"></div>
          </div>
        </div>
      </section>

      {/* ==================================================
          2. MANIFESTO / INTRODUCTION STATEMENT
          ================================================== */}
      <section className="manifesto-section">
        <div className="container">
          <Reveal variant="blur-to-clear">
            <div className="manifesto-card">
              <span className="micro-label">ENGINEERING PHILOSOPHY</span>
              <h2 className="manifesto-quote">
                "I don't just write code. I architect scalable web systems, intuitive user workflows, and high-performance digital products that drive quantifiable value."
              </h2>
              <div className="manifesto-author">
                <strong>Gaurav</strong>
                <span>Full-Stack Developer & System Architect</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==================================================
          3. SELECTED / FEATURED PROJECTS
          ================================================== */}
      <section className="featured-projects-section">
        <div className="container">
          <div className="section-header featured-header-flex">
            <div>
              <Reveal variant="fade-up">
                <span className="micro-label">FEATURED CASE STUDIES</span>
                <h2 className="section-title">Selected Work</h2>
                <p className="section-subtitle">
                  A curated selection of production SaaS platforms, intelligence workspaces, and digital commerce applications.
                </p>
              </Reveal>
            </div>
            <Reveal variant="fade-left" delay={0.2}>
              <Link to="/projects" className="btn btn-secondary btn-view-all-desktop">
                <span>Explore All Projects</span>
                <Icon name="ArrowRight" size={16} />
              </Link>
            </Reveal>
          </div>

          <div className="featured-projects-list">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.id} variant="fade-up" delay={index * 0.15}>
                <ProjectCard project={project} variant="horizontal" index={index} />
              </Reveal>
            ))}
          </div>

          <div className="featured-projects-mobile-cta">
            <Link to="/projects" className="btn btn-secondary" style={{ width: '100%' }}>
              <span>View All 7 Projects</span>
              <Icon name="ArrowRight" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================================================
          4. CORE CAPABILITIES
          ================================================== */}
      <section className="capabilities-section">
        <div className="container">
          <div className="section-header">
            <Reveal variant="fade-up">
              <span className="micro-label">CORE COMPETENCIES</span>
              <h2 className="section-title">What I Build & Engineer</h2>
              <p className="section-subtitle">
                Comprehensive technical depth across the full software product development lifecycle.
              </p>
            </Reveal>
          </div>

          <div className="capabilities-grid">
            {profileData.about.capabilities.map((cap, index) => (
              <Reveal key={cap.id} variant="fade-up" delay={index * 0.08}>
                <div className="capability-card">
                  <div className="capability-icon-box">
                    <Icon name={cap.icon} size={24} />
                  </div>
                  <h3 className="capability-title">{cap.title}</h3>
                  <p className="capability-desc">{cap.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          5. ABOUT SNAPSHOT
          ================================================== */}
      <section className="about-snapshot-section">
        <div className="container">
          <div className="about-snapshot-card">
            <div className="about-snapshot-content">
              <Reveal variant="fade-up">
                <span className="micro-label">ABOUT ME</span>
                <h2 className="about-snapshot-title">
                  Engineering with intent,<br />
                  designing with restraint.
                </h2>
                <p className="about-snapshot-text">
                  {profileData.about.intro}
                </p>
                <div className="about-snapshot-bullets">
                  <div className="snapshot-bullet">
                    <Icon name="Check" size={18} className="bullet-check" />
                    <span>Based in Gurugram, India — collaborating globally.</span>
                  </div>
                  <div className="snapshot-bullet">
                    <Icon name="Check" size={18} className="bullet-check" />
                    <span>Proven experience building SaaS CRM, real estate workflows & D2C platforms.</span>
                  </div>
                  <div className="snapshot-bullet">
                    <Icon name="Check" size={18} className="bullet-check" />
                    <span>Obsessed with mobile-first performance, clean vanilla CSS & zero-bloat UX.</span>
                  </div>
                </div>

                <div className="about-snapshot-cta">
                  <Link to="/about" className="btn btn-primary" data-cursor-magnetic>
                    <span>More About Me</span>
                    <Icon name="ArrowRight" size={18} />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          6. DEVELOPMENT PROCESS
          ================================================== */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <Reveal variant="fade-up">
              <span className="micro-label">METHODOLOGY</span>
              <h2 className="section-title">The Engineering Process</h2>
              <p className="section-subtitle">
                A structured, battle-tested execution framework designed for clarity, speed, and reliability.
              </p>
            </Reveal>
          </div>

          <div className="process-timeline">
            {profileData.about.process.map((step, index) => (
              <Reveal key={step.step} variant="fade-up" delay={index * 0.1}>
                <div className="process-step-card">
                  <div className="process-step-num">{step.step}</div>
                  <div className="process-step-info">
                    <h3 className="process-step-title">{step.name}</h3>
                    <p className="process-step-detail">{step.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          7. FINAL CALL TO ACTION
          ================================================== */}
      <section className="final-cta-section">
        <div className="container">
          <Reveal variant="scale">
            <div className="final-cta-box">
              <div className="cta-glow-bg"></div>
              <span className="micro-label">INITIATE COLLABORATION</span>
              <h2 className="final-cta-title">
                Have an idea worth building?
              </h2>
              <p className="final-cta-subtitle">
                Whether you need a full SaaS system architecture, an intelligent business portal, or a high-converting web product, let's bring it to life.
              </p>

              <div className="final-cta-buttons">
                <a 
                  href="mailto:contact@gauravbuilds.com" 
                  className="btn btn-accent btn-large"
                  data-cursor-magnetic
                >
                  <span>Let's Talk</span>
                  <Icon name="ArrowRight" size={20} />
                </a>
                <Link to="/community" className="btn btn-secondary btn-large">
                  <span>Explore Network</span>
                </Link>
              </div>

              <div className="cta-email-tag">
                <Icon name="Mail" size={16} />
                <span>contact@gauravbuilds.com</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
