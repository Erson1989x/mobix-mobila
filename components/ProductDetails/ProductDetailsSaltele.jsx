import React from "react";
import PriceVariantsSaltele from "../ProductVariants/PriceVariantsSaltele";

const ProductDetailsSaltele = ({ product }) => {
  return (
    <div className="card shadow-lg p-2 rounded">
      <h1 className="text-2xl font-bold mb-2 p-2 text-center">{product.name}</h1>
      <PriceVariantsSaltele product={product} />
      <div className="mb-4 overflow-y-auto border rounded shadow p-2 border-gray-300 bg-white max-h-52">
      <span className="text-xl font-bold underline p-2">
          Descriere:
        </span>
        {product.description.split(/\n/).map((line, index) => (
          <p className="mb-2 p-2" key={index}>
            {line.trim()}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsSaltele;
