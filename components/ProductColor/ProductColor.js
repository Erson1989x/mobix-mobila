import React from "react";

const ProductColor = ({ product }) => {
  return (
    <p className="mb-4 font-bold border rounded shadow p-2 border-gray-300 bg-white">
      Culoare: Corp - {product.corpColor}, Față - {product.faceColor}
    </p>
  );
};

export default ProductColor;
