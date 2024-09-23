'use client'
import React from 'react'
import Link from 'next/link'
import { dormitoareProducts } from '../../../library/categories/dormitor/dormitoare/dormitoareProducts'
import { useState } from 'react'
import ProductCard from '@/components/ProductCard/ProductCard'
import { useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'

const Dormitoare = () => {
  const router = useRouter();
  const params = useParams();
    const productsPerPage = 8;
    const totalPages = Math.ceil(dormitoareProducts.length / productsPerPage);
    const [currentPage, setCurrentPage] = useState(1);
  
    const productsToDisplay = dormitoareProducts.slice(
      (currentPage - 1) * productsPerPage,
      currentPage * productsPerPage
    );

    useEffect(() => {
      const pagina = params.pagina;
      if (pagina) {
        setCurrentPage(parseInt(pagina));
      }
    }, [params.pagina]);


  return (
    <div className="h-full p-4 md:p-8 pt-16 md:pt-20">
    <h1 className="text-3xl font-bold mb-8 text-center">Dormitoare</h1>
    <ProductCard productsToDisplay={productsToDisplay} />
    <div className="flex justify-center mt-8">
      {Array.from({ length: totalPages }, (_, i) => (
        <Link
          key={i + 1}
          href={{ pathname: '/dormitor/dormitoare-set', query: { pagina: i + 1 } }}
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

export default Dormitoare