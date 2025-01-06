import React, { useState, useEffect } from 'react';
import './Projects.css';
import arrow from '../../asset/ui/Up Left.png';
import video1 from '../../asset/projects/videos/Soul Serenity.mp4';
import video2 from '../../asset/projects/videos/Celestial Tarot 2.0.mp4'; 
import video3 from '../../asset/projects/videos/Glimmering Grove.mp4';
import video4 from '../../asset/projects/videos/Fresh Mint.mp4';
import video5 from '../../asset/projects/videos/Mentor A Promise.mp4';

const Projects = () => {
  const [projectIndex, setProjectIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');
  const videos = [video1, video2, video3, video4, video5];

  const websites = [
    'https://soul-serenity-journal-app.vercel.app/',
    'https://jackie3668.github.io/celestial-tarot-2.0/',
    'https://jackie3668.github.io/glimmering-grove/',
    'https://jackie3668.github.io/fresh-mint/',
    'https://mentorapromise.org/'
  ];

  useEffect(() => {
    if (fadeClass === 'fade-out') {
      const timeout = setTimeout(() => {
        setProjectIndex((prevIndex) => {
          const newIndex = Number(document.querySelector('.titles h1.active').id);
          return newIndex;
        });
        setFadeClass('fade-in');
      }, 200); 
      return () => clearTimeout(timeout);
    }
  }, [fadeClass]);

  const handleClick = (e) => {
    const titles = document.querySelectorAll('.titles h1');
    titles.forEach(title => title.classList.remove('active'));
    e.target.classList.add('active');
    setFadeClass('fade-out');
  };

  const resetFadeIn = () => {
    const videoElement = document.querySelector('.display');
    videoElement.classList.remove('fade-in');
    void videoElement.offsetWidth; 
    videoElement.classList.add('fade-in');
  };

  useEffect(() => {
    if (fadeClass === 'fade-in') {
      resetFadeIn();
    }
  }, [fadeClass]);

  return (
    <div className='projects-container'>
      <h1>Selected Work</h1>
      <div className="projects-wrapper">
        <div className="titles">
          <h1 onClick={handleClick} className='active' id='0' title='SOUL SERENITY'>SOUL SERENITY</h1>
          <h1 onClick={handleClick} id='1' title='CELESTIAL TAROT'>CELESTIAL TAROT</h1>
          <h1 onClick={handleClick} id='2' title='GLIMMERING GROVE'>GLIMMERING GROVE</h1>
          <h1 onClick={handleClick} id='3' title='FRESH MINT'>FRESH MINT</h1>
          <h1 onClick={handleClick} id='4' title='MENTOR A PROMISE'>MENTOR A PROMISE</h1>
        </div>
        <div className="display-wrapper">
          <div className="display">
            <video
              className={`project-video ${fadeClass} video${projectIndex}`}
              src={videos[projectIndex]}
              muted
              autoPlay
              loop
            ></video>
            <div className="button-wrapper">
              <a href={websites[projectIndex]} target="_blank" rel="noopener noreferrer" className="website">
                <button className="website">
                  Website
                  <img src={arrow} alt="" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <button>More Work <img src={arrow} alt="" /></button>
    </div>
  );
};

export default Projects;
