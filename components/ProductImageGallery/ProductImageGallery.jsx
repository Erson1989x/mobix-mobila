import React from 'react'
import ImageGallery from '../ImageGallery/ImageGallery';

export const ProductImageGallery = ({ images }) => {
  return (
    <div className="h-full card shadow-lg p-2 rounded">
      <ImageGallery images={images} />
    </div>
  );
};

export default ProductImageGallery