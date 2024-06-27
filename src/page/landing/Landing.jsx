import React, { useEffect, useRef } from 'react';
import { Parallax } from 'react-scroll-parallax';
import './Landing.css';
import video from '../../asset/branding/9150545-hd_1920_1080_24fps.mp4';
import logo from '../../asset/branding/logo.png';
import About from '../../component/about/About';
import { animateScroll as scroll } from 'react-scroll';

const Landing = () => {
  const heroContainerRef = useRef(null);
  const shadedAreaRef = useRef(null);
  const aboutRef = useRef(null);
  let lastClickTime = useRef(0);
  const lastScrollPos = useRef(0);

  useEffect(() => {
    const handleClick = () => {
      const currentTime = Date.now();
      const timeSinceLastClick = currentTime - lastClickTime.current;
      lastClickTime.current = currentTime;

      if (timeSinceLastClick > 500) { 
        const aboutOffsetTop = aboutRef.current.offsetTop;
        console.log('Click detected. Scrolling to about section.');
        scroll.scrollTo(aboutOffsetTop, {
          duration: 300,
          smooth: true,
        });
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);


    useEffect(() => {
    const handleClick = () => {
      const currentTime = Date.now();
      const timeSinceLastClick = currentTime - lastClickTime.current;
      lastClickTime.current = currentTime;

      if (timeSinceLastClick > 500) { 
        const aboutOffsetTop = aboutRef.current.offsetTop;
        console.log('Click detected. Scrolling to about section.');
        scroll.scrollTo(aboutOffsetTop, {
          duration: 200,
          smooth: true,
        });
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      clearTimeout(handleScroll.timeout);
      handleScroll.timeout = setTimeout(() => {
        const scrollY = window.scrollY;
        const shadedAreaOffsetTop = shadedAreaRef.current.offsetTop;
        const aboutOffsetTop = aboutRef.current.offsetTop;

        if (scrollY > lastScrollPos.current && scrollY < shadedAreaOffsetTop) {
          console.log('Scrolling down above shaded area. Scrolling to about section.');
          scroll.scrollTo(aboutOffsetTop, {
            duration: 200,
            smooth: true,
          });
        }

        lastScrollPos.current = scrollY;
      }, 50); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='landing-page'>
      <section className="hero-container" ref={heroContainerRef}>
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
      <div className="shaded-area" ref={shadedAreaRef}></div>
      <section ref={aboutRef} className='about-section'>
        <About />
      </section>
      <div className="projects"></div>
    </div>
  );
};

export default Landing;
