'use client'
import Image from 'next/image'
import { dormitorItems } from './dormitorItems'
import Link from 'next/link'
import { BrowserRouter as Router } from 'react-router-dom';




const Dormitor = () => {

  return (
    <Router>
    <div className='min-h-screen p-4 md:p-8 pt-24 md:pt-24'>
      <h1 className="text-3xl font-bold mb-8 text-center">Dormitor</h1>
      <div className=" grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
        {dormitorItems.map(({title, imgageSrc, link}) => (
          <div key={title} className='card text-center shadow-lg'>
            <h2 className='font-bold text-center mb-2'>{title}</h2>
            <div className='flex justify-center mb-2'>
              <Image src={imgageSrc} alt={title} className='h-56 w-72' />
            </div>
            <Link className="cursor-pointer border border-0 p-2 rounded bg-white text-black shadow-md" href={link}>Detalii</Link>
          </div>
        ))}
      </div>
    </div>
    </Router>
  )
}

export default Dormitor;