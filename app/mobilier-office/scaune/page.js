"use client";
import React, { useMemo } from "react";
import { scauneProducts } from "@/library/categories/mobilierOffice/scaune/scauneProducts";
import ProductCard from "@/components/ProductCard/ProductCard";
import { Pagination } from "@mui/material";
import { useRouter } from "next/navigation";
import {
  getNumberOfPages,
  scrollToTop,
  handlePaginationChange,
} from "@/app/utils/Pagination/Pagination";
import { useCurrentPage } from "@/app/utils/Pagination/useCurrentPage";

const Scaune = () => {
  const router = useRouter();
  const { query: { page } = {} } = router || {};
  const productsPerPage = 8;
  const totalPages = getNumberOfPages(scauneProducts, productsPerPage);
  const [currentPage, setCurrentPage] = useCurrentPage();

  const handlePageChange = (event, value) => {
    handlePaginationChange(
      setCurrentPage,
      router,
      value,
      scrollToTop,
      "/mobilier-office/scaune",
      totalPages
    );
  };

  const productsToDisplay = useMemo(() => {
    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    return scauneProducts.slice(start, end);
  }, [currentPage, productsPerPage]);

  return (
    <div className="h-full p-4 md:p-8 pt-24 md:pt-24">
      <h1 className="text-3xl font-bold mb-8 text-center">Scaune</h1>
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

export default Scaune;
