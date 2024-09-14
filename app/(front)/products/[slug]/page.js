"use client";
import React from "react";
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
import { canapeleProducts } from "@/library/categories/mobilierTabitat/canapele/canapeleProducts";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import ProductDetailsSaltele from "@/components/ProductDetails/ProductDetailsSaltele";
import ProductDetailsCanapele from "@/components/ProductDetails/ProductDetailsCanapele";
import ProductLayout from "@/components/ProductLayout/ProductLayout";

const ProductPage = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  const productTypes = [
    { name: "dulapuri", products: dulapuriProducts },
    { name: "noptiere", products: noptiereProducts },
    { name: "paturi", products: paturiProducts },
    { name: "comoda", products: comodaProducts },
    { name: "dormitoare", products: dormitoareProducts },
    { name: "living", products: livingProducts },
    { name: "baie", products: baieProducts },
    { name: "scaune", products: scauneProducts },
    { name: "birou", products: birouProducts },
    { name: "cuiere", products: cuiereProducts },
    { name: "pantofar", products: pantofarProducts },
    { name: "masute", products: masuteProducts },
    { name: "taburet", products: taburetiProducts },
    { name: "scauneMS", products: scauneProductsMS },
    { name: "mese", products: meseProducts },
    { name: "coltare", products: coltareProducts },
    { name: "bucatarie", products: bucatarieProducts },
    { name: "saltele", products: salteleProducts },
    { name: "canapele", products: canapeleProducts },
  ];

  const product = productTypes
    .find(({ name }) => {
      const { products } = productTypes.find(
        ({ name: typeName }) => typeName === name
      );
      return products?.find((product) => product.slug === slug);
    })
    ?.products?.find((product) => product.slug === slug);

  if (product && product.name === "canapele") {
    console.log(product);
    return (
      <ProductLayout product={product}>
        <ProductDetailsCanapele product={product} />
      </ProductLayout>
    );
  } else if (product && product.name === "saltele") {
    return (
      <ProductLayout product={product}>
        <div className="card shadow-lg p-2 rounded">
          <ProductDetailsSaltele product={product} />
        </div>
      </ProductLayout>
    );
  } else {
    return (
      <ProductLayout product={product}>
        <ProductDetails product={product} />
      </ProductLayout>
    );
  }
};

export default ProductPage;
