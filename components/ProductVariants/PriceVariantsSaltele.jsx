import React from "react";

const PriceVariantsSaltele = ({ product }) => {
  return (
    <>
      {product.prices.variantaOne && (
        <p className="mb-4 text-xl font-bold p-2">
          Varianta 90 x 200:{" "}
          <span className="text-red-600 font-bold text-xl">
          {product.prices.variantaOne}
          </span>{" "}
          -<span className="text-red-600 font-bold text-xl">Lei</span>
        </p>
      )}
      {product.prices.variantaOneTwo && (
        <p className="mb-4 text-xl font-bold p-2">
          Varianta 120 x 200:{" "}
          <span className="text-red-600 font-bold text-xl">
          {product.prices.variantaOneTwo}
          </span>{" "}
          -<span className="text-red-600 font-bold text-xl">Lei</span>
        </p>
      )}
      {product.prices.variantaTwo && (
        <p className="mb-4 text-xl font-bold p-2">
          Varianta 140 x 200:{" "}
          <span className="text-red-600 font-bold text-xl">
          {product.prices.variantaTwo}
          </span>{" "}
          -<span className="text-red-600 font-bold text-xl">Lei</span>
        </p>
      )}
      {product.prices.variantaThree && (
        <p className="mb-4 text-xl font-bold p-2">
          Varianta 160 x 200:{" "}
          <span className="text-red-600 font-bold text-xl">
          {product.prices.variantaThree}
          </span>{" "}
          -<span className="text-red-600 font-bold text-xl">Lei</span>
        </p>
      )}
    </>
  );
};

export default PriceVariantsSaltele;
