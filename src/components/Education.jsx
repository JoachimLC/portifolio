import { motion } from 'framer-motion'

const Education = () => {
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
  ]

  return (
    <motion.div
      className="education"
      data-aos="fade-up"
    >
      <h2>Bachelor i Informatikk</h2>
      
      <div className="education-content">
        <div className="education-overview">
          <h3>Hovedstudieområder</h3>
          <ul>
            <li>Programvareutvikling og -design</li>
            <li>Databasesystemer og -administrasjon</li>
            <li>Webteknologier og -applikasjoner</li>
            <li>Systemarkitektur og -design</li>
            <li>Datastrukturer og algoritmer</li>
            <li>Brukergrensesnittdesign og -opplevelse</li>
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
          <h3>Akademiske Prestasjoner</h3>
          <ul>
            <li>Utdannet med utmerkelse i Programvareutvikling</li>
            <li>Fullførte avanserte kurs i Webteknologier</li>
            <li>Deltok i flere hackathons og programmeringskonkurranser</li>
            <li>Bidro til åpen kildekode-prosjekter under studiene</li>
            <li>Presenterte forskning på moderne webutviklingspraksis</li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default Education 