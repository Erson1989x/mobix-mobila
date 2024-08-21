'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { dulapuriProducts } from '../../../../library/categories/dormitor/dulapuri/dulapuriProducts';
import {noptiereProducts} from '../../../../library/categories/dormitor/noptiere/noptiereProducts';
import ImageGallery from '@/components/ImageGallery/ImageGallery';
const ProductPage = () => {
  const pathname = usePathname();
  const slug = pathname.split('/').pop();

  const product = dulapuriProducts.find((product) => product.slug === slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='h-full p-4 md:p-8 pt-16 md:pt-20 grid grid-cols-1 sm:grid-cols-2'>
      <div>
        <Link href="/dormitor/dulapuri">Back to Products</Link>
      </div>
      <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>{product.price} - RON</p>
        <p>Dimensiuni: {product.dimensiuni.latime} x {product.dimensiuni.inaltime} x {product.dimensiuni.adacime}</p>
        <p>Culoare: Corp - {product.corpColor}, Față - {product.faceColor}</p>
      </div>
      <div>
        <ImageGallery images={[product.image]} />
      </div>
    </div>
  );
};

export default ProductPage;