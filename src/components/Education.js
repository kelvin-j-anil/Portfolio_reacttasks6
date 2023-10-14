// Education.js

import React from 'react';
import './Education.css';

const education = [
  {
    institution: 'Vellore Institute of Technology',
    course: 'BTECH - COMPUTER SCIENCE',
    date: '08/2021 - Present',
  },
  {
    institution: 'St Johns School',
    course: 'Senior School Education',
    date: '06/2017 - 05/2019',
  },
];

const Education = () => (
  <div className="education">
    <h2>Education</h2>
    <div className="education-carousel">
      {education.map((item, index) => (
        <div className="education-item" key={index}>
          <h3>{item.institution}</h3>
          <p>{item.course}</p>
          <p>{item.date}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Education;
