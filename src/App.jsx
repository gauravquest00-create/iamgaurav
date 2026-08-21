import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import CustomCursor from './components/CustomCursor/CustomCursor';
import PageTransition from './components/PageTransition/PageTransition';

// Pages
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';
import Skills from './pages/Skills/Skills';
import About from './pages/About/About';
import Community from './pages/Community/Community';
import NotFound from './pages/NotFound/NotFound';

import './App.css';

export function App() {
  return (
    <div className="app-container">
      {/* Custom Mouse Cursor for Desktop */}
      <CustomCursor />

      {/* Top Ambient Glow */}
      <div className="ambient-glow-top" aria-hidden="true" />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content with Route Transitions */}
      <main className="main-content">
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/about" element={<About />} />
            <Route path="/community" element={<Community />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
