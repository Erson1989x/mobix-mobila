'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const ProductImages = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0);

  const handleImageChange = (index) => {
    setActiveImage(index);
  };

  if (Array.isArray(images)) {
    return (
      <div>
        <Image src={images[activeImage]} width={400} height={300} alt="" />
        {images.length > 1 ? (
          <div>
            {images.map((image, index) => (
              <button key={index} onClick={() => handleImageChange(index)}>
                <Image src={image} width={50} height={50} alt="" />
              </button>
            ))}
          </div>
        ) : null}
      </div>
    );
  } else {
    return (
      <div>
        <Image src={images} width={400} height={300} alt="" />
      </div>
    );
  }
};
export default ProductImages;