import React from 'react';
import './Parallax.css'; // Ensure this path matches your actual CSS file path
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const Parallax_ = () => {
  return (
    <div>
      <div className='background' />

        <Parallax pages={6}>
          <ParallaxLayer sticky={{ start: 0, end: 1 }} style={{ justifyContent: 'flex-start' }}>
          <div className='fixed-header'>
            <h4>About Me.</h4>
            <h1>Every '404 Not Found' turns into '200 OK'.</h1>
          </div>
          </ParallaxLayer>
          <ParallaxLayer sticky={{ start: 1, end: 2 }} style={{ justifyContent: 'flex-start' }}>
            <div className='content-wrapper'>
              <h2>01/</h2>
              <div className='content'>
                <h5>Education</h5>
                <ParallaxLayer offset={1} speed={1.2} factor={0.5} style={{ justifyContent: 'center' }} horizontal>
                  <div className="horizontal-scroll">
                    <h4 className="element">University of Toronto</h4>
                    <h4 className="element">New York University</h4>
                    <h4 className="element">Indiana University</h4>
                  </div>
                </ParallaxLayer>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer sticky={{ start: 3, end: 4 }} style={{ justifyContent: 'flex-start' }}>
            <div className='content-wrapper'>
              <h2>02/</h2>
              <div className='content'>
                <h5>Previous Employers</h5>
                <ParallaxLayer offset={1} speed={1.2} factor={0.5} style={{ justifyContent: 'center' }} horizontal>
                  <div className="horizontal-scroll">
                    <h4 className="element">1</h4>
                    <h4 className="element">2</h4>
                    <h4 className="element">3</h4>
                  </div>
                </ParallaxLayer>
              </div>
            </div>
          </ParallaxLayer>
        </Parallax>
    </div>
  )
}

export default Parallax_