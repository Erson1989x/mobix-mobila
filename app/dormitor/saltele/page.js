'use client'
import React from 'react'
import ProductCard from '@/components/ProductCard/ProductCard'
import { salteleProducts } from '../../../library/categories/dormitor/saltele/salteleProducts'
import { useMemo } from 'react'
import { Pagination } from "@mui/material";
import { useRouter } from "next/navigation";
import { getNumberOfPages, scrollToTop, handlePaginationChange } from "@/app/utils/Pagination/Pagination";
import { useCurrentPage } from '@/app/utils/Pagination/useCurrentPage'


const Saltele = () => {
  const router = useRouter();
  const { query: { page } = {} } = router || {};
  const productsPerPage = 8;
  const totalPages = getNumberOfPages(salteleProducts, productsPerPage);
  const [currentPage, setCurrentPage] = useCurrentPage();

  const handlePageChange = (event, value) => {
    handlePaginationChange(setCurrentPage, router, value, scrollToTop, "/dormitor/saltele", totalPages);
  };


  const productsToDisplay = useMemo(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return salteleProducts.slice(startIndex, endIndex);
  }, [currentPage, productsPerPage]);


  return (
    <div className="h-full p-4 md:p-8 pt-24 md:pt-24">
      <h1 className="text-3xl font-bold mb-8 text-center">Saltele</h1>
      <ProductCard productsToDisplay={productsToDisplay} />
      <div className="flex justify-center mt-8">
      <Pagination
          count={totalPages}
          page={currentPage || 1}
          onChange={handlePageChange}
          color="primary"
          size="large"
          variant="outlined"
          shape="rounded"
        />
      </div>
    </div>
  )
}

export default Saltele