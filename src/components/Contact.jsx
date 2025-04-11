import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section" data-aos="fade-up">
      <h2>Ta Kontakt</h2>
      <div className="contact-message">
          <p>
          Takk for at du tar deg tid til å vurdere min søknad! Jeg håper vi kan ta en uformell prat om et spennende fremtidig samarbeid – enten det er over en kopp kaffe eller en kort samtale. Jeg ser frem til muligheten for å bidra med mine ferdigheter og skape verdi i deres team
          </p>
        </div>
      
      <motion.div 
        className="contact-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="contact-grid">
          <motion.div 
            className="contact-card" 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FaEnvelope className="contact-icon" />
            <a 
              href="mailto:your.email@example.com" 
              className="contact-link"
            >
              your.email@example.com
            </a>
          </motion.div>
          <motion.div 
            className="contact-card" 
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
            className="contact-card" 
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
        
      </motion.div>
    </section>
  );
};

export default Contact;
