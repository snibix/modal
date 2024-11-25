import { useState } from "react";
import "./App.css";
import closeModal from "./assets/close.svg";
import Modal from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal
        className="modal-backdrop"
        isOpen={isOpen}
        close={() => setIsOpen(false)}
      >
        <div className="modal-content">
          <h2 className="title-modal">Exemple de modal</h2>
          <button
            className="button-close-modal"
            onClick={() => setIsOpen(false)}
          >
            <img className="close-modal" src={closeModal} alt="close modal" />
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
