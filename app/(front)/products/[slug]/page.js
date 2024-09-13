"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { dulapuriProducts } from "../../../../library/categories/dormitor/dulapuri/dulapuriProducts";
import { noptiereProducts } from "../../../../library/categories/dormitor/noptiere/noptiereProducts";
import { paturiProducts } from "@/library/categories/dormitor/paturi/paturiProducts";
import { comodaProducts } from "@/library/categories/dormitor/comode/comodeProducts";
import { salteleProducts } from "@/library/categories/dormitor/saltele/salteleProducts";
import { dormitoareProducts } from "@/library/categories/dormitor/dormitoare/dormitoareProducts";
import { livingProducts } from "@/library/categories/living/livingProducts";
import { baieProducts } from "@/library/categories/baie/baieProducts";
import { scauneProducts } from "@/library/categories/mobilierOffice/scaune/scauneProducts";
import { birouProducts } from "@/library/categories/mobilierOffice/birou/birouProducts";
import { cuiereProducts } from "@/library/categories/mobilierHol/cuiere/cuiereProducts";
import { pantofarProducts } from "@/library/categories/mobilierHol/pantofar/pantofarProducts";
import { masuteProducts } from "@/library/categories/meseScaune/masute/masuteProducts";
import { taburetiProducts } from "@/library/categories/mobilierTabitat/tabureti/taburetiProducts";
import { scauneProductsMS } from "@/library/categories/meseScaune/scaune/scauneProductsMS";
import { meseProducts } from "@/library/categories/meseScaune/mese/meseProducts";
import { coltareProducts } from "@/library/categories/mobilierTabitat/coltare/coltareProducts";
import { bucatarieProducts } from "@/library/categories/bucatarie/bucatarieProducts";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import BackButton from "@/components/backButton/BackButton";
import ProductImageGallery from "@/components/ProductImageGallery/ProductImageGallery";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import ProductVariants from "@/components/ProductVariants/ProductVariants";
import ProductDimensions from "@/components/ProductDimensions/ProductDimensions";
import ProductPrice from "@/components/ProductPrice/ProductPrice";
import ProductColor from "@/components/ProductColor/ProductColor";

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

  const dormitoareProduct = dormitoareProducts?.find(
    (product) => product.slug === slug
  );

  const livingProduct = livingProducts?.find(
    (product) => product.slug === slug
  );

  const baieProduct = baieProducts?.find((product) => product.slug === slug);

  const scauneProduct = scauneProducts?.find(
    (product) => product.slug === slug
  );

  const birouProduct = birouProducts?.find((product) => product.slug === slug);

  const cuiereProduct = cuiereProducts?.find(
    (product) => product.slug === slug
  );
  const pantofarProduct = pantofarProducts?.find(
    (product) => product.slug === slug
  );

  const masuteProduct = masuteProducts?.find(
    (product) => product.slug === slug
  );
  const taburetProduct = taburetiProducts?.find(
    (product) => product.slug === slug
  );
  const scauneProductMS = scauneProductsMS?.find(
    (product) => product.slug === slug
  );
  const meseProduct = meseProducts?.find((product) => product.slug === slug);
  const coltareProduct = coltareProducts?.find(
    (product) => product.slug === slug
  );

  const bucatarieProduct = bucatarieProducts?.find(
    (product) => product.slug === slug
  );

  const allProducts = [
    dulapuriProduct,
    noptiereProduct,
    paturiProduct,
    comodaProduct,
    salteleProduct,
    dormitoareProduct,
    livingProduct,
    baieProduct,
    scauneProduct,
    birouProduct,
    cuiereProduct,
    pantofarProduct,
    masuteProduct,
    taburetProduct,
    scauneProductMS,
    meseProduct,
    coltareProduct,
    bucatarieProduct,
  ];

  const productsToDisplay = allProducts.filter((product) => product);

  const productToDisplay = productsToDisplay[0];

  const productToDisplayIndex = productsToDisplay.indexOf(productToDisplay);

  const product =
    dulapuriProduct ??
    noptiereProduct ??
    paturiProduct ??
    comodaProduct ??
    dormitoareProduct ??
    livingProduct ??
    baieProduct ??
    scauneProduct ??
    birouProduct ??
    cuiereProduct ??
    pantofarProduct ??
    masuteProduct ??
    taburetProduct ??
    scauneProductMS ??
    meseProduct ??
    coltareProduct ??
    bucatarieProduct ??
    salteleProduct;

  if (product && product === salteleProduct) {
    return (
      <div className="md:p-8 pt-16 md:pt-20">
        <div className="w-40 h-9">
          <Link
            className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-lg mt-4"
            href={`/dormitor/${product.category}`}
          >
            <FontAwesomeIcon icon={faChevronLeft} size="lg" className="mr-2" />
            Inapoi la produse
          </Link>
        </div>
        <div className="p-4 md:p-8 pt-16 md:pt-20 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="h-auto card shadow-lg p-2 rounded">
            <ImageGallery images={product.images} />
          </div>
          <div className="card shadow-lg p-2 rounded">
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <div className="mb-4 overflow-y-auto border rounded shadow p-2 border-gray-300 bg-white h-52">
              {product.description.split(/[;.]/).map((line, index) => (
                <p className="mb-2" key={index}>
                  {line.trim()}
                </p>
              ))}
            </div>
            {product.prices.variantaOne && (
              <p className="mb-4 shadow p-2">
                Varianta 90 x 200:{" "}
                <span className="text-red-600 font-bold shadow p-2 animate-pulse text-xl">
                  {product.prices.variantaOne}
                </span>{" "}
                - RON
              </p>
            )}
            {product.prices.variantaOneTwo && (
              <p className="mb-4 shadow p-2">
                Varianta 120 x 200:{" "}
                <span className="text-red-600 font-bold shadow p-2 animate-pulse text-xl">
                  {product.prices.variantaOneTwo}
                </span>{" "}
                - RON
              </p>
            )}
            {product.prices.variantaTwo && (
              <p className="mb-4 shadow p-2">
                Varianta 140 x 200:{" "}
                <span className="text-red-600 font-bold shadow p-2 animate-pulse text-xl">
                  {product.prices.variantaTwo}
                </span>{" "}
                - RON
              </p>
            )}
            {product.prices.variantaThree && (
              <p className="mb-4 shadow p-2">
                Varianta 160 x 200:{" "}
                <span className="text-red-600 font-bold animate-pulse text-xl">
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
        <div className="w-40 h-9">
          <BackButton href={`/dormitor/${product.category}`} />
        </div>
        <div className="min-h-full p-4 md:p-8 pt-16 md:pt-20 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <ProductImageGallery images={product.images} />
          <ProductDetails product={product} />
        </div>
      </div>
    );
  }
};

export default ProductPage;
