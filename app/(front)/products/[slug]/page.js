"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { dulapuriProducts } from "../../../../library/categories/dormitor/dulapuri/dulapuriProducts";
import { noptiereProducts } from "../../../../library/categories/dormitor/noptiere/noptiereProducts";
import { paturiProducts } from "@/library/categories/dormitor/paturi/paturiProducts";
import { comodaProducts } from "@/library/categories/dormitor/comode/comodeProducts";
import { salteleProducts } from "@/library/categories/dormitor/saltele/salteleProducts";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
const ProductPage = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  const dulapuriProduct = dulapuriProducts?.find(
    (product) => product.slug === slug
  );
  const noptiereProduct = noptiereProducts?.find(
    (product) => product.slug === slug
  );
  const paturiProduct = paturiProducts?.find(
    (product) => product.slug === slug
  );
  const comodaProduct = comodaProducts?.find(
    (product) => product.slug === slug
  );

  const salteleProduct = salteleProducts?.find(
    (product) => product.slug === slug
  );

  const product =
    dulapuriProduct ??
    noptiereProduct ??
    paturiProduct ??
    comodaProduct ??
    salteleProduct;

  if (product && product === salteleProduct) {
    return (
      <div className="md:p-8 pt-16 md:pt-20">
        <div className="w-36 h-9">
          <Link
            className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-lg mt-4"
            href={`/dormitor/${product.category}`}
          >
            Inapoi la produse
          </Link>
        </div>
        <div className="min-h-full p-4 md:p-8 pt-16 md:pt-20 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="card shadow-lg p-2 rounded">
            <ImageGallery images={product.images} />
          </div>
          <div className="card shadow-lg p-2 rounded">
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <div className="mb-4">
              {product.description.split(/[;.]/).map((line, index) => (
                <p className="mb-2" key={index}>
                  {line.trim()}
                </p>
              ))}
            </div>
            {product.prices.variantaOne && (
              <p className="mb-4">
                Varianta 90 x 200:{" "}
                <span className="text-red-600 font-bold">
                  {product.prices.variantaOne}
                </span>{" "}
                - RON
              </p>
            )}
            {product.prices.variantaOneTwo && (
              <p className="mb-4">
                Varianta 120 x 200:{" "}
                <span className="text-red-600 font-bold">
                  {product.prices.variantaOneTwo}
                </span>{" "}
                - RON
              </p>
            )}
            {product.prices.variantaTwo && (
              <p className="mb-4">
                Varianta 140 x 200:{" "}
                <span className="text-red-600 font-bold">
                  {product.prices.variantaTwo}
                </span>{" "}
                - RON
              </p>
            )}
            {product.prices.variantaThree && (
              <p className="mb-4">
                Varianta 160 x 200:{" "}
                <span className="text-red-600 font-bold">
                  {product.prices.variantaThree}
                </span>{" "}
                - RON
              </p>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="md:p-8 pt-16 md:pt-20">
        <div className="w-36 h-9">
          <Link
            className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-lg mt-4"
            href={`/dormitor/${product.category}`}
          >
            Inapoi la produse
          </Link>
        </div>
        <div className="min-h-full p-4 md:p-8 pt-16 md:pt-20 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="card shadow-lg p-2 rounded">
            <ImageGallery images={product.images} />
          </div>
          <div className="card shadow-lg p-2 rounded">
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <p className="mb-4">{product.description}</p>
            {product.prices &&
            product.prices.cuSomiera &&
            product.prices.somieraRabatabila ? (
              <p className="mb-4">
                Varianta cu somiera:{" "}
                <span className="text-red-600 font-bold">
                  {product.prices.cuSomiera}
                </span>{" "}
                - RON Somiera rabatabila:{" "}
                <span className="text-red-600 font-bold">
                  {product.prices.somieraRabatabila}
                </span>{" "}
                - RON
              </p>
            ) : null}
            <p className="mb-4 text-red-600 font-bold">{product.price} - RON</p>
            <p className="mb-4">
              Dimensiuni:{" "}
              {[
                product.dimensiuni?.latime &&
                  `Lățime: ${product.dimensiuni.latime} cm`,
                product.dimensiuni?.lungime &&
                  `Lungime: ${product.dimensiuni.lungime} cm`,
                product.dimensiuni?.inaltime &&
                  `Înălțime: ${product.dimensiuni.inaltime} cm`,
                product.dimensiuni?.adancime &&
                  `Adâncime: ${product.dimensiuni.adancime} cm`,
              ]
                .filter((dim) => dim)
                .join(" x ")}
            </p>
            <p className="mb-4">
              Culoare: Corp - {product.corpColor}, Față - {product.faceColor}
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductPage;
