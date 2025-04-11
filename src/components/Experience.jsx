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
      skills: ['JavaScript', 'Python', 'Java', 'C++', 'SQL']
    },
    {
      category: 'Webutvikling',
      skills: ['HTML5', 'CSS3', 'React', 'Node.js', 'Express', 'RESTful API-er']
    },
    {
      category: 'Databasesystemer',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Database-design']
    },
    {
      category: 'Utviklingsverktøy',
      skills: ['Git', 'Docker', 'VS Code', 'Postman', 'Jira']
    },
    {
      category: 'Problemløsning',
      skills: ['Algoritmer', 'Datastrukturer', 'Systemdesign', 'Feilsøking']
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
    <motion.div className="education" data-aos="fade-up">
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
            Som IT-konsulent har jeg jobbet med utvikling og implementering av
            skreddersydde løsninger for ulike kunder. Min rolle har inkludert
            både teknisk utvikling og kundekontakt, noe som har gitt meg verdifull
            erfaring med å oversette forretningsbehov til tekniske løsninger.
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
            <li>Utvikling og vedlikehold av kundespesifikke løsninger</li>
            <li>Systemintegrasjon og API-utvikling</li>
            <li>Databaseoptimering og -administrasjon</li>
            <li>Kundesupport og teknisk rådgiving</li>
            <li>Dokumentasjon og kunnskapsdeling</li>
            <li>Kvalitetssikring og testing</li>
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
            <li>Praktisk erfaring med kundeorientert utvikling</li>
            <li>Forbedret evne til å kommunisere tekniske løsninger</li>
            <li>Dypere forståelse av systemintegrasjon og arkitektur</li>
            <li>Erfaring med å jobbe i tverrfaglige team</li>
            <li>Utviklet evne til å prioritere og håndtere flere prosjekter</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
