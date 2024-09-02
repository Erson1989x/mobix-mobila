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
    className="w-full h-60"
  />
  )
}

export default ProductCardImage