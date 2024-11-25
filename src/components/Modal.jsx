import PropTypes from "prop-types";
import React, { useEffect } from "react";

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
  isOpen: PropTypes.bool,
  children: PropTypes.any,
  close: PropTypes.func.isRequired,
};

export default Modal;
