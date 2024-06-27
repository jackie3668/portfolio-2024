// About.js

import React from 'react';
import './About.css'; // Import the CSS file for styling
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import image1 from '../../asset/images/pexels-adrien-olichon-1257089-2387533.jpg'
import image2 from '../../asset/images/pexels-matej-117839-1158394.jpg'
import image3 from '../../asset/images/pexels-rdne-9086767.jpg'
import image4 from '../../asset/images/pexels-slendyalex-3648850.jpg'

const About = () => {
  return (
    <div className="about-container">
      <div>
        <Parallax pages={3}>
          <ParallaxLayer sticky={{ start: 0, end: 4 }}>
            <div className="left">
              <h4>About Me.</h4>
              <h1>Every '404 Not Found' turns into '200 OK'.</h1>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0.9} speed={0.6}>
            <img className='img-1' src={image1} alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={1.4} speed={0.6}>
            <img className='img-2' src={image2} alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={2.3} speed={0.6}>
            <img className='img-1' src={image4} alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={0.9} speed={1.3}>
            <div className="right">
              <div className="header">
                <h4>01/</h4>
                <h1>Education</h1>
              </div>
              <div className="wrapper">
                <h2 className="element">Univeristy of Toronto</h2>
                <h2 className="element">New York University</h2>
                <h2 className="element">Indiana University</h2>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1.1} speed={1.3}>
            <div className="right variation">
              <div className="header">
                <h4>02/</h4>
                <h1>Previous Employer</h1>
              </div>
              <div className="wrapper">
                <h3 className="element">United Nations Department of Economic and Social Affairs</h3>
                <h3 className="element">United Nations Development Programme</h3>
                <h3 className="element">Innovation Hub @ University of Toronto</h3>
                <h3 className="element">COMMB(Canadian Out-of-Home Marketing and Measurement Bureau)</h3>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={1.3}>
            <div className="right">
              <div className="header">
                <h4>03/</h4>
                <h1>Skills</h1>
              </div>
              <div className="wrapper">
                <h3 className="element">HTML & CSS</h3>
                <h3 className="element">JavaScript</h3>
                <h3 className="element">React</h3>
                <h3 className="element">Node.js</h3>
                <h3 className="element">Express.js</h3>
                <h3 className="element">MongoDB</h3>
                <h3 className="element">RESTful APIs</h3>
                <h3 className="element">Wireframing</h3>
                <h3 className="element">Prototyping</h3>
                <h3 className="element">User Research</h3>
                <h3 className="element">Information Architecture</h3>
                <h3 className="element">Usability Testing</h3>
                <h3 className="element">Responsive Design</h3>
              </div>
            </div>
          </ParallaxLayer>
  


        </Parallax>
      </div>

    </div>
  );
};

export default About;
