"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { dulapuriProducts } from "../../../library/categories/dormitor/dulapuri/dulapuriProducts";

const Dulapuri = () => {
  return (
    <div className="h-full p-4 md:p-8 pt-16 md:pt-20">
      <h1 className="text-3xl font-bold mb-8 text-center">Dulapuri</h1>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-8">
        {dulapuriProducts.map((product) => (
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
            <p className="text-center mb-2">{product.description}</p>
            <p className="text-center text-red-600">{product.price} - RON</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dulapuri;
