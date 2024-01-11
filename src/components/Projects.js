// Projects.js

import React from 'react';
import '../css/Projects.css';

const projectsData = [
  {
    title: 'Proyek 1',
    description: 'Deskripsi proyek pertama di sini...',
    image: require('../img/sd.png'), // Correct path to the image
  },
  {
    title: 'Proyek 2',
    description: 'Deskripsi proyek kedua di sini...',
    image: require('../img/profile.jpeg'), // Replace with the correct image path
  },
  {
    title: 'Proyek 3',
    description: 'Deskripsi proyek ketiga di sini...',
    image: require('../img/profile.jpeg'), // Replace with the correct image path
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>Proyek-Proyek Saya</h2>
      <div className="project-container">
        {projectsData.map((project, index) => (
          <div className="project-item" key={index}>
            <img className="project-image" src={project.image} alt={project.title || 'Project Image'} />
            <div className="project-description">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
