import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import './Landing.css'
import '../../component/hero/Hero.css';
import video from '../../asset/branding/9150545-hd_1920_1080_24fps.mp4';
import logo from '../../asset/branding/logo.png'
import Hero from '../../component/hero/Hero'
import About from '../../component/about/About'

const Landing = () => {
  return (
    <div className='landing-page'>
      <section className="hero-container">
        <video className="background-video" src={video} autoPlay muted loop type="video/mp4"></video>
         <Parallax speed={0}  className='line-1'>
          <h1>
            <span>
              I am
            </span>
            JACKIE SHEN
          </h1>
        </Parallax>
        <Parallax translateX={['0px', '300px']} speed={-30} className='line-2'>
          <h1>
            DESIGNER
            <span>
              &
            </span>
          </h1>
        </Parallax>
        <Parallax translateX={['0px', '-300px']}  speed={-30} className='line-3'>
          <h1>
            DEVELOPER
          </h1>
          <img src={logo} alt="" />
        </Parallax>
      </section>
      <section className='about-container'>
        <div className="shaded-area">
        </div>
        <div className="about-wrapper">
          
        </div>
      </section>
    </div>
  )
}

export default Landing