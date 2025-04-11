import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Innovatør', 'Løsningsdesigner', 'Koder', 'Skaper', 'Arkitekt'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Joachim Christiansen</h1>
          <h1 style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start', // endret fra center til flex-start
            width: '100%',
            gap: '0.5rem'
          }}>
            <span className="highlight" style={{ flexShrink: 0 }}>Din nye  </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWord}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                style={{ 
                  display: 'inline-block',
                  minWidth: '250px',
                  textAlign: 'left',
                  marginLeft: '2rem'
                }}
              >
                {words[currentWord]}
              </motion.span>
            </AnimatePresence>
          </h1>
          
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Holder meg oppdatert på de nyeste teknologitrendene (inkludert AI-verktøy) for å skape smarte og effektive løsninger. Enten jeg jobber i team eller selvstendig, lærer jeg raskt og setter meg inn i nødvendige teknologier.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a href="#project" className="btn">
              Se Mitt Arbeid
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
