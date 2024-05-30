import React, { useEffect} from 'react';
import './projects.css';
import Project from './Project';

const Projects = () => {
  return (
    <section className="project section" id="projects">
          <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent Projects</span>
      
      <Project/>
    </section>
  )
}

export default Projects