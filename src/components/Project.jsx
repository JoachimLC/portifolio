import { motion } from 'framer-motion'
import cratediggerImage from '../assets/images/cratedigger.png'
 
const Project = () => {
  const techStack = [
    'React',
    'Node.js',
    'Hono',
    'MongoDB',
    'Spotify API',
    'Discogs API'
  ]

  const howItWorks = [
    {
      step: 1,
      title: 'Koble til Spotify',
      description: 'Koble til Spotify-kontoen din og velg en spilleliste å basere dine digitale platekasser på.'
    },
    {
      step: 2,
      title: 'Generer en Kasse',
      description: 'Vi lager en digital platekasse for deg.'
    },
    {
      step: 3,
      title: 'Lagre Den',
      description: 'Kassen din blir automatisk eksportert som en ny spilleliste til spotify kontoen din.'
    },
    {
      step: 4,
      title: 'Oppdag Vinyl',
      description: 'Lytt gjennom plater og gled deg over at de alle garantert finnes på vinyl.'
    },
    {
      step: 5,
      title: 'Kjøp',
      description: 'Nyt at alle album fra spillelisten din er tilgjengelige på vinyl'
    }
  ]

  return (
    <motion.div className="project">
      <h2>CrateDigger</h2>
      
      <div className="project-content">
        <div className="intro-section">
          <div className="project-description">
            <h3>Om Prosjektet</h3>
            <p>
              CrateDigger er prosjektet jeg jobber på ved siden av bacheloroppgaven, og deltidsjobben som it-konsulent/utvikler. 
              <br></br>
              <br></br>
              Det er en webapplikasjon som hjelper musikkentusiaster å oppdage nye vinylplater basert på deres musikksmak. Tanken bak var at jeg selv samler på
              vinyl, og synes det er gøy å gå i platebutikker og bla gjennom platekassene for å se hva de har. Så tenkte jeg at det hadde vært kult med en
              digital versjon av dette, hvor du fikk laget egne "digitale platekasser" å romstere gjennom, men med bare vinyl som passer til din smak!
              <br></br>
              <br></br>
              Bare bruk spotify radio tenker du kanskje. Men det er mange ganger jeg har snublet over en utrolig låt eller et band, bare for å finne ut at det ikke er 
              tilgjengelig på vinyl! Det er en frustrerende opplevelse, og dermed startet jeg på prosjektet CrateDigger, så jeg aldri trenger å møte den skuffelsen igjen.
              <br></br>
              <br></br>
              Per i dag er det fungerende innloggingsfunksjonalitet, og du kan logge inn med Spotify for å hente ut din musikksmak – og bruke den som grunnlag for dine digitale platekasser. All logikken er enda ikke på plass, men jeg planlegger å ha en demo ute innen sommerne.
              Tanken er å implementere et stegvis betalingsnivå som lar deg eksportere spillelister fra dine digitale platekasser – jo høyere nivå, jo flere funksjoner.
              <br></br>
              <br></br>
              Platformen benytter seg av 2 apier, Discogs og Spotify. Discogs brukes til å hente data om vinylplater, og Spotify brukes til å hente ut din musikksmakk og eksportere spillelisten til spotify kontoen din. Discogs benyttes til å filtrere spillelistene så de kun består av vinylplater.
            </p>

            <h3>Prosjektoppgaver </h3>
            <p>
              Jeg har jobbet med følgende:
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