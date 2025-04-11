import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './styles/main.scss'

// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Project from './components/Project'
import Experience from './components/Experience'
import Education from './components/Education'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      <Navbar isScrolled={isScrolled} />
      
      <main>
        <Hero />
        
        <section id="project">
          <div className="container">
            <Project />
          </div>
        </section>

        <section id="experience">
          <div className="container">
            <Experience />
          </div>
        </section>

        <section id="education">
          <div className="container">
            <Education />
          </div>
        </section>

        <section id="about">
          <div className="container">
            <About />
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <Contact />
          </div>
        </section>
        
      </main>
    </div>
  )
}

export default App
