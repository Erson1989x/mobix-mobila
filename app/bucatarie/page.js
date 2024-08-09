import React from 'react'

const Bucatarie = () => {

  const bucatarieProducts = [
    {
      id: 1,
      name: "Kitchen Cabinet",
      image: "https://picsum.photos/200/300",
      description: "A stylish kitchen cabinet for storing your dishes and cookware",
      price: 499.99,
      category: "bucatarie"
    },
    {
      id: 2,
      name: "Kitchen Island",
      image: "https://picsum.photos/200/301",
      description: "A practical kitchen island for preparing meals and serving food",
      price: 799.99,
      category: "bucatarie"
    },
    {
      id: 3,
      name: "Kitchen Table",
      image: "https://picsum.photos/200/302",
      description: "A stylish kitchen table for family meals and casual dining",
      price: 599.99,
      category: "bucatarie"
    },
    {
      id: 4,
      name: "Kitchen Sink",
      image: "https://picsum.photos/200/303",
      description: "A practical kitchen sink for washing dishes and preparing food",
      price: 199.99,
      category: "bucatarie"
    },
    {
      id: 5,
      name: "Kitchen Faucet",
      image: "https://picsum.photos/200/304",
      description: "A stylish kitchen faucet for washing dishes and preparing food",
      price: 99.99,
      category: "bucatarie"
    },
    {
      id: 6,
      name: "Kitchen Pantry",
      image: "https://picsum.photos/200/305",
      description: "A practical kitchen pantry for storing your food and cookware",
      price: 399.99,
      category: "bucatarie"
    },
    {
      id: 7,
      name: "Kitchen Stove",
      image: "https://picsum.photos/200/306",
      description: "A powerful kitchen stove for cooking meals and baking",
      price: 999.99,
      category: "bucatarie"
    },
    {
      id: 8,
      name: "Kitchen Hood",
      image: "https://picsum.photos/200/307",
      description: "A practical kitchen hood for removing cooking odors and smoke",
      price: 399.99,
      category: "bucatarie"
    },
    {
      id: 9,
      name: "Kitchen Countertop",
      image: "https://picsum.photos/200/308",
      description: "A stylish kitchen countertop for preparing meals and serving food",
      price: 599.99,
      category: "bucatarie"
    },
  ];

  return (
    <div className='h-full p-4 md:p-8'>
    <h1 className="text-3xl font-bold mb-8 text-center">Bucatarie</h1>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{bucatarieProducts[0].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={bucatarieProducts[0].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{bucatarieProducts[0].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{bucatarieProducts[0].price}</p>
    </div>
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{bucatarieProducts[1].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={bucatarieProducts[1].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{bucatarieProducts[1].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{bucatarieProducts[1].price}</p>
    </div>
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{bucatarieProducts[2].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={bucatarieProducts[2].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{bucatarieProducts[2].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{bucatarieProducts[2].price}</p>
    </div>
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{bucatarieProducts[3].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={bucatarieProducts[3].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{bucatarieProducts[3].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{bucatarieProducts[3].price}</p>
    </div>
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{bucatarieProducts[4].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={bucatarieProducts[4].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{bucatarieProducts[4].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{bucatarieProducts[4].price}</p>
    </div>
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{bucatarieProducts[5].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={bucatarieProducts[5].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{bucatarieProducts[5].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{bucatarieProducts[5].price}</p>
    </div>
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{bucatarieProducts[6].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={bucatarieProducts[6].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{bucatarieProducts[6].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{bucatarieProducts[6].price}</p>
    </div>
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{bucatarieProducts[7].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={bucatarieProducts[7].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{bucatarieProducts[7].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{bucatarieProducts[7].price}</p>
      </div>
      <div className="card">
      <h2 className='font-bold text-center mb-2'>{bucatarieProducts[8].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={bucatarieProducts[8].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{bucatarieProducts[8].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{bucatarieProducts[8].price}</p>
      </div>
    </div>
  </div>
  )
}

export default Bucatarie