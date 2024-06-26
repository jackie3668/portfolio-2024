import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
import AnimatedCursor from "react-animated-cursor"
import Navbar from './component/navbar/Navbar';
import Landing from './page/landing/Landing';

function App() {
  return (
    <BrowserRouter>
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
            '.link'
          ]}
        />
        <Routes>
          <Route Component={Landing} path='/'/>
        </Routes>
      </div>
      </ParallaxProvider>
    </BrowserRouter>
  );
}

export default App;
