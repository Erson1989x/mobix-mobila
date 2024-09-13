import React from "react";

const ProductDimensions = ({ product }) => {
  return (
    <p className="mb-4 font-bold border rounded shadow p-2 border-gray-300 bg-white">
      Dimensiuni:{" "}
      {[
        product.dimensiuni?.latime && `Lățime: ${product.dimensiuni.latime} cm`,
        product.dimensiuni?.lungime &&
          `Lungime: ${product.dimensiuni.lungime} cm`,
        product.dimensiuni?.inaltime &&
          `Înălțime: ${product.dimensiuni.inaltime} cm`,
        product.dimensiuni?.adancime &&
          `Adâncime: ${product.dimensiuni.adancime} cm`,
      ]
        .filter((dim) => dim)
        .join(" x ")}
    </p>
  );
};

export default ProductDimensions;
