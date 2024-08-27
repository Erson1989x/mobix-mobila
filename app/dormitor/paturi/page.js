"use client";
import React from "react";
import Image from "next/image";
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
      <Link
        className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-lg mt-4"
        href="/dormitor"
      >
        Inapoi la produse
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-8">
        {productsToDisplay.map((product) => (
          <div
            key={product.name}
            className="card shadow-lg p-2 border border-gray-300 rounded"
          >
            <h2 className="font-bold text-center mb-2">{product.name}</h2>
            <div className="flex justify-center mb-2">
              <Link href={`/products/${product.slug}`} key={product.slug}>
                <Image
                  src={
                    Array.isArray(product.images)
                      ? product.images[0].src
                      : product.images.src
                  }
                  width={
                    Array.isArray(product.images)
                      ? product.images[0].width
                      : product.images.width
                  }
                  height={
                    Array.isArray(product.images)
                      ? product.images[0].height
                      : product.images.height
                  }
                  priority={true}
                  alt=""
                  className="w-full h-60"
                />
              </Link>
            </div>
            <p className="text-center mb-2">Pentru Detalii click pe poza</p>
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
