import React from "react";
import Image from "next/image";
import Link from "next/link";
import { meseSiScauneItems } from "./meseScauneItems";

const MeseSiScaune = () => {
  return (
    <div className="min-h-full p-4 md:p-8 pt-16 md:pt-20">
      <h1 className="text-3xl font-bold mb-8 text-center">Mese si scaune</h1>
      <div className=" grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
        {meseSiScauneItems.map(({ title, imageSrc, link }) => (
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

export default MeseSiScaune;
