"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { dulapuriProducts } from "../../../../library/categories/dormitor/dulapuri/dulapuriProducts";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
const ProductPage = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  const product = dulapuriProducts.find((product) => product.slug === slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen p-4 md:p-8 pt-16 md:pt-20 grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div className="card shadow-lg p-2 border border-gray-300 rounded">
        <ImageGallery images={product.images} />
      </div>
      <div className="card shadow-lg p-2 border border-gray-300 rounded">
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="mb-4">{product.description}</p>
        <p className="mb-4 text-red-600">{product.price} - RON</p>
        <p className="mb-4">
          Dimensiuni: {product.dimensiuni.latime} x{" "}
          {product.dimensiuni.inaltime} x {product.dimensiuni.adancime}
        </p>
        <p className="mb-4">
          Culoare: Corp - {product.corpColor}, Față - {product.faceColor}
        </p>
      </div>
      <div className="w-36 h-9">
        <Link
          className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse"
          href="/dormitor/dulapuri"
        >
          Inapoi la produse
        </Link>
      </div>
    </div>
  );
};

export default ProductPage;
