"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ProductCard from "@/components/ProductCard/ProductCard";
import { dulapuriProducts } from "../../../library/categories/dormitor/dulapuri/dulapuriProducts";
import { Pagination } from "@mui/material";
import { useMemo } from "react";
import { getNumberOfPages, scrollToTop, handlePaginationChange } from "@/app/utils/Pagination/Pagination";

const Dulapuri = () => {
  const router = useRouter();
  const { query: { page } = {} } = router || {};
  const productsPerPage = 8;
  const totalPages = getNumberOfPages(dulapuriProducts, productsPerPage); 

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
    handlePaginationChange(setCurrentPage, router, value, scrollToTop, '/dormitor/dulapuri', totalPages);
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
    return dulapuriProducts.slice(start, end);
  }, [currentPage, productsPerPage]);

  return (
    <div className="h-full p-4 md:p-8 pt-16 md:pt-20">
      <h1 className="text-3xl font-bold mb-8 text-center">Dulapuri</h1>
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
  );
};

export default Dulapuri;
