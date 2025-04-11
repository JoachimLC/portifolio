import { motion } from 'framer-motion'

const Experience = () => {
  return (
    <motion.div
      className="experience"
      data-aos="fade-up"
    >
      <h2>IT Consultant Experience</h2>
      
      <div className="experience-content">
        <div className="experience-details">
          <h3>Part-time IT Consultant</h3>
          <p className="experience-period">2022 - Present</p>

          <h4>Key Responsibilities</h4>
          <ul>
            <li>Developed and maintained web applications for various clients</li>
            <li>Implemented responsive designs and optimized user experiences</li>
            <li>Collaborated with cross-functional teams on project planning and execution</li>
            <li>Provided technical support and troubleshooting for client systems</li>
            <li>Conducted code reviews and implemented best practices</li>
          </ul>

          <h4>Technical Skills Applied</h4>
          <ul>
            <li>Frontend development with React and modern JavaScript</li>
            <li>Backend development with Node.js and Express</li>
            <li>Database design and management</li>
            <li>API development and integration</li>
            <li>Version control with Git</li>
          </ul>

          <h4>Professional Growth</h4>
          <p>
            This role has significantly enhanced my ability to:
          </p>
          <ul>
            <li>Communicate effectively with both technical and non-technical stakeholders</li>
            <li>Manage multiple projects and deadlines efficiently</li>
            <li>Adapt to different project requirements and client needs</li>
            <li>Solve complex technical problems in real-world scenarios</li>
            <li>Work collaboratively in agile development environments</li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default Experience 