import React from 'react'
import './Projects.css'
import arrow from '../../asset/ui/Up Left.png'
import test from '../../asset/projects/videos/test.mp4'

const Projects = () => {
  return (
    <div className='projects-container'>
      <h1>Selected Work</h1>
      <div className="projects-wrapper">
        <div className="titles">
          <h1 className='active'>GLIMMERING GLOVE</h1>
          <h1>FRESH MINT</h1>
          <h1>CELESTIAL TAROT</h1>
          <h1>MENTOR A PROMISE</h1>
          <h1>STARDUST</h1>
        </div>
        <div className="display-wrapper">
            <div className="display">
            <video src={test} muted autoPlay loop></video>
  
            <div className="button-wrapper">
              <button className="website">
                Website
                <img src={arrow} alt="" />
              </button>
              <button className="case-study">
                Case Study
                <img src={arrow} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects