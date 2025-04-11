import { motion } from 'framer-motion'
import cratediggerImage from '../assets/images/cratedigger.png'

const Project = () => {
  const techStack = [
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'Spotify API',
    'Discogs API'
  ]

  const howItWorks = [
    {
      step: 1,
      title: 'Koble til Spotify',
      description: 'Koble til Spotify-kontoen din og velg en spilleliste.'
    },
    {
      step: 2,
      title: 'Generer en Kasse',
      description: 'Vi lager en digital platekasse for deg.'
    },
    {
      step: 3,
      title: 'Lagre Den',
      description: 'Kassen din blir automatisk eksportert til kontoen din.'
    },
    {
      step: 4,
      title: 'Oppdag Vinyl',
      description: 'Lytt og finn plater du vil elske å eie.'
    },
    {
      step: 5,
      title: 'Få Bekreftelse',
      description: 'Forsikre deg om at hvert album finnes på vinyl før du kjøper.'
    }
  ]

  return (
    <motion.div
      className="project"
      data-aos="fade-up"
    >
      <h2>CrateDigger</h2>
      
      <div className="project-content">
        <div className="intro-section">
          <div className="project-description">
            <h3>Om Prosjektet</h3>
            <p>
              CrateDigger er en webapplikasjon som hjelper musikkentusiaster å oppdage og finne vinyl-plater. 
              Har du noen gang snublet over en utrolig låt eller et band, bare for å finne ut at det ikke er 
              tilgjengelig på vinyl? Det er en frustrerende realitet for musikkentusiaster overalt. Med CrateDigger 
              trenger du aldri å møte den skuffelsen igjen.
            </p>

            <h3>Min Rolle</h3>
            <p>
              Som hovedutvikler var jeg ansvarlig for:
            </p>
            <ul>
              <li>Design og implementering av frontend-arkitektur</li>
              <li>Integrering av Discogs og Spotify API-er</li>
              <li>Utvikling av backend API-endepunkter</li>
              <li>Administrasjon av databasestruktur</li>
              <li>Implementering av brukerautentisering</li>
            </ul>
          </div>

          <div className="project-images">
            <motion.img
              src={cratediggerImage}
              alt="CrateDigger Hero"
              className="project-image main-image"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <div className="project-description">
          <h3>Hvordan det fungerer</h3>
          <div className="how-it-works">
            {howItWorks.map((step) => (
              <motion.div
                key={step.step}
                className="step"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="step-number">{step.step}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </div>

          <h3>Teknisk Stack</h3>
          <div className="tech-stack">
            {techStack.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Project 