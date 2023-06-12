import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-modal'

const FoodstagramModal = ({ foodstagramOpen, closeFoodstagram }) => {
  return (
    <Modal
      isOpen={foodstagramOpen}
      onRequestClose={closeFoodstagram}
      contentLabel="Foodstagram Modal"
      overlayClassName="modal-overlay"
      className="custom-modal"
    >
      <section id="foodstagram-display" className="modal-display">
        <div className="modal-header">
          <a href="https://github.com/Ross-Rogerson/recipe-app" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} id="modal-github" className="white" />
          </a>
          <a href="https://ross-recipe-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} id="modal-external" className="white" />
          </a>
          <h1 className="modal-title" id="foodstagram-title">Foodstagram</h1>
          <button className="close-button" onClick={closeFoodstagram}></button>
        </div>
        <section id="foodstagram-content" className="modal-content">
          <section id="foodstagram-text-content">
            <div className="group">
              <div className="group-heading">Timeframe & Group Size</div>
              <div className="group-text">12 Days | Solo</div>
            </div>
            <div id="foodstagram-description" className="description">
              <div className="description-heading">Description</div>
              <div className="description-text">
                Foodstagram is Instagram, for food lovers. The app was built using PostgreSQL database, Django web framework, REST API, and React. Foodstagram includes several impressive features, including the ability to add ingredients from various recipes to a shopping list and search recipes based on user-selected ingredients. The project was a great opportunity for me to improve my knowledge of SQL databases and practise my Python skills. I also gained valuable experience in planning and prioritisation while working under tight deadlines.
              </div>
            </div>
            <div id="foodstagram-technologies" className="technologies-content">
              <div className="description-heading">Technologies</div>
              <div className="technologies">
                <span className="modal-icon" id="js" ></span>
                <span className="modal-icon" id="python" ></span>
                <span className="modal-icon" id="react" ></span>
                <span className="modal-icon" id="django" ></span>
                <span id="modal-rest">
                  <span className="modal-icon" id="rest" ></span>
                </span>
                <span className="modal-icon" id="postgresql" ></span>
                <span className="modal-icon" id="sass" ></span>
                <span className="modal-icon" id="tableplus" ></span>
                <span className="modal-icon" id="insomnia" ></span>
                <span className="modal-icon" id="gh" ></span>
              </div>
            </div>
          </section>
          <div id="foodstagram-image" className="modal-image"></div>
        </section>
      </section>
    </Modal>
  )
}

export default FoodstagramModal