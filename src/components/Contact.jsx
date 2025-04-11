import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  return (
    <motion.div
      className="contact"
      data-aos="fade-up"
    >
      <h2>Get in Touch</h2>
      
      <div className="contact-content">
        <div className="contact-info">
          <motion.div
            className="contact-item"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FaEnvelope className="contact-icon" />
            <a href="mailto:your.email@example.com" className="contact-link">
              your.email@example.com
            </a>
          </motion.div>

          <motion.div
            className="contact-item"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FaGithub className="contact-icon" />
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              github.com/yourusername
            </a>
          </motion.div>

          <motion.div
            className="contact-item"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FaLinkedin className="contact-icon" />
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              linkedin.com/in/yourusername
            </a>
          </motion.div>
        </div>

        <div className="contact-message">
          <p>
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of your visions. Feel free to reach out through any of the
            channels above.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact 