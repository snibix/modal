import PropTypes from "prop-types";
import React, { useEffect } from "react";

/**
 * Modal component to display customizable modals in your application.
 *
 * @param {Object} props - The props object.
 * @param {boolean} props.isOpen - Determines whether the modal is open or closed.
 * @param {React.ReactNode} props.children - The content to display inside the modal.
 * @param {function} props.close - Function to close the modal, triggered on escape key or backdrop click.
 * @param {...Object} args - Additional props spread to the modal container.
 *
 * @example
 * // Basic usage:
 * <Modal isOpen={true} close={() => console.log('Closed')}>
 *   <h1>Hello, Modal!</h1>
 * </Modal>
 *
 * @example
 * // Custom styling with a className:
 * <Modal isOpen={true} close={() => console.log('Closed')} className="custom-modal">
 *   <div>
 *     <h2>Custom Modal</h2>
 *     <p>This is a custom modal.</p>
 *   </div>
 * </Modal>
 */
function Modal({ isOpen, children, close, ...args }) {
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape" && isOpen) {
        close();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, close]);

  return (
    isOpen && (
      <div
        {...args}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            close();
          }
        }}
        style={{
          position: "fixed",
          inset: 0,
        }}
      >
        {children}
      </div>
    )
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool, // Whether the modal is open or closed
  children: PropTypes.any, // The content displayed inside the modal
  close: PropTypes.func.isRequired, // Function to close the modal
};

export default Modal;
