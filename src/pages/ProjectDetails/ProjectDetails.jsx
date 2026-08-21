import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Icon } from '../../components/Icons';
import Reveal from '../../components/Reveal/Reveal';

import projectsData from '../../data/projects.json';
import './ProjectDetails.css';

export const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find project by ID
  const currentIndex = projectsData.findIndex((p) => p.id === id);
  const project = projectsData[currentIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="project-not-found container">
        <h2>Project Not Found</h2>
        <p>The case study you are looking for does not exist or has been archived.</p>
        <Link to="/projects" className="btn btn-primary">
          <Icon name="ArrowLeft" size={16} />
          <span>Back to Projects</span>
        </Link>
      </div>
    );
  }

  // Calculate Next & Prev project
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : projectsData[0];

  return (
    <div className="project-details-page" style={{ '--project-accent': project.accentColor || '#6366F1' }}>
      <div className="container">
        {/* TOP BAR / BACK NAVIGATION */}
        <div className="project-top-nav">
          <Link to="/projects" className="back-link" data-cursor-magnetic>
            <Icon name="ArrowLeft" size={18} />
            <span>All Projects</span>
          </Link>
          <span className="project-index-tag">CASE STUDY {project.number || `0${currentIndex + 1}`} / 07</span>
        </div>

        {/* HERO HEADER */}
        <header className="project-hero-header">
          <Reveal variant="fade-up">
            <div className="project-type-pill">
              <span>{project.type}</span>
            </div>
            <h1 className="project-main-title">{project.name}</h1>
            <p className="project-tagline">{project.tagline || project.description}</p>
          </Reveal>

          {/* QUICK LINKS */}
          <Reveal variant="fade-up" delay={0.15}>
            <div className="project-action-bar">
              {project.live && (
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                  data-cursor-magnetic
                >
                  <span>Launch Live Platform</span>
                  <Icon name="ExternalLink" size={16} />
                </a>
              )}
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary"
                  data-cursor-magnetic
                >
                  <Icon name="Github" size={16} />
                  <span>Source Code</span>
                </a>
              )}
            </div>
          </Reveal>
        </header>

        {/* HERO SCHEMATIC BANNER */}
        <Reveal variant="scale" delay={0.2}>
          <div className="project-banner-box">
            <div className="banner-glow-effect" />
            <div className="banner-inner-schematic">
              <div className="banner-status-bar">
                <span className="banner-status-item">
                  <strong>SYSTEM:</strong> {project.id.toUpperCase()}
                </span>
                <span className="banner-status-item">
                  <strong>STATUS:</strong> PRODUCTION / ACTIVE
                </span>
                <span className="banner-status-item">
                  <strong>CLIENT:</strong> WEB_DEPLOYMENT
                </span>
              </div>

              <div className="banner-center-artifact">
                <div className="artifact-circle-outer" />
                <div className="artifact-circle-mid" />
                <div className="artifact-node" />
                <div className="artifact-title-box">
                  <h3>{project.name}</h3>
                  <span>{project.type}</span>
                </div>
              </div>

              {/* STATS STRIP */}
              {project.stats && (
                <div className="banner-stats-strip">
                  {project.stats.map((stat, idx) => (
                    <div key={idx} className="banner-stat-block">
                      <span className="stat-label">{stat.label}</span>
                      <span className="stat-value">{stat.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Reveal>

        {/* CASE STUDY CONTENT GRID */}
        <div className="project-body-grid">
          {/* MAIN COLUMN */}
          <div className="project-main-col">
            {/* OVERVIEW */}
            <Reveal variant="fade-up">
              <section className="project-section">
                <span className="micro-label">SYSTEM OVERVIEW</span>
                <h2 className="project-section-title">The Challenge & Architecture</h2>
                <p className="project-body-text">{project.overview}</p>
              </section>
            </Reveal>

            {/* KEY FEATURES */}
            <Reveal variant="fade-up" delay={0.1}>
              <section className="project-section">
                <span className="micro-label">CORE CAPABILITIES</span>
                <h2 className="project-section-title">Key Engineered Features</h2>
                <ul className="project-features-list">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="project-feature-item">
                      <div className="feature-check-icon">
                        <Icon name="Check" size={16} />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            {/* HIGHLIGHTS */}
            {project.highlights && (
              <Reveal variant="fade-up" delay={0.15}>
                <section className="project-section">
                  <span className="micro-label">TECHNICAL WINS</span>
                  <h2 className="project-section-title">Architectural Highlights</h2>
                  <div className="project-highlights-cards">
                    {project.highlights.map((hl, idx) => (
                      <div key={idx} className="highlight-card">
                        <span className="highlight-num">0{idx + 1}</span>
                        <p>{hl}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </Reveal>
            )}
          </div>

          {/* SIDEBAR METADATA COLUMN */}
          <div className="project-sidebar-col">
            <Reveal variant="fade-left">
              <div className="project-meta-card">
                <div className="meta-group">
                  <span className="meta-label">TECHNOLOGY STACK</span>
                  <div className="meta-tech-list">
                    {project.tech.map((t) => (
                      <span key={t} className="tag tag-accent">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="meta-divider" />

                <div className="meta-group">
                  <span className="meta-label">CATEGORIES</span>
                  <div className="meta-categories-list">
                    {project.categories.map((c) => (
                      <span key={c} className="tag">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="meta-divider" />

                <div className="meta-group">
                  <span className="meta-label">LIVE ACCESS</span>
                  <div className="meta-links-list">
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="sidebar-live-link"
                      >
                        <span>{project.live.replace('https://', '')}</span>
                        <Icon name="ExternalLink" size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* BOTTOM PAGINATION: NEXT / PREVIOUS CASE STUDY */}
        <div className="project-pagination-section">
          <Reveal variant="fade-up">
            <div className="pagination-grid">
              <Link to={`/projects/${prevProject.id}`} className="pagination-card prev-card">
                <span className="pagination-direction">
                  <Icon name="ArrowLeft" size={14} />
                  <span>PREVIOUS PROJECT</span>
                </span>
                <h4 className="pagination-title">{prevProject.name}</h4>
                <span className="pagination-type">{prevProject.type}</span>
              </Link>

              <Link to={`/projects/${nextProject.id}`} className="pagination-card next-card">
                <span className="pagination-direction">
                  <span>NEXT PROJECT</span>
                  <Icon name="ArrowRight" size={14} />
                </span>
                <h4 className="pagination-title">{nextProject.name}</h4>
                <span className="pagination-type">{nextProject.type}</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
