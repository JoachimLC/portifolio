import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import profilePic from '../assets/images/profilepic.jpg';
import '../styles/components/_hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Joachim Christiansen</h1>
            
            <motion.div 
              className="hero-image mobile-only"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src={profilePic} alt="Joachim Christiansen" />
            </motion.div>

            <h1 style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              width: '100%',
              gap: '0.5rem',
              flexWrap: 'wrap'
            }}>
              <span className="highlight" style={{ flexShrink: 0, marginRight: '2rem' }}>Din nye  </span>
              <TypeAnimation
                sequence={[
                  ' Innovatør',
                  2000,
                  ' Koder',
                  2000,
                  ' Skaper',
                  2000,
                  ' Arkitekt',
                  2000,
                  ' Kollega?',
                  5000,
                  '',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ 
                  display: 'inline-block',
                  minWidth: '250px',
                  textAlign: 'left',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}
                repeat={Infinity}
              />
            </h1>
            
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Holder meg løpende oppdatert på de nyeste teknologitrendene (inkludert AI-verktøy) for å skape smarte og effektive løsninger. Enten jeg jobber i team eller selvstendig, lærer jeg raskt og setter meg inn i nødvendige teknologier.
            </motion.p>

            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="cta-buttons">
                <a href="#about" className="btn btn-primary">
                  Om Meg
                </a>
                <a href="#project" className="btn btn-secondary">
                  Se Mitt Arbeid
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-image desktop-only"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={profilePic} alt="Joachim Christiansen" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
