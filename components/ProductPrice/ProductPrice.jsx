import React from "react";

const ProductPrice = ({ product }) => {
  return (
    <>
    <p className="mb-4 text-xl text-red-600 font-bold p-2">
      <span className="text-black">Pret: </span>
      {product.price} - Lei
    </p>
    </>
  );
};

export default ProductPrice;
