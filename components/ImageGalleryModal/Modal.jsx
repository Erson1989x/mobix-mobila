import React from "react";

const Modal = ({ children, onClose, images, currentImage, onChangeImage }) => {
  const handleNextImage = () => {
    onChangeImage(Math.min(currentImage + 1, images.length - 1));
  };

  const handlePrevImage = () => {
    onChangeImage(Math.max(currentImage - 1, 0));
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-100 flex items-center justify-center">
      <div className="p-4 rounded shadow-md relative">
        <button
          className="absolute top-0 right-1 z-20"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
        <div className="flex justify-between">
          <button
            className="bg-gray-200 hover:bg-gray-400 text-black shadow-md font-bold py-2 px-4 rounded z-10"
            onClick={handlePrevImage}
          >
            Prev
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-400 text-black shadow-md font-bold py-2 px-4 rounded z-10"
            onClick={handleNextImage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
