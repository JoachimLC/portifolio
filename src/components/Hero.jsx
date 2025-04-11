import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            <span className="highlight">Digital</span> Innovatør
            <br />
            & Problemløser
          </h1>
          
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Skaper løsninger med kode og kreativitet
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
  )
}

export default Hero 