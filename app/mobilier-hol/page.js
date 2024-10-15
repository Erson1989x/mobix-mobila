import React from "react";
import Link from "next/link";
import Image from "next/image";
import { mobilierHolItems } from "./mobilierHolItems";

const CanapeleColtare = () => {
  return (
    <div className="min-h-full p-4 md:p-8 pt-24 md:pt-24">
      <h1 className="text-3xl font-bold mb-8 text-center">Mobilier Hol</h1>
      <div className=" grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
        {mobilierHolItems.map(({ title, imageSrc, link }) => (
          <div key={title} className="card text-center shadow-lg">
            <h2 className="font-bold text-center mb-2">{title}</h2>
            <div className="flex justify-center mb-2">
              <Image src={imageSrc} alt={title} className="h-56 w-72" />
            </div>
            <Link
              className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse"
              href={link}
            >
              Detalii
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CanapeleColtare;
