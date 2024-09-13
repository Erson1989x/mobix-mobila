import React from "react";
import Link from "next/link";
import Image from "next/image";
import canapelebg from "../../app/assets/mobiliertapitat/canapelebg.jpg";
import coltarebg from "../../app/assets/mobiliertapitat/coltarebg.jpg";
import fotoliibg from "../../app/assets/mobiliertapitat/fotoliibg.jpg";
import taburetibg from "../../app/assets/mobiliertapitat/taburetibg.jpg";

const MobilierTapitat = () => {
  return (
    <div className="min-h-full p-4 md:p-8 pt-16 md:pt-20">
      <h1 className="text-3xl font-bold mb-8 text-center">Mobilier Tapitat</h1>
      <div className=" grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
        <div className="card text-center shadow-lg">
          <h2 className="font-bold text-center mb-2">Canapele</h2>
          <div className="flex justify-center mb-2">
            <Image src={canapelebg} alt="canapele" className="h-56 w-72" />
          </div>
          <Link
            className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse"
            href="/mobilier-tapitat/canapele"
          >
            Detalii
          </Link>
        </div>
        <div className="card text-center shadow-lg">
          <h2 className="font-bold text-center mb-2">Coltare</h2>
          <div className="flex justify-center mb-2">
            <Image src={coltarebg} alt="coltare" className="h-56 w-72" />
          </div>
          <Link
            className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse"
            href="/mobilier-tapitat/coltare"
          >
            Detalii
          </Link>
        </div>
        <div className="card text-center shadow-lg">
          <h2 className="font-bold text-center mb-2">Fotolii</h2>
          <div className="flex justify-center mb-2">
            <Image src={fotoliibg} alt="fotolii" className="h-56 w-72" />
          </div>
          <Link
            className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse"
            href="/mobilier-tabitat/fotolii"
          >
            Detalii
          </Link>
        </div>
        <div className="card text-center shadow-lg">
          <h2 className="font-bold text-center mb-2">Tabureti</h2>
          <div className="flex justify-center mb-2">
            <Image src={taburetibg} alt="tabureti" className="h-56 w-72" />
          </div>
          <Link
            className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse"
            href="/mobilier-tapitat/tabureti"
          >
            Detalii
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobilierTapitat;
