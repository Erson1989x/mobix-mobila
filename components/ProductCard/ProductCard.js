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
          <h2 className="text-lg font-bold text-center mb-2">{product.name}</h2>
          <ProductCardImage product={product} />
          <button
            className="flex justify-center align-center text-center cursor-pointer border border-0 p-2 rounded text-black shadow-md bg-gray-100 hover:bg-gray-200"
            onClick={() => (window.location.href = `/products/${product.slug}`)}
          >
            <p className="text-center text-black">Pentru Detalii click AICI</p>
          </button>
          <p className="text-center font-bold text-red-600 mt-2">
            {product.price} - RON
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
