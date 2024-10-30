import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { livingItems } from './livingItems'

const Living = () => {
  return (
    <div className="min-h-full p-4 md:p-8 pt-24 md:pt-24">
    <h1 className="text-3xl font-bold mb-8 text-center">Living</h1>
    <div className=" grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
      {livingItems.map(({ title, imageSrc, link }) => (
        <Link key={title} href={link} className="cursor-pointer">
        <div className="card text-center shadow-lg flex-col justify-center">
          <h2 className="font-bold text-center mb-2">{title}</h2>
          <div className="flex justify-center mb-2">
            <Image src={imageSrc} alt={title} className="h-56 w-72" />
          </div>
          <p className="border border-0 p-2 rounded bg-white text-black shadow-md animate-pulse w-24 text-center mx-auto">Detalii</p>
        </div>
        </Link>
      ))}
    </div>
  </div>
  )
}

export default Living;