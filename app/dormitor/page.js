import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { dormitorItems } from './dormitorItems'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';



const Dormitor = () => {

  return (
    <div className='min-h-screen p-4 md:p-8 pt-16 md:pt-20'>
      <h1 className="text-3xl font-bold mb-8 text-center">Dormitor</h1>
      <Link
        className="cursor-pointer border-0 p-2 rounded bg-white text-black shadow-lg mt-4"
        href="/"
      ><FontAwesomeIcon icon={faChevronLeft} size="lg" className="mr-2" />
        Inapoi la produse
      </Link>
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
  )
}

export default Dormitor;