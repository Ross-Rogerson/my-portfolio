import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Socials = () => {

  return (
    <section id="socials" >
      <Link to="https://www.linkedin.com/in/ross-rogerson/"><FontAwesomeIcon icon={faLinkedin} id="linkedin" className="white" /></Link> <br />
      <Link to="https://github.com/Ross-Rogerson"><FontAwesomeIcon icon={faGithub} id="github" className="white" /></Link> <br />
      <Link to="mailto:ross.rogerson@hotmail.com"><FontAwesomeIcon icon={faEnvelope} id="email" className="white" /></Link> <br />
      <div id="line" className="white-line"></div>
    </section>
  )
}

export default Socials