"use client";
import React, { useState, useCallback } from "react";
import Image from "next/image";

const ProductImages = ({ images }) => {
  console.log("images:", images);
  const [activeImage, setActiveImage] = useState(0);

  const handleImageChange = useCallback((index) => {
    setActiveImage(index);
  }, []);

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
        />
      </div>
      {images.length > 1 ? (
        <div className="flex-1 flex items-center justify-center">
          {images.map((image, index) => (
            <button
              className="border border-2 p-1 shadow-md w-14 h-24"
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
      ) : null}
    </div>
  );
};

export default ProductImages;
