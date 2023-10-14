import React from 'react';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css'

const Contact = () => (
  <div className="contact">
    <p>
      Contact Details
    </p>
    <p>
    <i className="far fa-envelope" id><FontAwesomeIcon icon={faEnvelope} /></i> Email: <a href="mailto:kelvinjanil@gmail.com">kelvinjanil@gmail.com</a>
    </p>
    <p>
    <i className="fab fa-linkedin"><FontAwesomeIcon icon={faLinkedin} /></i> LinkedIn: <a href="https://www.linkedin.com/in/kelvin-anil-b91279176/" target="_blank" rel="noopener noreferrer">Kelvin (J) Anil
 </a>
    </p>
  </div>
);

export default Contact;
