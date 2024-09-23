'use client'
import React from 'react'
import { dormitoareProducts } from '../../../library/categories/dormitor/dormitoare/dormitoareProducts'
import { useState, useEffect, useMemo } from 'react'
import ProductCard from '@/components/ProductCard/ProductCard'
import { Pagination } from "@mui/material";
import { useRouter } from "next/navigation";


const Dormitoare = () => {
  const router = useRouter();
  const { query: { page } = {} } = router || {};
  const productsPerPage = 8;
  const totalPages = 1;

  const [currentPage, setCurrentPage] = useState(() => {
    const storedPage = localStorage.getItem("currentPage");
    return storedPage ? parseInt(storedPage) : 1;
  });

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  const getNumberOfPages = () => {
    const numberOfPages = Math.ceil(dormitoareProducts.length / productsPerPage);
    return numberOfPages;
  };

  const handlePaginationChange = (event, value) => {
    setCurrentPage(value);
    router.push(`/dormitor/dormitoare-set?pagina=${value}`, undefined, {
      shallow: true,
    });
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const parsedPage = parseInt(page);
    if (!isNaN(parsedPage)) {
      setCurrentPage(parsedPage);
    }
  }, [page]);

  const productsToDisplay = useMemo(() => {
    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    return dormitoareProducts.slice(start, end);
  }, [currentPage, productsPerPage]);


  return (
    <div className="h-full p-4 md:p-8 pt-16 md:pt-20">
    <h1 className="text-3xl font-bold mb-8 text-center">Dormitoare</h1>
    <ProductCard productsToDisplay={productsToDisplay} />
    <div className="flex justify-center mt-8">
    <Pagination
          count={totalPages}
          page={currentPage || 1}
          onChange={handlePaginationChange}
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