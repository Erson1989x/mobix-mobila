'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const ProductImages = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0);

  const handleImageChange = (index) => {
    setActiveImage(index);
  };

  return (
    <div>
      <Image src={images[activeImage].src} width={400} height={300} alt="" priority={true} />
      {images.length > 1 ? (
        <div>
          {images.map((image, index) => (
            <button key={index} onClick={() => handleImageChange(index)}>
              <Image src={image.src} width={50} height={50} alt="" priority={true} />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ProductImages;