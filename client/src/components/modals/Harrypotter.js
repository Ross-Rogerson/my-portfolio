import Modal from 'react-modal'

const HpModal = ({ hpOpen, closeHp }) => {
  return (
    <Modal
      isOpen={hpOpen}
      onRequestClose={closeHp}
      contentLabel="hp Modal"
      overlayClassName="modal-overlay"
      className="custom-modal"
    >
      <section id="hp-display" className="modal-display">
        <div className="modal-header">
          <h1 className="modal-title" id="hp-title">Harry Potter Database</h1>
          <button className="close-button" onClick={closeHp}></button>
        </div>
        <section id="hp-content" className="modal-content">
          <section id="hp-text-content">
            <div className="group">
              <div className="group-heading">Timeframe & Group Size</div>
              <div className="group-text">2 Days | Pair</div>
            </div>
            <div id="hp-description" className="description">
              <div className="description-heading">Description</div>
              <div className="description-text">
                During this project, my colleague and I successfully built a 
                React application in two days that efficiently consumed a third-party 
                API. The app displayed information about Harry Potter characters and 
                movies. The project helped to enhance my understanding of React 
                development and evaluating third-party API usability.
              </div>
            </div>
            <div id="hp-technologies" className="technologies-content">
              <div className="description-heading">Technologies</div>
              <div className="technologies">
                <span className="modal-icon" id="js" ></span>
                <span className="modal-icon" id="react" ></span>
                <span className="modal-icon" id="node" ></span>
                <span className="modal-icon" id="css" ></span>
                <span className="modal-icon" id="gh" ></span>
              </div>
            </div>
          </section>
          <div id="hp-image" className="modal-image"></div>
        </section>
      </section>
    </Modal>
  )
}

export default HpModal