import React from "react";

const Modal = ({ children, onClose, images, currentImage, onChangeImage }) => {
  const handleNextImage = () => {
    onChangeImage(Math.min(currentImage + 1, images.length - 1));
  };

  const handlePrevImage = () => {
    onChangeImage(Math.max(currentImage - 1, 0));
  };

  return (
    <div className="w-full h-full bg bg-black bg-opacity-80 fixed top-0 left-0">
      <div className="w-80 h-96 md:w-3/4 md:h-3/4 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-black shadow-lg rounded">
        <button
          className="absolute top-0 right-0 p-4 hover:text-gray-500 text-5xl"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex justify-center items-center h-full">
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4 hover:text-gray-500 text-5xl"
            onClick={handlePrevImage}
          >
            &larr;
          </button>
          {children}
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4 hover:text-gray-500 text-5xl"
            onClick={handleNextImage}
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
