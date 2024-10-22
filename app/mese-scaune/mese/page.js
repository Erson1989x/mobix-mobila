"use client";
import React, { useMemo } from "react";
import { meseProducts } from "@/library/categories/meseScaune/mese/meseProducts";
import ProductCard from "@/components/ProductCard/ProductCard";
import {
  getNumberOfPages,
  scrollToTop,
  handlePaginationChange,
} from "@/app/utils/Pagination/Pagination";
import { useRouter } from "next/navigation";
import Pagination from "@mui/material/Pagination";
import { useCurrentPage } from "@/app/utils/Pagination/useCurrentPage";

const Mese = () => {
  const router = useRouter();
  const { query: { page } = {} } = router || {};
  const productsPerPage = 8;
  const totalPages = getNumberOfPages(meseProducts, productsPerPage);
  const [currentPage, setCurrentPage] = useCurrentPage

  const handlePageChange = (event, value) => {
    handlePaginationChange(
      setCurrentPage,
      router,
      value,
      scrollToTop,
      "/mese-scaune/mese",
      totalPages
    );
  };

  const productsToDisplay = useMemo(() => {
    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    return meseProducts.slice(start, end);
  }, [currentPage, productsPerPage]);

  return (
    <div className="h-full p-4 md:p-8 pt-24 md:pt-24">
      <h1 className="text-3xl font-bold mb-8 text-center">Mese</h1>
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

export default Mese;
