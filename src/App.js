import React from 'react';
import Modal from 'components/modal/index';

function App() {

 ///State and setState are opened model or closed
  const [showModal, setShowModal] = React.useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <React.Fragment>
      <div className="app__container">
        <button onClick={openModal} className='app__button' >I'm a modal</button>
        <Modal
          isOpen={showModal}
          onClose={setShowModal}
          img="https://raw.githubusercontent.com/briancodex/react-modal-v1/main/src/components/modal.jpg"
        >
          <div>
            <h1>Are you ready?</h1>
            <p>Get exclusive access to our next launch.</p>
            <button>Join Now</button>
          </div>
        </Modal>
      </div>
    </React.Fragment>
  );
}

export default App;
