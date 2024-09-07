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
    <div className=' w-full rounded shadow'>
      <Image src={images[activeImage].src} width={400} height={300} alt="" priority={true} className="w-full h-full object-cover object-fit" style={{ objectFit: 'contain' }} />
      {images.length > 1 ? (
        <div>
          {images.map((image, index) => (
            <button className='border border-2 p-1 shadow-md w-14 h-24' key={index} onClick={() => handleImageChange(index)}>
              <Image src={image.src} width={56} height={96} alt="" priority={true} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ProductImages;