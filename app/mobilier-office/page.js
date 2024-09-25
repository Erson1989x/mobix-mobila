import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import birouriOfficebg from '../../app/assets/mobilieroffice/mobilieroffice.webp'
import scauneOfficebg from '../../app/assets/mobilieroffice/scauneofficebg.png'


const MicMobilier = () => {

  return (
    <div className='min-h-full p-4 md:p-8 pt-16 md:pt-20'>
    <h1 className="text-3xl font-bold mb-8 text-center">Mobilier Office</h1>
    <div className=" grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
      <div className='card text-center shadow-lg'>
        <h2 className='font-bold text-center mb-2'>Mese Birou</h2>
        <div className='flex justify-center mb-2'>
          <Image src={birouriOfficebg} alt="birou" className='h-56 w-72' />
        </div>
        <Link className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse" href="/mobilier-office/mese-birou">Detalii</Link>
      </div>
      <div className='card text-center shadow-lg'>
        <h2 className='font-bold text-center mb-2'>Scaune</h2>
        <div className='flex justify-center mb-2'>
          <Image src={scauneOfficebg} alt="noptiere" className='h-56 w-72' />
        </div>
        <Link className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse" href="/mobilier-office/scaune">Detalii</Link>
      </div>
    </div>
  </div>
  )
}

export default MicMobilier