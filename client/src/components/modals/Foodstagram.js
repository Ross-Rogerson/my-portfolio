// import React, { useState } from 'react'
import Modal from 'react-modal'

const FoodstagramModal = ({ foodstagramOpen, closeFoodstagram }) => {
  return (
    <Modal
      isOpen={foodstagramOpen}
      onRequestClose={closeFoodstagram}
      contentLabel="Foodstagram Modal"
      overlayClassName="modal-overlay"
      className="food-modal"
    >
      <section id="foodstagram-display" >
        <div >
          <div className="modal-header">
            <div id="me">
              <h1 className="modal-title" id="foodstagram-title">Foodstagram</h1>
              <div className="sub-heading" id="foodstagram-sub-heading">
              </div>
            </div>
          </div>
          <section id="foodstragram-content">
            <div id="foodstagram-description">
              Foodstagram allows users to browse recipes on the feed, add recipe ingredients to the shopping list, and search for recipes in the fridge based on selected ingredients. Registered and logged-in users can post recipes, as well as edit, delete, and like recipes uploaded by others.
            </div>
            <div id="foodstgram-image"></div>
          </section>
        </div>
      </section>
      <button onClick={closeFoodstagram}>Close Modal</button>
    </Modal>
  )
}

export default FoodstagramModal