import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import cuierebg from '../../app/assets/mobilierhol/cuierebg.jpg'
import pantofarebg from '../../app/assets/mobilierhol/pantofarebg.jpg'
import dulapuriholbg from '../../app/assets/mobilierhol/dulapuriholbg.jpg'



const CanapeleColtare = () => {



  return (
    <div className='min-h-full p-4 md:p-8 pt-16 md:pt-20'>
    <h1 className="text-3xl font-bold mb-8 text-center">Mobilier Hol</h1>
    <div className=" grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
      <div className='card text-center shadow-lg'>
        <h2 className='font-bold text-center mb-2'>Cuiere</h2>
        <div className='flex justify-center mb-2'>
          <Image src={cuierebg} alt="cuiere" className='h-56 w-72' />
        </div>
        <Link className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse" href="/mobilier-hol/cuiere">Detalii</Link>
      </div>
      <div className='card text-center shadow-lg'>
        <h2 className='font-bold text-center mb-2'>Pantofare</h2>
        <div className='flex justify-center mb-2'>
          <Image src={pantofarebg} alt="pantofare" className='h-56 w-72' />
        </div>
        <Link className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse" href="/mobilier-hol/pantofar">Detalii</Link>
      </div>
      <div className='card text-center shadow-lg'>
        <h2 className='font-bold text-center mb-2'>Dulapuri Hol</h2>
        <div className='flex justify-center mb-2'>
          <Image src={dulapuriholbg} alt="paturi" className='h-56 w-72' />
        </div>
        <Link className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse" href="/mobilier-hol/dulapuri-hol">Detalii</Link>
      </div>
    </div>
  </div>
  )
}

export default CanapeleColtare