import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { animateScroll as scroll } from 'react-scroll';
import './App.css';
import AnimatedCursor from "react-animated-cursor";
import Navbar from './component/navbar/Navbar';
import Landing from './page/landing/Landing'; // Ensure this path is correct
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    scroll.scrollToTop({
      duration: 0,  
      smooth: true
    })
  },[])

  return (
    <BrowserRouter basename="/portfolio-2024">
      <ParallaxProvider>
        <div className="app">
          <Navbar />
          <AnimatedCursor
            innerSize={8}
            outerSize={12}
            color='255,255,255'
            outerAlpha={0.4}
            innerScale={0.5}
            outerScale={2.5}
            clickables={[
              'a',
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              'label[for]',
              'select',
              'textarea',
              'button',
              '.link',
              {
                target: '.about-section',
                options: {
                  innerSize: 100,
                  outerSize: 200,
                  color: '255,255,255',
                  outerAlpha: 0.7,
                  innerScale: 0.1,
                  outerScale: 2.5
                }
              }
            ]}
          />
          <Routes>
            <Route path="/" element={<Landing />} /> {/* Ensure 'path' matches correctly */}
            {/* Add more routes here if needed */}
          </Routes>
        </div>
      </ParallaxProvider>
    </BrowserRouter>
  );
}

export default App;
