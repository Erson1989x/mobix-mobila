import React from 'react'
import ProductImageGallery from '../ProductImageGallery/ProductImageGallery'




const ProductLayout = ({ product, children, }) => {

  return (
    <div className="md:p-8 pt-16 md:pt-20">
      <div className="min-h-full p-4 md:p-8 pt-16 md:pt-20 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <ProductImageGallery images={product.images} />
        {children}
      </div>
    </div>
  );
};


export default ProductLayout