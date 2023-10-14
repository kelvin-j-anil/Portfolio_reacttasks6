import React from 'react';
import './Works.css';

const projects = [
  {
    title: 'Student Management System',
    description:
      'Programmed a robust login system using Python and incorporated MySQL database for enhanced security and efficient access control in the Student Management System.',
    date: '08/2023 - 08/2023',
    link: 'https://github.com/kelvin-j-anil/Student_login_system.',
  },
  {
    title: 'Wine Quality Prediction',
    description: 'Wine Quality Prediction Using Machine Learning with Python',
    date: '09/2023 - 09/2023',
    link: 'https://github.com/kelvin-j-anil/Wine-Quality-Prediction-Using-Machine-Learning-With-Python-',
  },
  {
    title: 'Face Emotion Detection - Simulation Project',
    description: 'Facial Sentiment Analysis by making use of Deep Learning',
    date: '08/2023 - Present',
    underConstruction: true, 
  }
];

const Works = () => (
  <div className="projects">
    <h2>Works</h2>
    <div className="project-list">
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <h3>{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <p className="project-date">{project.date}</p>
          {project.underConstruction ? ( 
            <p>Project under Construction</p>
          ) : (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project on GitHub
            </a>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default Works;
