import React from "react";

const ProductColor = ({ product }) => {
  return (
    <p className="mb-4 font-bold border rounded shadow p-2 border-gray-300 bg-white">
      <span className="text-green-600">Culoare:</span> - {product.corpColor}
    </p>
  );
};

export default ProductColor;
