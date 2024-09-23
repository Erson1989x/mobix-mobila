"use client";
import React, { useState, useEffect, useMemo } from "react";
import { cuiereProducts } from "@/library/categories/mobilierHol/cuiere/cuiereProducts";
import ProductCard from "@/components/ProductCard/ProductCard";
import { Pagination } from "@mui/material";
import { useRouter } from "next/navigation";

const Cuiere = () => {
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
    const numberOfPages = Math.ceil(cuiereProducts.length / productsPerPage);
    return numberOfPages;
  };

  const handlePaginationChange = (event, value) => {
    setCurrentPage(value);
    router.push(`/mobilier-hol/cuiere?page=${value}`, undefined, {
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
    const start = currentPage === 1 ? 0 : (currentPage - 1) * productsPerPage;
    const end =
      currentPage === 1 ? cuiereProducts.length : currentPage * productsPerPage;
    const productsToDisplay = cuiereProducts.slice(start, end);
    return productsToDisplay;
  }, [currentPage, productsPerPage]);

  console.log("cuiereProducts:", cuiereProducts);
  console.log("currentPage:", currentPage);
  console.log("productsPerPage:", productsPerPage);

  return (
    <div className="h-full p-4 md:p-8 pt-16 md:pt-20">
      <h1 className="text-3xl font-bold mb-8 text-center">Cuiere</h1>
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
  );
};

export default Cuiere;
