import React from "react";

const Modal = ({ children, onClose }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="p-4 rounded shadow-md">
        {children}
      </div>
    </div>
  );
};

export default Modal;