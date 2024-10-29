import React from "react";
import ProductCardImage from "./ProductCardImage";

const ProductCard = ({ productsToDisplay }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-8">
      {productsToDisplay.map((product) => (
        <div
          key={product.name}
          className="bg-white rounded shadow-md p-4 flex flex-col"
        >
          <h2 className="text-lg font-bold text-center mb-2 dark:text-black">{product.name}</h2>
          <button
            className="flex justify-center align-center cursor-pointer"
            onClick={() => (window.location.href = `/products/${product.slug}`)}
          >
          <ProductCardImage product={product} />
          </button>
          <p className="text-center font-bold text-red-600 mt-4">
            {product.price} - RON
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
