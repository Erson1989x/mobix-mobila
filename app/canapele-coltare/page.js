import React from 'react'
import { canapeleColtareProducts } from '../../library/categories/canapeleColtareProducts.js/canapeleColtareProducts'

const CanapeleColtare = () => {



  return (
    <div className='h-full p-4 md:p-8 pt-16 md:pt-20'>
    <h1 className="text-3xl font-bold mb-8 text-center">Canapele & Coltare</h1>
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-8">
      {canapeleColtareProducts.map(({name, image, description, price}) => (
            <div key={name} className="card shadow-lg p-2 border border-gray-300 rounded">
            <h2 className='font-bold text-center mb-2'>{name}</h2>
            <div className='flex justify-center mb-2'>
            <img src={image} alt="produs" className='w-full' />
            </div>
            <p className='text-center mb-2'>{description}</p>
            <p className='text-center text-red-600'>{price}</p>
          </div>
      ))}
    </div>
  </div>
  )
}

export default CanapeleColtare