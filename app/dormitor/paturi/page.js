"use client";
import React from "react";
import ProductCard from "@/components/ProductCard/ProductCard";
import Link from "next/link";
import { paturiProducts } from "../../../library/categories/dormitor/paturi/paturiProducts";
import { useState } from "react";

const Paturi = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(paturiProducts.length / itemsPerPage);

  const productsToDisplay = paturiProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="h-full p-4 md:p-8 pt-16 md:pt-20">
      <h1 className="text-3xl font-bold mb-8 text-center">Paturi</h1>
      <ProductCard productsToDisplay={productsToDisplay} />
      <div className="flex justify-center mt-8">
        {Array.from({ length: totalPages }, (_, i) => (
          <Link
            key={i + 1}
            href="#"
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 cursor-pointer border border-0 rounded bg-white text-black shadow-md animate-pulse ${
              currentPage === i + 1 ? "text-black" : "bg-gray-200"
            }`}
          >
            {i + 1}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Paturi;
