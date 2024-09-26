import React from "react";

const ProductColor = ({ product }) => {
  return (
    <p className="mb-4 p-2 font-bold border-b-2 border-gray-200 mt-4">
      <span className="">Culoare:</span> - {product.corpColor}
    </p>
  );
};

export default ProductColor;
