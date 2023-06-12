import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Socials from './common/Socialsbar'
import FoodstagramModal from './modals/Foodstagram'
import WanderlustModal from './modals/Wanderlust'
import BattleshipsModal from './modals/Battleships'
import HpModal from './modals/Harrypotter'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const Home = () => {
  const [foodstagramOpen, setFoodstagramOpen] = useState(false)
  const [wanderlustOpen, setWanderlustOpen] = useState(false)
  const [battleshipsOpen, setBattleshipsOpen] = useState(false)
  const [hpOpen, setHpOpen] = useState(false)

  const openFoodstagram = () => {
    setFoodstagramOpen(true)
  }

  const closeFoodstagram = () => {
    setFoodstagramOpen(false)
  }

  const openWanderlust = () => {
    setWanderlustOpen(true)
  }

  const closeWanderlust = () => {
    setWanderlustOpen(false)
  }

  const openBattleships = () => {
    setBattleshipsOpen(true)
  }

  const closeBattleships = () => {
    setBattleshipsOpen(false)
  }

  const openHp = () => {
    setHpOpen(true)
  }

  const closeHp = () => {
    setHpOpen(false)
  }

  useEffect(() => {
    if (foodstagramOpen || wanderlustOpen || battleshipsOpen || hpOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [foodstagramOpen, wanderlustOpen, battleshipsOpen, hpOpen])

  return (
    <main id="home">
      <section id="content" >
        <FoodstagramModal
          foodstagramOpen={foodstagramOpen}
          closeFoodstagram={closeFoodstagram}
        />
        <WanderlustModal
          wanderlustOpen={wanderlustOpen}
          closeWanderlust={closeWanderlust}
        />
        <BattleshipsModal
          battleshipsOpen={battleshipsOpen}
          closeBattleships={closeBattleships}
        />
        <HpModal
          hpOpen={hpOpen}
          closeHp={closeHp}
        />
        <div id="page-content">
          <div id="locked-content">
            <div id="me">
              <div id="memoji-container">
                <div id="memoji"></div>
              </div>
              <div id="heading-container">
                <h1 className="title" id="home-title">Ross Rogerson</h1>
                <div className="sub-heading" id="home-sub-heading">
                  Junior Full-Stack Engineer
                </div>
              </div>
            </div>
          </div>
          <div id="about" className="heading">About me</div>
          <div id="about-text">
            With six years of experience in the financial services industry, I have acquired a diverse skill set and experienced significant professional growth. In 2022, witnessing my flatmate&apos;s journey through a software engineering bootcamp, I gained insight into the potential of software engineering skills. Realising that my curiosity and logical mindset would be valuable assets in this field, I decided to move towards a career in the field.
            <br />
            <br />
            As a highly motivated and eager learner, I thrive on immersing myself in projects, whether working independently or as part of a team. I am now seeking opportunities to contribute to innovative projects, hone my engineering skills, and join an organisation that uses technology to move their business forward.
          </div>
          <div id="links-title">Projects</div>
          <section id="projects">
            <div className="project" id="p4" onClick={openFoodstagram}>
              <div className="homepage-link">
                Foodstagram
              </div>
            </div>
            <div className="project" id="p3" onClick={openWanderlust}>
              <div className="homepage-link">
                Wanderlust
              </div>
            </div>
            <div className="project" id="p2" onClick={openHp}>
              <div className="homepage-link">
                Harry Potter <br /> Database
              </div>
            </div>
            <div className="project" id="p1" onClick={openBattleships}>
              <div className="homepage-link">
                Toy Story <br /> Battleships Game
              </div>
            </div>
          </section>
          <section id="skills">
            <div id="skills-title">Skills</div>
            <section id="skill-icons">
              <div className="skill">
                <span className="skill-icon" id="js" ></span>
                <span className="skill-name">JavaScript</span>
              </div>
              <div className="skill">
                <span className="skill-icon" id="python" ></span>
                <span className="skill-name">Python</span>
              </div>
              <div className="skill">
                <span className="skill-icon" id="django" ></span>
                <span className="skill-name">Django</span>
              </div>
              <div className="skill">
                <span className="skill-icon" id="mongo" ></span>
                <span className="skill-name">MongoDB</span>
              </div>
              <div className="skill">
                <span className="skill-icon" id="postgresql" ></span>
                <span className="skill-name">PostgreSQL</span>
              </div>
              <div className="skill">
                <span className="skill-icon" id="react" ></span>
                <span className="skill-name">React</span>
              </div>
              <div className="skill">
                <span className="skill-icon" id="rest" ></span>
                <span className="skill-name">REST Framework</span>
              </div>
              <div className="skill">
                <span className="skill-icon" id="express" ></span>
                <span className="skill-name">Express.js</span>
              </div>
              <div className="skill">
                <span className="skill-icon" id="node" ></span>
                <span className="skill-name">Node.js</span>
              </div>
              <div className="skill">
                <span className="skill-icon" id="sass" ></span>
                <span className="skill-name">SASS</span>
              </div>
              <div className="skill">
                <span className="skill-icon" id="css" ></span>
                <span className="skill-name">CSS</span>
              </div>
              <div className="skill">
                <span className="skill-icon" id="html" ></span>
                <span className="skill-name">HTML</span>
              </div>
              <div className="skill">
                <span className="skill-icon" id="tableplus" ></span>
                <span className="skill-name">TablePlus</span>
              </div>
              <div className="skill">
                <span className="skill-icon" id="insomnia" ></span>
                <span className="skill-name">Insomnia</span>
              </div>
              <div className="skill">
                <span className="skill-icon" id="gh" ></span>
                <span className="skill-name">GitHub</span>
              </div>
              <div className="skill">
                <span className="skill-icon" id="git" ></span>
                <span className="skill-name">Git</span>
              </div>
            </section>
          </section>
          <section id="experience-section">
            <div id="experience-title">Experience & Education</div>
            <section id="experience-timeline">
              <div className="experience-point" id="ga">
                <div className="experience-date">
                  Apr &apos;19 - Oct &apos;22
                </div>
                <div className="experience-description">
                  <span className="experience-heading">General Assembly</span>
                  <span className="experience-text">
                    Twelve-week immersive course where I gained hands-on experience in building full-stack applications
                    using a range of programming languages, including but not limited to JavaScript, React.js, CSS, and
                    Python. The course featured daily stand-ups, pair coding, and four projects, as described below.
                  </span>
                </div>
              </div>
              <div className="experience-point" id="ajbtl">
                <div className="experience-date">
                  Mar &apos;18 - Apr &apos;19
                </div>
                <div className="experience-description">
                  <span className="experience-heading">Analyst | AJ Bell Asset Management</span>
                  <span className="experience-text">
                    Contributed to the management of 200+ portfolios, worth £1B+. Fostered partner relationships
                    through proactive communication. Provided written performance commentary. Analysed
                    portfolios and assessed trends. Devlivered presentations, effectively communicating complex information.
                  </span>
                </div>
              </div>
              <div className="experience-point" id="ajbsa">
                <div className="experience-date">
                  Mar &apos;17 - Mar &apos;18
                </div>
                <div className="experience-description">
                  <span className="experience-heading">Senior Middle Office Analyst | AJ Bell Securities</span>
                  <span className="experience-text">
                    Led team meetings and drove the implementation of regulatory processes, ensuring regulatory compliance.
                    Effectively managed procedures and coordinated colleagues to transfer funds between portfolios.
                    Collaborated cross-functionally with senior leadership to mitigate data risk across departments.
                  </span>
                </div>
              </div>
              <div className="experience-point" id="ajba">
                <div className="experience-date">
                  Aug &apos;16 - Mar &apos;17
                </div>
                <div className="experience-description">
                  <span className="experience-heading">Middle Office Analyst | AJ Bell Securities</span>
                  <span className="experience-text">
                    Continuously sought to enhance current processes to increase efficiency and effectiveness.
                  </span>
                </div>
              </div>
              <div className="experience-point" id="uni">
                <div className="experience-date">
                  Sep &apos;13 - Jun &apos;16
                </div>
                <div className="experience-description">
                  <span className="experience-heading">BSc Mathematics with Finance | University of Brighton</span>
                  <span className="experience-text">
                    Second Class Honours Degree
                  </span>
                </div>
              </div>
            </section>
          </section>
          <section id="interests-section">
            <div id="interests-title">Interests</div>
            <section id="interests">
              <div id="running" className="interest">
                <span className="interest-title">Running</span>
                <span className="interest-text">
                  I love to run as it gives me the opportunity to reflect on personal and professional events, while also allowing me to get a healthy dose of sunlight.
                </span>
              </div>
              <br />
              <div id="cooking" className="interest">
                <span className="interest-title">Cooking</span>
                <span className="interest-text">
                  This is an interest I developed during lockdown. I enjoy it as it allows me to experiment with delicious new recipes, such as 
                  {' '}
                  <Link to="https://ottolenghi.co.uk/recipes/spicy-mushroom-lasagne-flavour-pg-228" id="recipe-link">this
                    mushroom lasagne
                  </Link>
                  {' '}
                  by Ottolenghi.
                </span>
              </div>
              <br />
              <div id="football" className="interest">
                <span className="interest-title">Football</span>
                <span className="interest-text">
                  This is an interest I have had throughout my life. I love football for the way it can serve as a common interest between myself and people from all sorts of backgrounds.
                </span>
              </div>
            </section>
          </section>
        </div>
        <Socials />
      </section>
    </main>
  )
}

export default Home