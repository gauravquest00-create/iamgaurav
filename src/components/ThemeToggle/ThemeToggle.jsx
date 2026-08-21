import React, { useState, useEffect } from 'react';
import { Icon } from '../Icons';
import './ThemeToggle.css';

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button 
      className="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      data-cursor-magnetic
    >
      <div className={`theme-icon-wrapper ${theme === 'dark' ? 'is-dark' : 'is-light'}`}>
        <Icon name="Sun" size={18} className="theme-sun-icon" />
        <Icon name="Moon" size={18} className="theme-moon-icon" />
      </div>
    </button>
  );
};

export default ThemeToggle;
