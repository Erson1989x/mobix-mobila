import React from 'react'

const ProductVariants = ({ product }) => {
    if (product.prices && product.prices.cuSomiera && product.prices.somieraRabatabila) {
        return (
          <p className="mb-4">
            Varianta cu somiera:{" "}
            <span className="text-red-600 font-bold">
              {product.prices.cuSomiera}
            </span>{" "}
            - RON Somiera rabatabila:{" "}
            <span className="text-red-600 font-bold">
              {product.prices.somieraRabatabila}
            </span>{" "}
            - RON
          </p>
        );
      }
      return null;
    };
export default ProductVariants