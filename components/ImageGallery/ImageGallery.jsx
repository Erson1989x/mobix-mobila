'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const ProductImages = ({ images }) => {
  console.log('images:', images);
  const [activeImage, setActiveImage] = useState(0);

  const handleImageChange = (index) => {
    setActiveImage(index);
  };

  return (
    <div className='h-screen/2 w-full'>
      <Image src={images[activeImage].src} width={400} height={300} alt="" priority={true} className="w-full h-full object-cover object-fit" />
      {images.length > 1 ? (
        <div>
          {images.map((image, index) => (
            <button className='border border-0 p-2 rounded shadow-lg w-14 h-24' key={index} onClick={() => handleImageChange(index)}>
              <Image src={image.src} width={56} height={96} alt="" priority={true} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ProductImages;