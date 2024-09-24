'use client'
import React from 'react'
import { dormitoareProducts } from '../../../library/categories/dormitor/dormitoare/dormitoareProducts'
import { useState, useEffect, useMemo } from 'react'
import ProductCard from '@/components/ProductCard/ProductCard'
import { Pagination } from "@mui/material";
import { useRouter } from "next/navigation";
import { getNumberOfPages, scrollToTop, handlePaginationChange } from "@/app/utils/Pagination/Pagination";


const Dormitoare = () => {
  const router = useRouter();
  const { query: { page } = {} } = router || {};
  const productsPerPage = 8;
  const totalPages = getNumberOfPages(dormitoareProducts, productsPerPage);

  const [currentPage, setCurrentPage] = useState(() => {
    const storedPage = localStorage.getItem("currentPage");
    return storedPage ? parseInt(storedPage) : 1;
  });

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  useEffect(() => {
    return () => {
      localStorage.removeItem("currentPage");
    };
  }, []);

  const handlePageChange = (event, value) => {
    handlePaginationChange(setCurrentPage, router, value, scrollToTop, "/dormitor/dormitoare-set", totalPages);
  };

  const productsToDisplay = useMemo(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return dormitoareProducts.slice(startIndex, endIndex);
  }, [currentPage, productsPerPage]);


  return (
    <div className="h-full p-4 md:p-8 pt-16 md:pt-20">
    <h1 className="text-3xl font-bold mb-8 text-center">Dormitoare</h1>
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

export default Dormitoare