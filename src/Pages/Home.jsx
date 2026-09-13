import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import img from "../Assets/palax.jpeg";
import "../Styles/Home.css";

function Home() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && window.VANTA && window.VANTA.BIRDS && vantaRef.current) {
      const effect = window.VANTA.BIRDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x07192f,
        backgroundAlpha: 1,
        color1: 0xff0000,
        color2: 0x00d1ff
      });
      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className='home-vanta' ref={vantaRef}>
      <div className='home-content'>
        <div className='text-section'>
          <h1>Hello I'm <span className='highlight'>Agarwal</span></h1>
          <h2>Full Stack Developer | AI/ML Engineer</h2>
          <p>I am building interactive web applications using modern frontend technologies (ReactJS)</p>
          <Link to="/resume" className="resume-button">View Resume</Link>
        </div>
        <div className='image-section'>
          <img src={img} alt="Profile" />
        </div>
      </div>
    </div>
  );
}

export default Home;
