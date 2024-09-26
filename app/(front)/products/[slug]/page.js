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
import { fotoliiProducts } from "@/library/categories/mobilierTabitat/fotolii/fotoliiProducts";

const ProductPage = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  const productTypes = [
    { category: "dulapuri", products: dulapuriProducts },
    { category: "noptiere", products: noptiereProducts },
    { category: "paturi", products: paturiProducts },
    { category: "comoda", products: comodaProducts },
    { category: "dormitoare", products: dormitoareProducts },
    { category: "living", products: livingProducts },
    { category: "baie", products: baieProducts },
    { category: "scaune", products: scauneProducts },
    { category: "birou", products: birouProducts },
    { category: "cuiere", products: cuiereProducts },
    { category: "pantofar", products: pantofarProducts },
    { category: "masute", products: masuteProducts },
    { category: "taburet", products: taburetiProducts },
    { category: "scauneMS", products: scauneProductsMS },
    { category: "mese", products: meseProducts },
    { category: "coltare", products: coltareProducts },
    { category: "bucatarie", products: bucatarieProducts },
    { category: "saltele", products: salteleProducts },
    { category: "canapele", products: canapeleProducts },
    { category: "fotolii", products: fotoliiProducts },
  ];

  const findProduct = (slug) => {
    return productTypes
      .flatMap((type) => type.products)
      .find((product) => product.slug === slug);
  };

  const currentProduct = findProduct(slug);

  if (!currentProduct) return null;

  const renderProductDetails = () => {
    switch (currentProduct.category) {
      case "canapele":
      case "coltare":
        return <ProductDetailsCanapele product={currentProduct} />;
      case "saltele":
        return (
          <div className="card shadow-lg p-2 rounded">
            <ProductDetailsSaltele product={currentProduct} />
          </div>
        );
      default:
        return <ProductDetails product={currentProduct} />;
    }
  };

  return (
    <ProductLayout product={currentProduct}>
      {renderProductDetails()}
    </ProductLayout>
  );
};

export default ProductPage;