import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icons';
import Reveal from '../../components/Reveal/Reveal';
import './NotFound.css';

export const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="container not-found-container">
        <Reveal variant="scale">
          <div className="not-found-card">
            <span className="not-found-code">404 · ROUTE_EXCEPTION</span>
            <h1 className="not-found-title">
              Looks like this page got lost in production.
            </h1>
            <p className="not-found-desc">
              The endpoint or resource you requested is unmapped or has been migrated to another cluster.
            </p>
            <div className="not-found-actions">
              <Link to="/" className="btn btn-primary" data-cursor-magnetic>
                <Icon name="ArrowLeft" size={18} />
                <span>Back to System Core (Home)</span>
              </Link>
              <Link to="/projects" className="btn btn-secondary">
                <span>Browse Projects</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default NotFound;
