import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import masuteBG from '../assets/mesesiscaune/masuta.webp'
import scauneBG from '../assets/mesesiscaune/scaune.webp'
import meseBG from '../assets/mesesiscaune/masa.webp'


const MeseSiScaune = () => {
  return (
    <div className='min-h-full p-4 md:p-8 pt-16 md:pt-20'>
    <h1 className="text-3xl font-bold mb-8 text-center">Mese si scaune</h1>
    <div className=" grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
      <div className='card text-center shadow-lg'>
        <h2 className='font-bold text-center mb-2'>Masute</h2>
        <div className='flex justify-center mb-2'>
          <Image src={masuteBG} alt="masute" className='h-56 w-72' />
        </div>
        <Link className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse" href="/mese-scaune/masute">Detalii</Link>
      </div>
      <div className='card text-center shadow-lg'>
        <h2 className='font-bold text-center mb-2'>Scaune</h2>
        <div className='flex justify-center mb-2'>
          <Image src={scauneBG} alt="scaune" className='h-56 w-72' />
        </div>
        <Link className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse" href="/mese-scaune/scaune">Detalii</Link>
      </div>
      <div className='card text-center shadow-lg'>
        <h2 className='font-bold text-center mb-2'>Mese</h2>
        <div className='flex justify-center mb-2'>
          <Image src={meseBG} alt="mese" className='h-56 w-72' />
        </div>
        <Link className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse" href="/mese-scaune/mese">Detalii</Link>
      </div>
    </div>
  </div>
  )
}

export default MeseSiScaune