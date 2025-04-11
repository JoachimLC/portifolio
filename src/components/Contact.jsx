import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/components/_contact.scss';

const Contact = () => {
  return (
    <section className="contact-section" data-aos="fade-up">
      <h2>Ta Kontakt</h2>
      <div className="contact-message">
          <p className="desktop-message">
          Takk for at du tar deg tid til å vurdere min søknad! Jeg håper vi kan ta en uformell prat om et spennende fremtidig samarbeid – enten det er over en kopp kaffe eller en kort samtale. Jeg ser frem til muligheten for å bidra med mine ferdigheter og skape verdi i deres team
          </p>
          <p className="mobile-message">
          Takk for at du tar deg tid til å vurdere min søknad! Jeg håper vi kan ta en uformell prat om et spennende fremtidig samarbeid – enten det er over en kopp kaffe eller en kort samtale.
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

      <div className="contact-message">
          <p className="built-with">
          Bygget med React, Javascript, Sass -  hostet på Netfliy
          </p>
        </div>
    </section>
  );
};

export default Contact;
