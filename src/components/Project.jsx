import { motion } from 'framer-motion'

const Project = () => {
  const techStack = [
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'Spotify API',
    'Discogs API'
  ]

  return (
    <motion.div
      className="project"
      data-aos="fade-up"
    >
      <h2>Discogify</h2>
      
      <div className="project-content">
        <div className="project-description">
          <h3>About the Project</h3>
          <p>
            Discogify is a web application that bridges the gap between physical music collections
            and digital streaming. It allows users to sync their Discogs vinyl collection with
            their Spotify playlists, creating a seamless experience between analog and digital
            music consumption.
          </p>

          <h3>My Role</h3>
          <p>
            As the lead developer, I was responsible for:
          </p>
          <ul>
            <li>Designing and implementing the frontend architecture</li>
            <li>Integrating the Discogs and Spotify APIs</li>
            <li>Creating the backend API endpoints</li>
            <li>Managing the database structure</li>
            <li>Implementing user authentication</li>
          </ul>

          <h3>Technical Stack</h3>
          <div className="tech-stack">
            {techStack.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>

          <h3>Key Learnings</h3>
          <ul>
            <li>Advanced API integration and data synchronization</li>
            <li>Complex state management in React</li>
            <li>Secure authentication flows</li>
            <li>Database optimization for large datasets</li>
            <li>User experience design for music enthusiasts</li>
          </ul>
        </div>

        <div className="project-images">
          <motion.img
            src="/placeholder-image-1.jpg"
            alt="Discogify Dashboard"
            className="project-image"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src="/placeholder-image-2.jpg"
            alt="Discogify Collection View"
            className="project-image"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default Project 