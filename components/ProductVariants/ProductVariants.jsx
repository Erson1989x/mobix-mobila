import React from 'react'

const ProductVariants = ({ product }) => {
    if (product.prices && product.prices.cuSomiera && product.prices.somieraRabatabila) {
        return (
          <p className="mb-4 p-2 text-xl font-bold">
            Varianta cu somiera:{" "}
            <span className="text-red-600 font-bold text-xl p-2">
              {product.prices.cuSomiera}
            </span>{" "}
            -<span className="text-red-600 font-bold text-xl p-2">Lei </span> <br /> Somiera rabatabila:{" "}
            <span className="text-red-600 font-bold text-xl p-2">
              {product.prices.somieraRabatabila}
            </span>{" "}
            -<span className="text-red-600 font-bold text-xl p-2">Lei </span>
          </p>
        );
      }
      return null;
    };
export default ProductVariants