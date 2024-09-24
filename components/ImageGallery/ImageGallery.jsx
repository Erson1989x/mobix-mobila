"use client";
import React, { useState, useCallback } from "react";
import Image from "next/image";
import Modal from "../ImageGalleryModal/Modal";

const ProductImages = ({ images }) => {
  console.log("images:", images);
  const [activeImage, setActiveImage] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  


  const handleImageChange = (newIndex) => {
    setCurrentImage(newIndex);
  };

  const handleImageClick = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
    } else {
      setIsModalOpen(true);
      const isMobile = window.innerWidth <= 640;
      setZoomLevel(isMobile ? 1.2 : 1.7);
    }
  };

  return (
    <div className="flex flex-col w-full h-full rounded shadow bg-white p-2">
      <div className="max-h-96">
        <Image
          src={images[activeImage].src}
          width={500}
          height={500}
          alt=""
          priority={true}
          className="w-full h-72 md:h-full object-contain"
          onClick={handleImageClick}
        />
      </div>
      {images.length > 1 ? (
        <div className="flex-1 flex items-center justify-center overflow-x-auto">
          <div className="flex flex-nowrap">
            {images.map((image, index) => (
              <button
                className={`border border-2 p-1 shadow-md w-12 h-24 ${
                  index > 0 ? "mr-1" : "ml-0"
                }`}
                key={index}
                onClick={() => handleImageChange(index)}
              >
                <Image
                  src={image.src}
                  width={56}
                  height={96}
                  alt=""
                  priority={true}
                  className="w-full h-full object-cover object-fit"
                />
              </button>
            ))}
          </div>
        </div>
      ) : null}
      {isModalOpen && (
       <Modal
       images={images}
       currentImage={activeImage}
       onChangeImage={(newImage) => setActiveImage(newImage)}
       onClose={() => setIsModalOpen(false)}
     >
       <div className="flex flex-col items-center justify-center h-full">
         <Image
           src={images[activeImage].src}
           width={800}
           height={600}
           alt=""
           priority={true}
           className="object-contain md:w-96 md:h-96"
           style={{ transform: `scale(${zoomLevel})` }}
         />
       </div>
     </Modal>
      )}
    </div>
  );
};

export default ProductImages;
