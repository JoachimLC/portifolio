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

        <div className="bachelor-thesis">
          <h3>Bacheloroppgave</h3>
          <div className="thesis-content">
            <p>
              Som avsluttende prosjekt i bachelorgraden min ved Høgskolen i Østfold, skriver jeg bacheloroppgave i samarbeid med konsulenthuset Evidi. 
              I oppgaven utvikler vi et API i .NET med både REST- og GraphQL-endepunkter, og undersøker hvordan GraphQL kan bidra til bedre ytelse og raskere utvikling i kundeprosjekter.
            </p>
            <p>
              API-et er satt opp i Microsoft Azure, med infrastruktur som kode ved hjelp av Bicep og automatisert deploy gjennom CI/CD-pipelines. 
              Vi jobber etter DevOps-prinsipper, og har hatt fokus på både teknisk kvalitet og praktisk nytteverdi for en reell konsulenthverdag.
            </p>
            <p>
              Målet med oppgaven er å sammenligne hvordan ulike tilnærminger til API-design påvirker datatilgjengelighet, ytelse og fleksibilitet i løsninger som skal møte kundenes behov. 
              Oppgaven har gitt meg dypere innsikt i moderne utviklingsprosesser, og verdifull erfaring med samarbeid i tverrfaglig team.
            </p>
            <div className="thesis-links">
              <a href="https://bachelor2025-g3-app-service.azurewebsites.net/swagger/index.html" target="_blank" rel="noopener noreferrer" className="thesis-link">
                🔹 Prøv REST-endepunktene
              </a>
              <a href="https://bachelor2025-g3-app-service.azurewebsites.net/graphql/" target="_blank" rel="noopener noreferrer" className="thesis-link">
                🔹 Prøv GraphQL-endepunktene
              </a>
            </div>
          </div>
        </div>

        <div className="previous-education" style={{ 
          marginTop: '4rem',
          padding: '1.5rem',
          backgroundColor: 'rgba(46, 125, 50, 0.03)',
          border: '1px dashed rgba(46, 125, 50, 0.2)',
          borderRadius: '8px',
          position: 'relative',
          fontStyle: 'italic'
        }}>
          <h3 style={{ 
            color: '#2e7d32',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '1.1em',
            fontWeight: '500'
          }}>
            <span style={{ fontSize: '1em' }}>💡</span>Utdanning innen sosialt arbeid
          </h3>
          <p style={{ 
            lineHeight: '1.8',
            color: '#555',
            fontSize: '0.95em'
          }}>
            Før jeg startet på IT-studiene, tok jeg en bachelorgrad i sosialt arbeid og jobbet flere år som sosionom. 
            Denne erfaringen har gitt meg verdifull innsikt i menneskelig kommunikasjon, behovsforståelse og tverrfaglig samarbeid – 
            egenskaper jeg i dag ser som en stor styrke også i utviklerrollen. Det å kunne sette seg inn i andres perspektiv, 
            jobbe strukturert under press, og kommunisere tydelig på tvers av fagmiljøer er noe jeg tar med meg videre i alle prosjekter jeg jobber med.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Education 