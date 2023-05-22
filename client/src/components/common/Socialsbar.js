import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Socials = () => {

  return (
    <section id="socials" >
      <a href="https://www.linkedin.com/in/ross-rogerson/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} id="linkedin" className="white" />
      </a> 

      <br />

      <a href="https://github.com/Ross-Rogerson" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} id="github" className="white" />
      </a> 
      
      <br />

      <a href="mailto:ross.rogerson@hotmail.com">
        <FontAwesomeIcon icon={faEnvelope} id="email" className="white" />
      </a> 
      
      <br />

      <div id="line" className="white-line"></div>
    </section>
  )
}

export default Socials