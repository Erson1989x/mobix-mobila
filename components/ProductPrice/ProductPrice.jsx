import React from "react";

const ProductPrice = ({ product }) => {
  return (
    <p className="mb-4 text-2xl  text-red-600 font-bold text-center p-2 shadow-md animate-pulse">
      {product.price} - RON
    </p>
  );
};

export default ProductPrice;
