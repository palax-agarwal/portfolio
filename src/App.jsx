import React from 'react'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Skills from "./Pages/Skills"
import Resume from "./Pages/Resume"
import Contact from "./Pages/Contact"
import Portfolio from "./Pages/Portfolio"
import Certificates from "./Pages/Certificates"
import Navbar from "./Components/Navbar"
import Footer from './Components/Footer' 
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default App
