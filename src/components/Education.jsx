import { motion } from 'framer-motion'

const Education = () => {
  const technicalSkills = [
    {
      category: 'Programming Languages',
      skills: ['JavaScript', 'Python', 'Java', 'C++', 'SQL']
    },
    {
      category: 'Web Development',
      skills: ['HTML5', 'CSS3', 'React', 'Node.js', 'Express', 'RESTful APIs']
    },
    {
      category: 'Database Systems',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Database Design']
    },
    {
      category: 'Development Tools',
      skills: ['Git', 'Docker', 'VS Code', 'Postman', 'Jira']
    },
    {
      category: 'Problem Solving',
      skills: ['Algorithms', 'Data Structures', 'System Design', 'Debugging']
    }
  ]

  return (
    <motion.div
      className="education"
      data-aos="fade-up"
    >
      <h2>Bachelor's in Informatics</h2>
      
      <div className="education-content">
        <div className="education-overview">
          <h3>Key Areas of Study</h3>
          <ul>
            <li>Software Engineering and Development</li>
            <li>Database Systems and Management</li>
            <li>Web Technologies and Applications</li>
            <li>System Architecture and Design</li>
            <li>Data Structures and Algorithms</li>
            <li>User Interface Design and Experience</li>
          </ul>
        </div>

        <div className="technical-skills">
          <h3>Technical Competencies</h3>
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
          <h3>Academic Achievements</h3>
          <ul>
            <li>Graduated with distinction in Software Development</li>
            <li>Completed advanced coursework in Web Technologies</li>
            <li>Participated in multiple hackathons and coding competitions</li>
            <li>Contributed to open-source projects during studies</li>
            <li>Presented research on modern web development practices</li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default Education 