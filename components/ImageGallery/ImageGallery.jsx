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
    <div className='flex flex-col justify-center items-center h-full w-full rounded shadow bg-white p-2'>
      <div className='h-96 md:w-96'>
      <Image src={images[activeImage].src} width={400} height={300} alt="" priority={true} className="w-full h-full  object-fit" />
      </div>
      {images.length > 1 ? (
        <div className='flex-1 h-16'>
          {images.map((image, index) => (
            <button className='border border-2 p-1 shadow-md w-14 h-full' key={index} onClick={() => handleImageChange(index)}>
              <Image src={image.src} width={56} height={96} alt="" priority={true} className="w-full h-full object-cover object-fit" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ProductImages;