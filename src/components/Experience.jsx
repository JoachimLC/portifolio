import { motion } from 'framer-motion';
import node from '../assets/images/node.png';
import react from '../assets/images/react.png';
import github from '../assets/images/github.svg';
import m365 from '../assets/images/m365.svg';
import powerplatform from '../assets/images/powerplatform.svg';


const Experience = () => {
  const technicalSkills = [
    {
      category: 'Programmeringsspråk',
      skills: ['JavaScript', 'Java', 'No-code i Power Platform']
    },
    {
      category: 'Webutvikling',
      skills: ['HTML5', 'CSS3', 'React', 'Node.js', 'Hono', 'RESTful API-er']
    },
    {
        category: 'Microsoft-teknologier',
        skills: [
          'Microsoft 365',
          'Power Platform',
          'PowerApps',
          'Power Automate',
          'Microsoft Audit API',
          'Azure DevOps',
        ]
      },
    {
      category: 'Utviklingsverktøy',
      skills: ['Git', 'Github', 'VS Code', 'Visual Studio']
    }
  ];

  const techImages = [
    { src: node, alt: 'Node.js' },
    { src: react, alt: 'React' },
    { src: github, alt: 'GitHub' },
    { src: m365, alt: 'Microsoft 365' },
    { src: powerplatform, alt: 'Power Platform' }
  ];

  return (
    <motion.div className="education">
      <h2>Erfaring som IT-konsulent (deltid)</h2>

      <div
        className="education-header"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '4rem',
          maxWidth: '1200px',
          margin: '0 auto',
          marginBottom: '8rem'
        }}
      >
        <div
          className="education-description"
          style={{
            maxWidth: '600px',
            textAlign: 'left'
          }}
        >
          <p>
          I løpet av det siste studieåret har jeg jobbet som IT-konsulent hos Iqonic, parallelt med bacheloroppgaven min. Rollen har gitt meg bred erfaring innen både utvikling, rådgivning og kundedialog – og har styrket min forståelse for hva som kreves i konsulentrollen ute i praksis.
          </p>
        </div>
        <div
          className="tech-images"
          style={{
            position: 'relative',
            width: '300px',
            height: '300px',
            flexShrink: 0
          }}
        >
          {techImages.map((image, index) => (
            <motion.div
              key={index}
              className="tech-image-container"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '60px',
                height: '60px',
                margin: '-30px',
                transform: `rotate(${index * 72}deg) translate(120px) rotate(-${index * 72}deg)`,
                backgroundColor: 'transparent' // ensures the container background is transparent
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="tech-image"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  borderRadius: '8px'
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="education-content">
        <div className="education-overview">
          <h3>Ansvar og Oppgaver</h3>
          <ul>
            <li>Utvikling og vedlikehold av nettsider i React og JavaScript</li>
            <li>Microsoft 365-administrasjon og tilpasning av løsninger</li>
            <li>Utvikling av PowerApps og Power Automate-flows i Power Platform</li>
            <li>Automatisering av database-loggføring med Microsoft Audit API</li>
            <li>Direkte kundedialog og behovskartlegging som selskapets ansikt utad</li>
          </ul>
        </div>

        <div className="technical-skills">
          <h3>Tekniske Kompetanser</h3>
          <div className="skills-grid">
            {technicalSkills.map((category) => (
              <motion.div
                key={category.category}
                className="skill-category"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h4>{category.category}</h4>
                <ul>
                  {category.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="academic-highlights">
        <h3>Læringsutbytte og Refleksjon</h3>
<ul>
  <li>Fikk praktisk erfaring med utvikling av kundeorienterte løsninger i React og Power Platform</li>
  <li>Styrket evnen til å kommunisere tekniske løsninger til ikke-tekniske kunder og samarbeidspartnere</li>
  <li>Fikk dypere innsikt i integrasjon mellom ulike systemer og hvordan automatisering kan forbedre arbeidsflyt</li>
  <li>Lærte å balansere tekniske oppgaver med kundedialog og administrative prosesser</li>
  <li>Utviklet evne til å håndtere flere parallelle prosjekter og prioritere oppgaver effektivt i en konsulentrolle</li>
</ul>

        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
