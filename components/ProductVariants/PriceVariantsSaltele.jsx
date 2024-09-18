import React from "react";

const PriceVariantsSaltele = ({ product }) => {
  return (
    <>
      {product.prices.variantaOne && (
        <p className="mb-4 shadow p-2">
          Varianta 90 x 200:{" "}
          <span className="text-red-600 font-bold shadow p-2 text-xl">
            {product.prices.variantaOne}
          </span>{" "}
          - RON
        </p>
      )}
      {product.prices.variantaOneTwo && (
        <p className="mb-4 shadow p-2">
          Varianta 120 x 200:{" "}
          <span className="text-red-600 font-bold shadow p-2 text-xl">
            {product.prices.variantaOneTwo}
          </span>{" "}
          - RON
        </p>
      )}
      {product.prices.variantaTwo && (
        <p className="mb-4 shadow p-2">
          Varianta 140 x 200:{" "}
          <span className="text-red-600 font-bold shadow p-2 text-xl">
            {product.prices.variantaTwo}
          </span>{" "}
          - RON
        </p>
      )}
      {product.prices.variantaThree && (
        <p className="mb-4 shadow p-2">
          Varianta 160 x 200:{" "}
          <span className="text-red-600 font-bold animate-pulse text-xl">
            {product.prices.variantaThree}
          </span>{" "}
          - RON
        </p>
      )}
    </>
  );
};

export default PriceVariantsSaltele;
