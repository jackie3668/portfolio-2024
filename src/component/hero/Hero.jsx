import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import './Hero.css';
import video from '../../asset/branding/9150545-hd_1920_1080_24fps.mp4';
import logo from '../../asset/branding/logo.png'


const Hero = () => {

  return (
    <div>
      <section className="hero-container">
        <video className="background-video" src={video} autoPlay muted loop type="video/mp4"></video>
        <Parallax speed={7}  className='line-1'>
          <h1>
            <span>
              I am
            </span>
            JACKIE SHEN
          </h1>
        </Parallax>
        <Parallax translateX={['0px', '150px']} speed={3} className='line-2'>
          <h1>
            DESIGNER
            <span>
              &
            </span>
          </h1>
        </Parallax>
        <Parallax translateX={['0px', '-200px']}  speed={6} className='line-3'>
          <h1>
            DEVELOPER
          </h1>
          <img src={logo} alt="" />
        </Parallax>
      </section>
    </div>
  );
};

export default Hero;
