import { motion } from 'framer-motion'

const Education = () => {
  const technicalSkills = [
    {
      category: 'Programmeringsspråk',
      skills: ['JavaScript','Kotlin', 'Python', 'Java', 'C++', 'SQL']
    },
    {
      category: 'Webutvikling',
      skills: ['HTML5', 'CSS3', 'Sass','React', 'Node.js', 'Express', 'RESTful API-er']
    },
    {
      category: 'Databasesystemer',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL','Firebase', 'Sanity', 'Database-design']
    },
    {
        category: 'Backend & DevOps',
        skills: [
          'GraphQL',
          '.NET',
          'Azure',
          'CI/CD',
          'DevOps-prinsipper',
          'Bicep'
        ]
      },
      {
        category: 'Microsoft-teknologier',
        skills: [
          'Azure DevOps',
          'Azure cosmos Db',
          'azure functions',
          'azure pipelines',
        ]
      },
    {
      category: 'Utviklingsverktøy',
      skills: ['Git', 'Github','VS Code', 'Visual Studio', 'Postman']
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
      <h3>
        Jeg tar en <a href="https://www.hiof.no/studier/programmer/itbdes-bachelorstudium-i-informatikk-design-og-utvikling-av-itsystemer/" target="_blank" rel="noopener noreferrer" className="education-link">bachelor i informatikk - design og utvikling av IT-systemer</a> ved Høyskolen i Østfold, med planlagt fullføring våren 2025.
      </h3>
      <br></br>
      
      <div className="education-content">
        <div className="education-overview">
          <h3>Fokus for studiet</h3>
          <ul>
            <li>Programvareutvikling og -design</li>
            <li>Databasesystemer og -administrasjon</li>
            <li>Mobilprogrammering og -design</li>
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
  <li>SPA webapplikasjon med Typescript og React, med datahenting fra Hono-server for fremstilling av portefølje.</li>
  <li>Android-applikasjon for hundeeiere med Kotlin + Jetpack Compose + Firebase.</li>
  <li>C# og utvikling av rammerverk i .NET for en logistikkløsning for lagerstyring.</li>
  <li>Design, utarbeiding og normalisering av SQL- og MongoDB-databaser for en treningsapplikasjon, inkludert utvikling av relevante views.</li>
  <li>Java OOP-applikasjon som en mockup for en videostreamingtjeneste.</li>
  <li>Algoritmer i C for effektiv datatraversering (binære trær, heap, grafer).</li>
</ul>
        </div>
      </div>
    </motion.div>
  )
}

export default Education 