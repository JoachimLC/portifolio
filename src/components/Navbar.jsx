import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Navbar = ({ isScrolled }) => {
  const navItems = [
    { name: 'Prosjekt', href: '#project' },
    { name: 'Erfaring', href: '#experience' },
    { name: 'Utdanning', href: '#education' },
    { name: 'Kontakt', href: '#contact' }
  ]

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="navbar-content">
          <a href="#" className="logo">
            <span className="logo-text">Portefølje</span>
          </a>

          <div className="nav-links">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="social-links">
            <a
              href="https://github.com/JoachimLC"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/joachim-christiansen-8a5080257/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar 