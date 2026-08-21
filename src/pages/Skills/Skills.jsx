import React, { useState } from 'react';
import Reveal from '../../components/Reveal/Reveal';
import { Icon } from '../../components/Icons';

import skillsData from '../../data/skills.json';
import './Skills.css';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillsData.categories[0].id);

  return (
    <div className="skills-page">
      <div className="container">
        {/* HEADER */}
        <header className="skills-page-header">
          <Reveal variant="fade-up">
            <span className="micro-label">TECHNICAL ECOSYSTEM</span>
            <h1 className="skills-page-title">Skills & Capabilities</h1>
            <p className="skills-page-subtitle">
              A comprehensive breakdown of my engineering stack, database modeling, cloud automations, and AI acceleration tools.
            </p>
          </Reveal>
        </header>

        {/* CATEGORY SELECTOR TABS */}
        <Reveal variant="fade-up" delay={0.1}>
          <div className="skills-category-tabs">
            {skillsData.categories.map((cat) => (
              <button
                key={cat.id}
                className={`skill-tab-btn ${activeCategory === cat.id ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
                data-cursor-magnetic
              >
                <span>{cat.name}</span>
                <span className="skill-tab-count">{cat.skills.length}</span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* SKILLS CATEGORIES DISPLAY */}
        <div className="skills-sections-container">
          {skillsData.categories.map((category, catIdx) => {
            const isSelected = activeCategory === category.id;
            return (
              <section 
                key={category.id} 
                className={`skills-category-block ${isSelected ? 'is-visible' : ''}`}
                id={category.id}
              >
                <div className="category-intro-header">
                  <div>
                    <h2 className="category-name">{category.name}</h2>
                    <p className="category-description">{category.description}</p>
                  </div>
                  <span className="category-stat-pill">{category.skills.length} Core Technologies</span>
                </div>

                <div className="skills-grid">
                  {category.skills.map((skill, skillIdx) => (
                    <Reveal key={skill.name} variant="fade-up" delay={skillIdx * 0.05}>
                      <div className="skill-card">
                        <div className="skill-card-top">
                          <h3 className="skill-name">{skill.name}</h3>
                          <span className={`skill-tag tag-${skill.level.toLowerCase()}`}>
                            {skill.level}
                          </span>
                        </div>

                        <span className="skill-domain-pill">{skill.tag}</span>

                        <p className="skill-details">
                          {skill.description}
                        </p>

                        <div className="skill-card-footer">
                          <div className="skill-level-bar">
                            <div 
                              className="skill-level-fill" 
                              style={{ 
                                width: skill.level === 'Expert' ? '95%' : skill.level === 'Advanced' ? '85%' : '75%' 
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* BOTTOM PHILOSOPHY CARD */}
        <Reveal variant="scale" delay={0.2}>
          <div className="skills-philosophy-card">
            <div className="philosophy-icon-box">
              <Icon name="Cpu" size={32} />
            </div>
            <div className="philosophy-content">
              <h3>Tools Are Transient, Architecture Is Permanent</h3>
              <p>
                While I master specific frameworks like React, Node.js, and MongoDB, my foundational strength lies in clean system boundaries, resilient API contracts, database normalization, and delivering rapid, conversion-oriented user experiences.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Skills;
