"use client";
import React, { useState, useEffect, useMemo, use } from "react";
import { birouProducts } from "@/library/categories/mobilierOffice/birou/birouProducts";
import ProductCard from "@/components/ProductCard/ProductCard";
import {
  getNumberOfPages,
  scrollToTop,
  handlePaginationChange,
} from "@/app/utils/Pagination/Pagination";
import { useRouter } from "next/navigation";
import Pagination from "@mui/material/Pagination";

const MeseBirou = () => {
  const router = useRouter();
  const { query: { page } = {} } = router || {};
  const productsPerPage = 8;
  const totalPages = getNumberOfPages(birouProducts, productsPerPage);

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
    handlePaginationChange(
      setCurrentPage,
      router,
      value,
      scrollToTop,
      "/mobilier-office/mese-birou",
      totalPages
    );
  };

  const productsToDisplay = useMemo(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return birouProducts.slice(startIndex, endIndex);
  }, [currentPage, productsPerPage]);

  return (
    <div className="h-full p-4 md:p-8 pt-16 md:pt-20">
      <h1 className="text-3xl font-bold mb-8 text-center">Mese Birou</h1>
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

export default MeseBirou;
