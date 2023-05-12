import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Socials = () => {

  return (
    <section id="socials" >
      <Link><FontAwesomeIcon icon={faLinkedin} id="linkedin" className="white" /></Link> <br />
      <Link><FontAwesomeIcon icon={faGithub} id="github" className="white" /></Link> <br />
      <Link><FontAwesomeIcon icon={faEnvelope} id="email" className="white" /></Link> <br />
      <div id="line" className="white-line"></div>
    </section>
  )
}

export default Socials