import React from "react";

const ProductDimensions = ({ product }) => {
  return (
    <p className="mb-4 p-2 font-bold border-b-2 border-gray-200 ">
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
