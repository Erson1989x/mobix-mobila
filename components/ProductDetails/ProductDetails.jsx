import React from "react";
import ProductVariants from "../ProductVariants/ProductVariants";
import ProductColor from "../ProductColor/ProductColor";
import ProductDimensions from "../ProductDimensions/ProductDimensions";
import ProductPrice from "../ProductPrice/ProductPrice";

const ProductDetails = ({ product }) => {
  return (
    <div className="card shadow-lg p-2 rounded">
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <div className="mb-4 border rounded shadow p-2 border-gray-300 bg-white overflow-y-auto max-h-52">
        <span className="text-indigo-900 text-xl font-bold underline">Descriere:</span>
      {product.description.split(/[-;]/).map((line, index) => (
        <p className="mb-2 font-semibold" key={index}>
          {line.trim()}
        </p>
      ))}
      </div>
      <ProductVariants product={product} />
      <ProductPrice product={product} />
      <ProductDimensions product={product} />
      <ProductColor product={product} />
    </div>
  );
};

export default ProductDetails;
