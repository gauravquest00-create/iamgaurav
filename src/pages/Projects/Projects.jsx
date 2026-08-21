import React, { useState, useMemo } from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ProjectFilter from '../../components/ProjectFilter/ProjectFilter';
import Reveal from '../../components/Reveal/Reveal';
import { Icon } from '../../components/Icons';

import projectsData from '../../data/projects.json';
import categoriesData from '../../data/categories.json';
import './Projects.css';

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter projects by category and search term
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory = 
        activeCategory === 'All' || 
        (project.categories && project.categories.includes(activeCategory)) ||
        project.type.toLowerCase().includes(activeCategory.toLowerCase());

      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesSearch =
        project.name.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.type.toLowerCase().includes(query) ||
        (project.tech && project.tech.some(t => t.toLowerCase().includes(query))) ||
        (project.categories && project.categories.some(c => c.toLowerCase().includes(query)));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="projects-page">
      <div className="container">
        {/* PAGE HEADER */}
        <header className="projects-page-header">
          <Reveal variant="fade-up">
            <span className="micro-label">PORTFOLIO INDEX</span>
            <h1 className="projects-page-title">Selected Work</h1>
            <p className="projects-page-subtitle">
              A collection of products, platforms and digital experiences I've built.
            </p>
          </Reveal>
        </header>

        {/* FILTERS & SEARCH */}
        <Reveal variant="fade-up" delay={0.1}>
          <ProjectFilter
            categories={categoriesData}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            totalResults={filteredProjects.length}
          />
        </Reveal>

        {/* PROJECTS GRID */}
        {filteredProjects.length > 0 ? (
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <Reveal key={project.id} variant="fade-up" delay={index * 0.08}>
                <ProjectCard project={project} variant="grid" index={index} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="projects-empty-state">
            <div className="empty-icon-box">
              <Icon name="Filter" size={28} />
            </div>
            <h3>No matching projects found</h3>
            <p>Try refining your search terms or clearing category filters.</p>
            <button 
              className="btn btn-secondary"
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
