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
        <section id="wanderlust-content" className="modal-content">
          <section id="wanderlust-text-content">
            <div className="group">
              <div className="group-heading">Timeframe & Group Size</div>
              <div className="group-text">10 Days | 3 People</div>
            </div>
            <div id="wanderlust-description" className="description">
              <div className="description-heading">Description</div>
              <div className="description-text">
                Wanderlust is a MERN stack application with full CRUD functionality. It is designed to help users find holiday destinations based on the temperature using a user-friendly interface.
                Eager to learn, I made sure I played an integral role in all aspects of the project. This project provided me with valuable experience in React and MongoDB, as well as Git&apos;s version control and branching practices.
              </div>
            </div>
            <div id="wanderlust-technologies" className="technologies-content">
              <div className="description-heading">Technologies</div>
              <div className="technologies">
                <span className="modal-icon" id="js" ></span>
                <span className="modal-icon" id="mongo" ></span>
                <span className="modal-icon" id="react" ></span>
                <span className="modal-icon" id="express" ></span>
                <span className="modal-icon" id="node" ></span>
                <span className="modal-icon" id="sass" ></span>
                <span className="modal-icon" id="insomnia" ></span>
                <span className="modal-icon" id="gh" ></span>
              </div>
            </div>
          </section>
          <div id="wanderlust-image" className="modal-image"></div>
        </section>
      </section>
    </Modal>
  )
}

export default WanderlustModal