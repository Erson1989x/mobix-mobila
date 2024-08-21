import React from 'react'
import { dormitorProducts } from '../../library/categories/dormitor/dormitorProducts'
import Link from 'next/link'
import Image from 'next/image'
import dulapbg from '../../app/assets/dormitor/dulapbg.webp'
import noptierebg from '../../app/assets/dormitor/noptierebg.jpg'
import paturibg from '../../app/assets/dormitor/paturibg.jpg'
import comodabg from '../../app/assets/dormitor/comodabg.jpeg'
import saltelebg from '../../app/assets/dormitor/saltelebg.jpeg'
import dormitorsetbg from '../../app/assets/dormitor/dormitorsetbg.jpg'

const Dormitor = () => {



  return (
    <div className='min-h-screen p-4 md:p-8 pt-16 md:pt-20'>
      <h1 className="text-3xl font-bold mb-8 text-center">Dormitor</h1>
      <div className=" grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
        <div className='card text-center shadow-lg'>
          <h2 className='font-bold text-center mb-2'>Dulapuri</h2>
          <div className='flex justify-center mb-2'>
            <Image src={dulapbg} alt="dulapuri" className='h-56 w-72' />
          </div>
          <Link className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse" href="/dormitor/dulapuri">Detalii</Link>
        </div>
        <div className='card text-center shadow-lg'>
          <h2 className='font-bold text-center mb-2'>Noptiere</h2>
          <div className='flex justify-center mb-2'>
            <Image src={noptierebg} alt="noptiere" className='h-56 w-72' />
          </div>
          <Link className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse" href="/dormitor/noptiere">Detalii</Link>
        </div>
        <div className='card text-center shadow-lg'>
          <h2 className='font-bold text-center mb-2'>Paturi</h2>
          <div className='flex justify-center mb-2'>
            <Image src={paturibg} alt="paturi" className='h-56 w-72' />
          </div>
          <Link className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse" href="/dormitor/paturi">Detalii</Link>
        </div>
        <div className='card text-center shadow-lg'>
          <h2 className='font-bold text-center mb-2'>Comoda</h2>
          <div className='flex justify-center mb-2'>
            <Image src={comodabg} alt="comoda" className='h-56 w-72' />
          </div>
          <Link className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse" href="/dormitor/comoda">Detalii</Link>
        </div>
        <div className='card text-center shadow-lg'>
          <h2 className='font-bold text-center mb-2'>Saltele</h2>
          <div className='flex justify-center mb-2'>
            <Image src={saltelebg} alt="saltele" className='h-56 w-72' />
          </div>
          <Link className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse" href="/dormitor/saltele">Detalii</Link>
        </div>
        <div className='card text-center shadow-lg'>
          <h2 className='font-bold text-center mb-2'>Dormitor Set</h2>
          <div className='flex justify-center mb-2'>
            <Image src={dormitorsetbg} alt="saltele" className='h-56 w-72' />
          </div>
          <Link className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse" href="/dormitor/dormitor-set">Detalii</Link>
        </div>
      </div>
    </div>
  )
}

export default Dormitor;