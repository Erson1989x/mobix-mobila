import React from 'react'
import PriceVariantsCanapele from '../ProductVariants/PriceVariantsCanapele'

const ProductDetailsCanapele = ({ product }) => {
    console.log(product);
  return (
    <div className="card shadow-lg p-2 rounded">
    <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
    <div className="mb-4 overflow-y-auto border rounded shadow p-2 border-gray-300 bg-white h-52">
      {product.description.split(/[;.]/).map((line, index) => (
        <p className="mb-2" key={index}>
          {line.trim()}
        </p>
      ))}
    </div>
    <PriceVariantsCanapele product={product} />
  </div>
  )
}

export default ProductDetailsCanapele