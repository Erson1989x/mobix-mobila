import React from "react";
import Link from "next/link";
import ProductCardImage from "./ProductCardImage";

const ProductCard = ({ productsToDisplay }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-8">
      {productsToDisplay.map((product) => (
        <div key={product.name} className="bg-white rounded shadow-md p-4">
          <h2 className="text-lg font-bold text-center mb-2">{product.name}</h2>
          <div className="flex justify-center mb-2">
            <Link href={`/products/${product.slug}`} key={product.slug}>
              <ProductCardImage product={product} />
            </Link>
          </div>
          <p className="text-center text-gray-600 mb-2">Pentru Detalii click pe poza</p>
          <p className="text-center text-red-600">{product.price} - RON</p>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
