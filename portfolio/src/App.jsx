import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './sections/Home'
import About from './sections/About'
import Services from './sections/Services'
import Portfolio from './sections/Portfolio'
import Resume from './sections/Resume'
import Contact from './sections/Contact'

const Footer = () => (
  <footer style={{
    width: '100%',
    background: 'rgba(20, 30, 40, 0.95)',
    color: '#fff',
    padding: '2.5rem 0 1.5rem 0',
    textAlign: 'center',
    fontFamily: 'Poppins, Montserrat, sans-serif',
    fontWeight: 700,
    fontSize: '1.35rem',
    letterSpacing: '1px',
    marginTop: '3rem',
    boxShadow: '0 -2px 24px rgba(20,30,40,0.12)'
  }}>
    Helping Brands Speak, Sell, and Stand Out.
  </footer>
);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-texture">
        <svg width="100vw" height="100vh" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="120" fill="#b2c7e6" />
          <ellipse cx="1200" cy="700" rx="180" ry="90" fill="#6e7f4e" />
          <rect x="900" y="100" width="120" height="120" rx="40" fill="#b7c59a" />
          <ellipse cx="400" cy="800" rx="90" ry="40" fill="#3a4a6b" />
        </svg>
      </div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </>
  )
}

export default App
