"use client";
import React from "react";
import { taburetiProducts } from "../../../library/categories/mobilierTabitat/tabureti/taburetiProducts";
import { useMemo } from "react";
import ProductCard from "@/components/ProductCard/ProductCard";
import {
  getNumberOfPages,
  scrollToTop,
  handlePaginationChange,
} from "@/app/utils/Pagination/Pagination";
import { useRouter } from "next/navigation";
import { Pagination } from "@mui/material";
import { useCurrentPage } from "@/app/utils/Pagination/useCurrentPage";

const Tabureti = () => {
  const router = useRouter();
  const { query: { page } = {} } = router || {};
  const productsPerPage = 8;
  const totalPages = getNumberOfPages(taburetiProducts, productsPerPage);
  const [currentPage, setCurrentPage] = useCurrentPage();


  const handlePageChange = (event, value) => {
    handlePaginationChange(
      setCurrentPage,
      router,
      value,
      scrollToTop,
      "/mobilier-tapitat/tabureti",
      totalPages
    );
  };

  const productsToDisplay = useMemo(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return taburetiProducts.slice(startIndex, endIndex);
  }, [currentPage, productsPerPage]);

  return (
    <div className="h-full p-4 md:p-8 pt-24 md:pt-24">
      <h1 className="text-3xl font-bold mb-8 text-center">Tabureti</h1>
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

export default Tabureti;
