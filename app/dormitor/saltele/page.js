'use client'
import React from 'react'
import ProductCard from '@/components/ProductCard/ProductCard'
import { salteleProducts } from '../../../library/categories/dormitor/saltele/salteleProducts'
import { useState, useEffect, useMemo } from 'react'
import { Pagination } from "@mui/material";
import { useRouter } from "next/navigation";


const Saltele = () => {
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
    const numberOfPages = Math.ceil(salteleProducts.length / productsPerPage);
    return numberOfPages;
  };

  const handlePaginationChange = (event, value) => {
    setCurrentPage(value);
    router.push(`/dormitor/saltele?page=${value}`, undefined, {
      shallow: true,
    });
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const parsedPage = parseInt(page);
    if(!isNaN(parsedPage)) {
      setCurrentPage(parsedPage);
    }
    }, [page]);

    const productsToDisplay = useMemo(() => {
      const start = (currentPage - 1) * productsPerPage;
      const end = start + productsPerPage;
      return salteleProducts.slice(start, end);
    }, [currentPage, productsPerPage]);


  return (
    <div className="h-full p-4 md:p-8 pt-16 md:pt-20">
      <h1 className="text-3xl font-bold mb-8 text-center">Saltele</h1>
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

export default Saltele