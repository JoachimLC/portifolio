import React from 'react';
import '../styles/main.scss';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>Om Meg</h2>
        <div className="about-content">
          <div className="about-text">
          <p>
  Jeg er en engasjert, nysgjerrig og snart ferdig utdannet utvikler som synes det er gøy å skape intuitive og effektive digitale løsninger. 
  Våren 2025 fullfører jeg min bachelor i design og utvikling av IT-systemer ved Høgskolen i Østfold. Ved siden av studiene har jeg jobbet som IT-konsulent hos <strong>Iqonic</strong>. 
  Der har jeg fått praktisk erfaring med webutvikling i React og JavaScript, Microsoft 365-administrasjon, utvikling i Power Platform og tett kundedialog.
</p>
<p>
  Bacheloroppgaven min skriver jeg i samarbeid med konsulenthuset <strong>Evidi</strong>. Der utvikler vi et API i .NET med både REST- og GraphQL-endepunkter, satt opp i Microsoft Azure. 
  Vi jobber etter DevOps-prinsipper med CI/CD-pipelines og infrastruktur som kode via Bicep. Prosjektet undersøker hvordan GraphQL kan forbedre ytelse og utviklingstid i kundeprosjekter – 
  og gir verdifull innsikt i både moderne utviklingspraksis og samarbeid i en konsulenthverdag.
</p>
<p>
  Jeg liker å jobbe tverrfaglig, finne smarte løsninger på reelle behov og sette meg inn i ny teknologi. Gjennom studiet har jeg utviklet prosjekter med blant annet React, Kotlin, Firebase, .NET, SQL/MongoDB, 
  samt algoritmer og strukturert problemløsning i C og Java. Mitt personlige sideprosjekt <strong>CrateDigger</strong> – en webapp for musikkoppdagelse skriver jeg om her på <a href="http://joachimcv.dev" target="_blank">JoachimCV.dev</a> litt lenger opp.
</p>
<p>
Jeg har fra før en bachelor som Sosionom. Før jeg startet med IT, jobbet jeg flere år som sosionom. Denne bakgrunnen har gitt meg sterke samarbeidsevner, god forståelse for mennesker og evnen til å kommunisere tydelig – egenskaper som har vist seg uvurderlige også i utviklerrollen.
</p>
<p>
  Jeg drives av å lære, bygge løsninger som fungerer, og samarbeide med folk som brenner for det de gjør. Nå ser jeg frem til å ta neste steg i karrieren, og bidra med både teknisk kompetanse og et helhetlig blikk på brukeren og behovet.
</p>
          </div>
          <div className="skills">
            <h3>Interesser</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Hobbyer</h4>
                <ul>
                  <li>Musikkproduksjon</li>
                  <li>Formel 1</li>
                  <li>Teltur i skog og fjell (Nytt av i år er fiske)</li>
                  <li>Golf</li>
                  <li>Gaming</li>

                </ul>
              </div>
              
              
            </div>
            
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Musikk</h4>
                <ul>
                  <li>This will destroy you</li>
                  <li>Marsh</li>
                  <li>Sigur Ros</li>
                  <li>Lager også egne greier under seudonymet <strong>Jacoo</strong>, sjekk det ut!</li>
                </ul>
                <div className="arrow-down">
                  <span>↓</span>
                </div>
                <div className="spotify-player">
                  <iframe
                    src="https://open.spotify.com/embed/artist/65NrBzD3Jnf1iqbDjuUYjD"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 