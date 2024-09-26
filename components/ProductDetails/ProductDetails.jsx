import React from "react";
import ProductVariants from "../ProductVariants/ProductVariants";
import ProductColor from "../ProductColor/ProductColor";
import ProductDimensions from "../ProductDimensions/ProductDimensions";
import ProductPrice from "../ProductPrice/ProductPrice";

const ProductDetails = ({ product }) => {
  return (
    <div className="card shadow-lg p-2 rounded">
      <h1 className="text-2xl font-bold mb-2 p-2 text-center">{product.name}</h1>
      <ProductPrice product={product} />
      <ProductVariants product={product} />
      <div className="mb-4 border-b-2 border-gray-200 overflow-y-auto max-h-52">
        <span className=" text-xl font-bold underline p-2">
          Descriere:
        </span>
        <ul>
          {product.description.split("\n").map((line, index) => (
            <li className="mb-2 p-2" key={index}>{line.trim()}</li>
          ))}
        </ul>
      </div>
      <ProductDimensions product={product} />
      <ProductColor product={product} />
    </div>
  );
};

export default ProductDetails;
