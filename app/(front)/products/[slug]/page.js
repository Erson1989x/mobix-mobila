"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { dulapuriProducts} from "../../../../library/categories/dormitor/dulapuri/dulapuriProducts";
import { noptiereProducts } from "../../../../library/categories/dormitor/noptiere/noptiereProducts";
import { paturiProducts } from "@/library/categories/dormitor/paturi/paturiProducts";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
const ProductPage = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  const dulapuriProduct = dulapuriProducts?.find((product) => product.slug === slug);
  const noptiereProduct = noptiereProducts?.find((product) => product.slug === slug);
  const paturiProduct = paturiProducts?.find((product) => product.slug === slug);

  const product = dulapuriProduct ?? noptiereProduct ?? paturiProduct;


  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="md:p-8 pt-16 md:pt-20">
      <div className="w-36 h-9">
        <Link
          className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-lg"
          href={`/dormitor/${product.category}`}
        >
          Inapoi la produse
        </Link>
      </div>
      <div className="min-h-full p-4 md:p-8 pt-16 md:pt-20 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="card shadow-lg p-2 rounded">
          <ImageGallery images={product.images}  />
        </div>
        <div className="card shadow-lg p-2 rounded">
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
      </div>
    </div>
  );
};

export default ProductPage;
