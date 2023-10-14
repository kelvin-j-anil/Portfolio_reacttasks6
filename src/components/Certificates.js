
import React from 'react';
import './Certificates.css';

const certificates = [
    {
      title: 'Bootstrap 3',
      issuer: 'MindLuster',
      issued: 'Sep 2023',
      credentialId: '9247184395',
    },
    {
      title: 'Build an App in React',
      issuer: 'MindLuster',
      issued: 'Aug 2023',
      credentialId: '9247182828',
    },
    {
      title: 'Introduction to MongoDB',
      issuer: 'MongoDB',
      issued: 'Jul 2023',
      credentialId: 'MDBjkugrllzcu',
    },
  ];
  

const Certificates = () => (
  <div className="certificates">
    <h2>Certificates</h2>
    <div className="certificates-carousel">
      {certificates.map((item, index) => (
        <div className="certificate-item" key={index}>
          <h3>Title: {item.title}</h3>
          <p>Organization: {item.issuer}</p>
          <p>Issue Date: {item.issued}</p>
          <p>Certification ID: {item.credentialId}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Certificates;
