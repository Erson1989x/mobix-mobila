"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { dulapuriProducts } from "../../../library/categories/dormitor/dulapuri/dulapuriProducts";

const Dulapuri = () => {
  const productsPerPage = 8;
  const totalPages = Math.ceil(dulapuriProducts.length / productsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const productsToDisplay = dulapuriProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="h-full p-4 md:p-8 pt-16 md:pt-20">
      <h1 className="text-3xl font-bold mb-8 text-center">Dulapuri</h1>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-8">
        {productsToDisplay.map((product) => (
          <div
            key={product.name}
            className="card shadow-lg p-2 border border-gray-300 rounded"
          >
            <h2 className="font-bold text-center mb-2">{product.name}</h2>
            <div className="flex justify-center mb-2">
              <Link href={`/products/${product.slug}`} key={product.slug}>
                <Image src={product.image} alt="produs" className="w-full" />
              </Link>
            </div>
            <p className="text-center mb-2"></p>
            <p className="text-center text-red-600">{product.price} - RON</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        {Array.from({ length: totalPages }, (_, i) => (
          <Link
            key={i + 1}
            href="#"
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 ${
              currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {i + 1}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dulapuri;
