'use client'
import React, { useState, useEffect, useMemo } from 'react'
import { pantofarProducts } from '@/library/categories/mobilierHol/pantofar/pantofarProducts'
import ProductCard from '@/components/ProductCard/ProductCard'
import { getNumberOfPages, scrollToTop, handlePaginationChange } from '@/app/utils/Pagination/Pagination'
import { useRouter } from "next/navigation";
import Pagination from '@mui/material/Pagination';

const Pantofare = () => {
  const router = useRouter();
  const { query: { page } = {} } = router || {};
  const productsPerPage = 8;
  const totalPages = getNumberOfPages(pantofarProducts, productsPerPage);

  const [currentPage, setCurrentPage] = useState(() => {
    const storedPage = localStorage.getItem("currentPage");
    return storedPage ? parseInt(storedPage) : 1;
  });

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);
  
  useEffect(() => {
    const storedPage = localStorage.getItem("currentPage");
    if (storedPage) {
      setCurrentPage(parseInt(storedPage));
    }
  }, []);

  useEffect(() => {
    return () => {
      localStorage.removeItem("currentPage");
    };
  }, []);

  const handlePageChange = (event, value) => {
    handlePaginationChange(setCurrentPage, router, value, scrollToTop, "/mobilier-hol/pantofar", totalPages);
  };

  const productsToDisplay = useMemo(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return pantofarProducts.slice(startIndex, endIndex);
  }, [currentPage, productsPerPage]);


  return (
    <div className="h-full p-4 md:p-8 pt-24 md:pt-24">
    <h1 className="text-3xl font-bold mb-8 text-center">Pantofar</h1>
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

export default Pantofare