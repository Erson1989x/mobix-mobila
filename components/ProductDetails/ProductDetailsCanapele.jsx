import React from "react";
import PriceVariantsCanapele from "../ProductVariants/PriceVariantsCanapele";
import ProductDimensions from "../ProductDimensions/ProductDimensions";
import ProductPrice from "../ProductPrice/ProductPrice";

const ProductDetailsCanapele = ({ product }) => {

  return (
    <div className="card shadow-lg p-2 rounded">
      <h1 className="text-2xl font-bold mb-2 p-2 text-center">
        {product.name}
      </h1>
      {product.prices && product.prices.hasOwnProperty("bonel") ? (
        <PriceVariantsCanapele product={product} />
      ) : (
        <ProductPrice product={product} />
      )}
      <div className="mb-4 overflow-y-auto border-b-2 border-gray-200 max-h-52">
        <span className=" text-xl font-bold underline p-2">Descriere:</span>
        {product.description.split(/\n/).map((line, index) => (
          <p className="mb-2 p-2" key={index}>
            {line.trim()}
          </p>
        ))}
      </div>
      <ProductDimensions product={product} />
    </div>
  );
};

export default ProductDetailsCanapele;
