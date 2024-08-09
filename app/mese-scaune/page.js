import React from 'react'

const MeseScaune = () => {

  const meseScauneProducts = [
    {
      id: 1,
      name: "Dining Table",
      image: "https://picsum.photos/200/300",
      description: "A stylish dining table for family meals",
      price: 499.99,
      category: "mese-scaune"
    },
    {
      id: 2,
      name: "Dining Chair",
      image: "https://picsum.photos/200/301",
      description: "A comfortable dining chair for everyday use",
      price: 199.99,
      category: "mese-scaune"
    },
    {
      id: 3,
      name: "Bar Stool",
      image: "https://picsum.photos/200/302",
      description: "A stylish bar stool for kitchen islands",
      price: 299.99,
      category: "mese-scaune"
    },
    {
      id: 4,
      name: "Dining Bench",
      image: "https://picsum.photos/200/303",
      description: "A spacious dining bench for large families",
      price: 399.99,
      category: "mese-scaune"
    },
    {
      id: 5,
      name: "Breakfast Table",
      image: "https://picsum.photos/200/304",
      description: "A compact breakfast table for small kitchens",
      price: 299.99,
      category: "mese-scaune"
    },
    {
      id: 6,
      name: "Dining Set",
      image: "https://picsum.photos/200/305",
      description: "A complete dining set for a stylish dining room",
      price: 699.99,
      category: "mese-scaune"
    },
    {
      id: 7,
      name: "Counter Stool",
      image: "https://picsum.photos/200/306",
      description: "A comfortable counter stool for kitchen counters",
      price: 199.99,
      category: "mese-scaune"
    },
    {
      id: 8,
      name: "Dining Table with Storage",
      image: "https://picsum.photos/200/307",
      description: "A practical dining table with storage for a clutter-free dining room",
      price: 599.99,
      category: "mese-scaune"
    },
    {
      id: 9,
      name: "Extendable Dining Table",
      image: "https://picsum.photos/200/308",
      description: "A versatile extendable dining table for large gatherings",
      price: 799.99,
      category: "mese-scaune"
    },
  ];

  return (
    <div className='h-full p-4 md:p-8'>
    <h1 className="text-3xl font-bold mb-8 text-center">Mese & Scaune</h1>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{meseScauneProducts[0].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={meseScauneProducts[0].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{meseScauneProducts[0].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{meseScauneProducts[0].price}</p>
    </div>
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{meseScauneProducts[1].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={meseScauneProducts[1].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{meseScauneProducts[1].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{meseScauneProducts[1].price}</p>
    </div>
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{meseScauneProducts[2].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={meseScauneProducts[2].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{meseScauneProducts[2].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{meseScauneProducts[2].price}</p>
    </div>
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{meseScauneProducts[3].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={meseScauneProducts[3].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{meseScauneProducts[3].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{meseScauneProducts[3].price}</p>
    </div>
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{meseScauneProducts[4].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={meseScauneProducts[4].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{meseScauneProducts[4].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{meseScauneProducts[4].price}</p>
    </div>
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{meseScauneProducts[5].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={meseScauneProducts[5].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{meseScauneProducts[5].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{meseScauneProducts[5].price}</p>
    </div>
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{meseScauneProducts[6].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={meseScauneProducts[6].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{meseScauneProducts[6].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{meseScauneProducts[6].price}</p>
    </div>
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{meseScauneProducts[7].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={meseScauneProducts[7].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{meseScauneProducts[7].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{meseScauneProducts[7].price}</p>
      </div>
      <div className="card">
      <h2 className='font-bold text-center mb-2'>{meseScauneProducts[8].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={meseScauneProducts[8].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{meseScauneProducts[8].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{meseScauneProducts[8].price}</p>
      </div>
    </div>
  </div>
  )
}

export default MeseScaune