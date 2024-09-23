import React from 'react'
import Image from 'next/image';

const ProductCardImage = ({product}) => {

    const image = product.images?.[0] ?? product.images;

  return (
    <Image
    src={image.src}
    width={image.width}
    height={image.height}
    priority={true}
    alt=""
    className="mx-auto w-56 h-56 object-fill"
  />
  )
}

export default ProductCardImage