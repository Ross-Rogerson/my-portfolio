import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-modal'

const BattleshipsModal = ({ battleshipsOpen, closeBattleships }) => {
  return (
    <Modal
      isOpen={battleshipsOpen}
      onRequestClose={closeBattleships}
      contentLabel="Battleships Modal"
      overlayClassName="modal-overlay"
      className="custom-modal"
    >
      <section id="battleships-display" className="modal-display">
        <div className="modal-header">
          <Link to="https://github.com/Ross-Rogerson/Battleships"><FontAwesomeIcon icon={faGithub} id="modal-github" className="white" /></Link>
          <Link to="file:///Users/rossrogerson/development/Projects/Projects/Battleships/index.html"><FontAwesomeIcon icon={faArrowUpRightFromSquare} id="modal-external" className="white" /></Link>
          <h1 className="modal-title" id="battleships-title">Toy Story Battleships</h1>
          <button className="close-button" onClick={closeBattleships}></button>
        </div>
        <section id="battleships-content" className="modal-content">
          <section id="battleships-text-content">
            <div className="group">
              <div className="group-heading">Timeframe & Group Size</div>
              <div className="group-text">1 Week | Solo</div>
            </div>
            <div id="battleships-description" className="description">
              <div className="description-heading">Description</div>
              <div className="description-text">
              In one week, I successfully developed a grid-based game, Battleships, using JavaScript, 
              HTML, and CSS. Through this project, I deepened my understanding of JavaScript and CSS, 
              and discovered my passion for project work, which has continued to fuel my career aspirations.
              </div>
            </div>
            <div id="battleships-technologies" className="technologies-content">
              <div className="description-heading">Technologies</div>
              <div className="technologies">
                <span className="modal-icon" id="js" ></span>
                <span className="modal-icon" id="html" ></span>
                <span className="modal-icon" id="css" ></span>
                <span className="modal-icon" id="gh" ></span>
              </div>
            </div>
          </section>
          <div id="battleships-image" className="modal-image"></div>
        </section>
      </section>
    </Modal>
  )
}

export default BattleshipsModal