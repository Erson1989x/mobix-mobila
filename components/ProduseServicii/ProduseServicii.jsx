import React from 'react'
import Link from "next/link";
import Image from "next/image";
import dormitor from "../../app/assets/dormitor/DORMITOR.webp";
import mobilierhol from "../../app/assets/mobilierhol/MOBILIERHOL.jpg";
import mobilierTapitat from "../../app/assets/mobiliertapitat/mobiliertapitat.jpg";
import living from "../../app/assets/living/livingg.jpg";
import bucatarie from "../../app/assets/bucatarie/bucatarie.webp";
import mobilierOffice from "../../app/assets/mobilieroffice/mobilieroffice.jpg";
import meseSiScaune from "../../app/assets/mesesiscaune/mesesiscaune.jpg";

const ProduseServicii = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
    <h2 className="mt-8 text-3xl"> Produse & Servicii </h2>
    <p className="mt-4 text-lg text-center">
      {" "}
      Alegeți produsele care să se potrivească stilului și personalității
      dvs. Indiferent dacă preferați un aspect simplu și elegant sau unul
      mai plin de viață și culoare, avem o opțiune pentru tine. Fie că alegi
      materiale naturale sau sintetice, culori deschise sau întunecate, noi
      avem ceea ce căutați.
    </p>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-8 justify-items-center">
      <div className="card relative">
        <Image src={dormitor} alt="produs" priority={true} className="h-full w-full object-cover" />
        <div className="card-body text-center">
          <Link className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-10 truncate" href="/dormitor">
            Dormitor
          </Link>
        </div>
      </div>
      <div className="card relative">
        <Image src={mobilierhol} alt="produs" priority={true} className="h-full w-full object-cover" />
        <div className="card-body text-center">
          <Link className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-10 truncate" href="/mobilier-hol">
            Mobilier Hol
          </Link>
        </div>
      </div>
      <div className="card relative">
        <Image src={mobilierTapitat} alt="produs" priority={true} className="h-full w-full object-cover" />
        <div className="card-body text-center">
          <Link className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-10 truncate" href="/mobilier-tapitat">
            Mobilier Tapitat
          </Link>
        </div>
      </div>
      <div className="card relative">
        <Image src={living} alt="produs" priority={true} className="h-full w-full object-cover" />
        <div className="card-body text-center">
          <Link className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-10 truncate" href="/living">
            Living
          </Link>
        </div>
      </div>
      <div className="card relative">
        <Image src={bucatarie} alt="produs" priority={true} className="h-full w-full object-cover" />
        <div className="card-body text-center">
          <Link className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-10 truncate" href="/bucatarie">
            Bucatarie
          </Link>
        </div>
      </div>
      <div className="card relative">
        <Image src={mobilierOffice} alt="produs" priority={true} className="h-full w-full object-cover" />
        <div className="card-body text-center">
          <Link className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-10 truncate" href="/mobilier-office">
            Mobilier Office
          </Link>
        </div>
      </div>
      <div className="col-span-full flex justify-center w-full">
      <div className="card w-40 h-40 md:w-80 md:h-72 relative">
        <Image src={meseSiScaune} alt="produs" priority={true} className="h-full w-full object-cover" />
        <div className="card-body text-center">
          <Link className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-10 truncate" href="/mese-scaune">
            Mese si Scaune
          </Link>
        </div>
      </div>
      </div>
    </div>
  </div>
  )
}

export default ProduseServicii