import React from 'react'

const PriceVariantsCanapele = ({ product }) => {
    console.log(product);
    return (
      <>
        {product.prices && product.prices.bonel && (
          <p className="mb-4 font-bold text-xl p-2">
           Pretul cu Bonel:{" "}
            <span className="text-red-600 font-bold text-xl">
            {product.prices.bonel}
            </span>{" "}
            - Lei
          </p>
        )}
        {product.prices && product.prices.memory && (
          <p className="mb-4 font-bold text-xl p-2">
           Pretul cu Memory:{" "}
            <span className="text-red-600 font-bold text-xl">
            {product.prices.memory}
            </span>{" "}
            - Lei
          </p>
        )}
      </>
    );
  };

export default PriceVariantsCanapele