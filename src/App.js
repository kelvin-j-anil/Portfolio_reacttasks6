import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Header from './components/Header';
import Skills from './components/Skills';
import Works from './components/Works';
import Contact from './components/Contact';
import Education from './components/Education';

import './App.css';
import Certificates from './components/Certificates';


const App = () => (
  <div className="portfolio">
    <Carousel showStatus={false} showIndicators={false} showThumbs={false} infiniteLoop autoPlay interval={3000}>
      <div>
        <Header />
      </div>
      <div>
        <Education />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Certificates />
      </div>
      <div>
        <Works />
      </div>
    </Carousel>
    <div>
        <Contact />
      </div>
  </div>
);

export default App;
