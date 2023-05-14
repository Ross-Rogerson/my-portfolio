import Modal from 'react-modal'

const WanderlustModal = ({ wanderlustOpen, closeWanderlust }) => {
  return (
    <Modal
      isOpen={wanderlustOpen}
      onRequestClose={closeWanderlust}
      contentLabel="Wanderlust Modal"
      overlayClassName="modal-overlay"
      className="custom-modal"
    >
      <section id="wanderlust-display" className="modal-display">
        <div className="modal-header">
          <h1 className="modal-title" id="wanderlust-title">Wanderlust</h1>
          <button className="close-button" onClick={closeWanderlust}></button>
        </div>
        <section id="foodstragram-content" className="modal-content">
          <section id="wanderlust-text-content">
            <div className="group">
              <div className="group-heading">Timeframe & Group Size</div>
              <div className="group-text">12 Days | Solo</div>
            </div>
            <div id="wanderlust-description" className="description">
              <div className="description-heading">Description</div>
              <div className="description-text">
                wanderlust is Instagram, for food lovers. The app was built using PostgreSQL database, Django web framework, REST API, and React. wanderlust includes several impressive features, including the ability to add ingredients from various recipes to a shopping list and search recipes based on user-selected ingredients. The project was a great opportunity for me to improve my knowledge of SQL databases and practise my Python skills. I also gained valuable experience in planning and prioritisation while working under tight deadlines.
              </div>
            </div>
            <div id="wanderlust-technologies" className="technologies-content">
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
          <div id="foodstgram-image" className="modal-image"></div>
        </section>
      </section>
    </Modal>
  )
}

export default WanderlustModal