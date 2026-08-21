import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../Icons';
import './ProjectCard.css';

export const ProjectCard = ({ project, variant = 'grid', index = 0 }) => {
  const isHorizontal = variant === 'horizontal';

  return (
    <article 
      className={`project-card ${isHorizontal ? 'project-card-horizontal' : 'project-card-grid'} project-card-interactive`}
      data-cursor-card
      style={{ '--project-accent': project.accentColor || '#6366F1' }}
    >
      <Link to={`/projects/${project.id}`} className="project-card-link" aria-label={`View case study for ${project.name}`}>
        {/* CARD MEDIA / SYSTEM PREVIEW */}
        <div className="project-card-preview">
          <div className="preview-glow" />
          <div className="preview-mesh">
            <div className="preview-header">
              <span className="preview-dot" />
              <span className="preview-dot" />
              <span className="preview-dot" />
              <span className="preview-sys-id">{project.id.toUpperCase()} · SYS_ARCH</span>
            </div>
            
            <div className="preview-content">
              <div className="preview-metric-box">
                <span className="preview-metric-label">TYPE</span>
                <span className="preview-metric-val">{project.type}</span>
              </div>
              <div className="preview-visual-schematic">
                <div className="schematic-ring" />
                <div className="schematic-core" />
                <div className="schematic-grid-lines" />
              </div>
              {project.stats && project.stats[0] && (
                <div className="preview-stat-pill">
                  <span>{project.stats[0].label}:</span>
                  <strong>{project.stats[0].value}</strong>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CARD CONTENT */}
        <div className="project-card-content">
          <div className="project-card-meta">
            <span className="project-card-num">{project.number || `0${index + 1}`}</span>
            <span className="project-card-type">{project.type}</span>
          </div>

          <h3 className="project-card-title">
            <span>{project.name}</span>
            <div className="project-card-arrow">
              <Icon name="ArrowUpRight" size={20} />
            </div>
          </h3>

          <p className="project-card-desc">
            {project.description}
          </p>

          {/* TECH STACK CHIPS */}
          <div className="project-card-tech">
            {project.tech.slice(0, 4).map((t) => (
              <span key={t} className="tech-chip">
                {t}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="tech-chip-more">+{project.tech.length - 4}</span>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ProjectCard;
