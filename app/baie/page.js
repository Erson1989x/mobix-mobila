"use client";
import React, { useMemo } from "react";
import {
  getNumberOfPages,
  scrollToTop,
  handlePaginationChange,
} from "@/app/utils/Pagination/Pagination";
import Pagination from "@mui/material/Pagination";
import { useRouter } from "next/navigation";
import ProductCard from "@/components/ProductCard/ProductCard";
import { baieProducts } from "@/library/categories/baie/baieProducts";
import { useCurrentPage } from "../utils/Pagination/useCurrentPage";

const Baie = () => {
  const router = useRouter();
  const { query: { page } = {} } = router || {};
  const productsPerPage = 8;
  const totalPages = getNumberOfPages(baieProducts, productsPerPage);
  const [currentPage, setCurrentPage] = useCurrentPage()


  const handlePageChange = (event, value) => {
    handlePaginationChange(
      setCurrentPage,
      router,
      value,
      scrollToTop,
      "/baie",
      totalPages
    );
  };

  const productsToDisplay = useMemo(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return baieProducts.slice(startIndex, endIndex);
  }, [currentPage, productsPerPage]);

  return (
    <div className="h-full p-4 md:p-8 pt-24 md:pt-24">
      <h1 className="text-3xl font-bold mb-8 text-center">Baie</h1>
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

export default Baie;
