import React from 'react'

const PriceVariantsCanapele = ({ product }) => {
    console.log(product);
    return (
      <>
        {product.prices && product.prices.bonel && (
          <p className="mb-4 shadow p-2">
            Bonel:{" "}
            <span className="text-red-600 font-bold shadow p-2 animate-pulse text-xl">
              {product.prices.bonel}
            </span>{" "}
            - RON
          </p>
        )}
        {product.prices && product.prices.memory && (
          <p className="mb-4 shadow p-2">
            Memory:{" "}
            <span className="text-red-600 font-bold shadow p-2 animate-pulse text-xl">
              {product.prices.memory}
            </span>{" "}
            - RON
          </p>
        )}
      </>
    );
  };

export default PriceVariantsCanapele