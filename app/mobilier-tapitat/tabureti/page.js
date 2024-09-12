'use client'
import React from 'react'
import Link from 'next/link'
import { taburetiProducts } from '../../../library/categories/mobilierTabitat/tabureti/taburetiProducts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

import ProductCard from '@/components/ProductCard/ProductCard';

const Tabureti = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const totalPages = Math.ceil(taburetiProducts.length / itemsPerPage);
  
    const productsToDisplay = taburetiProducts.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

  return (
    <div className="h-full p-4 md:p-8 pt-16 md:pt-20">
    <h1 className="text-3xl font-bold mb-8 text-center">Tabureti</h1>
    <Link
      className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-lg mt-4"
      href="/mobilier-tapitat"
    ><FontAwesomeIcon icon={faChevronLeft} size="lg" className="mr-2" />
      Inapoi la produse
    </Link>
    <ProductCard productsToDisplay={productsToDisplay} />
    <div className="flex justify-center mt-8">
      {Array.from({ length: totalPages }, (_, i) => (
        <Link
          key={i + 1}
          href="#"
          onClick={() => setCurrentPage(i + 1)}
          className={`px-4 py-2 cursor-pointer border border-0 rounded bg-white text-black shadow-md animate-pulse ${
            currentPage === i + 1 ? "text-black" : "bg-gray-200"
          }`}
        >
          {i + 1}
        </Link>
      ))}
    </div>
  </div>
  )
}

export default Tabureti