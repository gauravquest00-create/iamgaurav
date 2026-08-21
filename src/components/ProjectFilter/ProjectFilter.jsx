import React from 'react';
import { Icon } from '../Icons';
import './ProjectFilter.css';

export const ProjectFilter = ({ 
  categories = [], 
  activeCategory = 'All', 
  onSelectCategory, 
  searchQuery = '', 
  onSearchChange,
  totalResults = 0 
}) => {
  return (
    <div className="project-filter-component">
      {/* SEARCH BAR */}
      <div className="filter-search-wrapper">
        <div className="filter-search-input-box">
          <Icon name="Search" size={18} className="search-icon" />
          <input
            type="text"
            className="filter-search-input"
            placeholder="Search projects by name, tech, or keywords..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Search projects"
          />
          {searchQuery && (
            <button 
              className="search-clear-btn" 
              onClick={() => onSearchChange('')}
              aria-label="Clear search query"
            >
              <Icon name="X" size={16} />
            </button>
          )}
        </div>
        
        <div className="filter-results-badge">
          <span>{totalResults} {totalResults === 1 ? 'project' : 'projects'} found</span>
        </div>
      </div>

      {/* CATEGORY CHIPS SCROLLER */}
      <div className="filter-categories-container">
        <div className="filter-categories-list" role="tablist" aria-label="Project categories">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                className={`filter-chip ${isActive ? 'is-active' : ''}`}
                onClick={() => onSelectCategory(cat)}
                data-cursor-magnetic
              >
                <span>{cat}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectFilter;
