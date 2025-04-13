import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/components/_contact.scss';

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Ta Kontakt</h2>
      <div className="contact-message">
          <p className="desktop-message">
          Takk for at du tar deg tid til å vurdere min søknad! Jeg tar gjerne en uformell prat om et spennende fremtidig samarbeid – enten det er over en kopp kaffe eller en kort samtale. Jeg ser frem til muligheten for å bidra med mine ferdigheter og skape verdi i deres team
          </p>
          <p className="mobile-message">
          Takk for at du tar deg tid til å vurdere min søknad! Jeg tar gjerne en uformell prat om et spennende fremtidig samarbeid – enten det er over en kopp kaffe eller en kort samtale.
          </p>
        </div>
      
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="contact-grid">
          <motion.a 
            href="mailto:joachim.l.christiansen@gmail.com"
            className="contact-card" 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FaEnvelope className="contact-icon" />
            <span className="contact-link">
              joachim.l.christiansen@gmail.com
            </span>
          </motion.a>
          <motion.a 
            href="https://github.com/JoachimLC"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card" 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FaGithub className="contact-icon" />
            <span className="contact-link">
              github.com/JoachimLC
            </span>
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/joachim-christiansen-8a5080257/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card" 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FaLinkedin className="contact-icon" />
            <span className="contact-link">
              LinkedIn
            </span>
          </motion.a>
        </div>
      </motion.div>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginTop: '3rem',
        marginBottom: '2rem'
      }}>
        <a 
          href="#" 
          style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.8rem 1.5rem',
            backgroundColor: 'rgba(46, 125, 50, 0.1)',
            color: '#2e7d32',
            border: '1px solid rgba(46, 125, 50, 0.2)',
            borderRadius: '8px',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            fontSize: '0.9em',
            fontWeight: '500'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(46, 125, 50, 0.15)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(46, 125, 50, 0.1)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <span>↑</span> Ta meg til toppen
        </a>
      </div>

      <div className="contact-message">
          <p className="built-with">
          Bygget med React, Javascript, Sass -  hostet på Netfliy
          </p>
        </div>
    </section>
  );
};

export default Contact;
