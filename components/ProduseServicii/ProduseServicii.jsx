import React from 'react'
import Link from "next/link";

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
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
      <div className="card">
        <img src="https://via.placeholder.com/300x200" alt="produs" />
        <div className="card-body text-center">
          <Link className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse" href="/dormitor">
            Dormitor
          </Link>
        </div>
      </div>
      <div className="card">
        <img src="https://via.placeholder.com/300x200" alt="produs" />
        <div className="card-body text-center">
          <Link className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse" href="/canapele">
            Canapele/Coltare
          </Link>
        </div>
      </div>
      <div className="card">
        <img src="https://via.placeholder.com/300x200" alt="produs" />
        <div className="card-body text-center">
          <Link className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse" href="/living">
            Living/Sufragerie
          </Link>
        </div>
      </div>
      <div className="card">
        <img src="https://via.placeholder.com/300x200" alt="produs" />
        <div className="card-body text-center">
          <Link className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse" href="/mese">
            Mese/Scaune
          </Link>
        </div>
      </div>
      <div className="card">
        <img src="https://via.placeholder.com/300x200" alt="produs" />
        <div className="card-body text-center">
          <Link className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse" href="/bucatarie">
            Bucatarie
          </Link>
        </div>
      </div>
      <div className="card">
        <img src="https://via.placeholder.com/300x200" alt="produs" />
        <div className="card-body text-center">
          <Link className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse" href="/mic-mobilier">
            Mic mobilier
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProduseServicii