import React from "react";
import Link from "next/link";
import Image from "next/image";
import { produseItems } from "./produseItems";

const ProduseServicii = () => {
  return (
    <section
      id="products"
      className="w-full h-auto flex flex-col items-center justify-center mt-4"
    >
      <h2 className="mt-8 text-3xl"> Produse & Servicii </h2>
      <p className="mt-4 text-lg text-center">
        {" "}
        Alegeți produsele care să se potrivească stilului și personalității dvs.
        Indiferent dacă preferați un aspect simplu și elegant sau unul mai plin
        de viață și culoare, avem o opțiune pentru tine. Fie că alegi materiale
        naturale sau sintetice, culori deschise sau întunecate, noi avem ceea ce
        căutați.
      </p>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 mt-8 justify-center">
        {produseItems.map(({ title, image, url }, index) => (
          <div key={index} className="card relative border border-1 border-black shadow-md overflow-hidden">
            <Image
              src={image}
              alt="produs"
              priority={true}
              className="h-full w-full object-cover"
            />
            <div className="card-body text-center">
              <Link
                className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-10 truncate"
                href={url}
              >
                {title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProduseServicii;
