import React from 'react'
import { bucatarieProducts } from '../../library/categories/bucatarie/bucatarieProducts'
import Link from 'next/link'
import Image from 'next/image'
import scandibg from '../../app/assets/bucatarie/scandibg.jpg'
import samantabg from '../../app/assets/bucatarie/samantabg.jpg'
import olimpiabg from '../../app/assets/bucatarie/olimpiabg.jpg'

const Bucatarie = () => {


  return (
    <div className='min-h-full p-4 md:p-8 pt-16 md:pt-20'>
    <h1 className="text-3xl font-bold mb-8 text-center">Bucatarie</h1>
    <div className=" grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
      <div className='card text-center shadow-lg'>
        <h2 className='font-bold text-center mb-2'>Bucatarii Scandi</h2>
        <div className='flex justify-center mb-2'>
          <Image src={scandibg} alt="dulapuri" className='h-56 w-72' />
        </div>
        <Link className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse" href="/dormitor/dulapuri">Detalii</Link>
      </div>
      <div className='card text-center shadow-lg'>
        <h2 className='font-bold text-center mb-2'>Bucatarii Samanta</h2>
        <div className='flex justify-center mb-2'>
          <Image src={samantabg} alt="noptiere" className='h-56 w-72' />
        </div>
        <Link className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse" href="/dormitor/noptiere">Detalii</Link>
      </div>
      <div className='card text-center shadow-lg'>
        <h2 className='font-bold text-center mb-2'>Bucatarii Olimpia</h2>
        <div className='flex justify-center mb-2'>
          <Image src={olimpiabg} alt="paturi" className='h-56 w-72' />
        </div>
        <Link className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse" href="/dormitor/paturi">Detalii</Link>
      </div>
    </div>
  </div>
  )
}

export default Bucatarie