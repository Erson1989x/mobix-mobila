import React from 'react'

const LivingSufragerie = () => {

  const livingSufarageProducts = [
    {
      id: 1,
      name: "Living Sofa",
      image: "https://picsum.photos/200/300",
      description: "A comfortable sofa for relaxing",
      price: 499.99,
      category: "living-sufarage"
    },
    {
      id: 2,
      name: "Living Armchair",
      image: "https://picsum.photos/200/301",
      description: "A stylish armchair for reading",
      price: 199.99,
      category: "living-sufarage"
    },
    {
      id: 3,
      name: "Living Coffee Table",
      image: "https://picsum.photos/200/302",
      description: "A stylish coffee table for displaying your favorite photos",
      price: 299.99,
      category: "living-sufarage"
    },
    {
      id: 4,
      name: "Living End Table",
      image: "https://picsum.photos/200/303",
      description: "A stylish end table for placing your lamps",
      price: 199.99,
      category: "living-sufarage"
    },
    {
      id: 5,
      name: "Living Bookshelf",
      image: "https://picsum.photos/200/304",
      description: "A stylish bookshelf for displaying your favorite books",
      price: 399.99,
      category: "living-sufarage"
    },
    {
      id: 6,
      name: "Living TV Stand",
      image: "https://picsum.photos/200/305",
      description: "A stylish TV stand for placing your TV",
      price: 499.99,
      category: "living-sufarage"
    },
    {
      id: 7,
      name: "Living Rug",
      image: "https://picsum.photos/200/306",
      description: "A colorful rug for adding warmth and comfort to your living room",
      price: 99.99,
      category: "living-sufarage"
    },
    {
      id: 8,
      name: "Living Lamp",
      image: "https://picsum.photos/200/307",
      description: "A stylish lamp for illuminating your living room",
      price: 79.99,
      category: "living-sufarage"
    },
    {
      id: 9,
      name: "Living TV Unit",
      image: "https://picsum.photos/200/308",
      description: "A stylish TV unit for storing your TV and other electronics",
      price: 399.99,
      category: "living-sufarage"
    },
  ];

  return (
    <div className='h-full p-4 md:p-8'>
    <h1 className="text-3xl font-bold mb-8 text-center">Living & Sufarage</h1>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{livingSufarageProducts[0].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={livingSufarageProducts[0].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{livingSufarageProducts[0].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{livingSufarageProducts[0].price}</p>
    </div>
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{livingSufarageProducts[1].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={livingSufarageProducts[1].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{livingSufarageProducts[1].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{livingSufarageProducts[1].price}</p>
    </div>
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{livingSufarageProducts[2].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={livingSufarageProducts[2].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{livingSufarageProducts[2].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{livingSufarageProducts[2].price}</p>
    </div>
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{livingSufarageProducts[3].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={livingSufarageProducts[3].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{livingSufarageProducts[3].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{livingSufarageProducts[3].price}</p>
    </div>
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{livingSufarageProducts[4].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={livingSufarageProducts[4].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{livingSufarageProducts[4].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{livingSufarageProducts[4].price}</p>
    </div>
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{livingSufarageProducts[5].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={livingSufarageProducts[5].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{livingSufarageProducts[5].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{livingSufarageProducts[5].price}</p>
    </div>
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{livingSufarageProducts[6].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={livingSufarageProducts[6].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{livingSufarageProducts[6].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{livingSufarageProducts[6].price}</p>
    </div>
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{livingSufarageProducts[7].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={livingSufarageProducts[7].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{livingSufarageProducts[7].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{livingSufarageProducts[7].price}</p>
      </div>
      <div className="card">
      <h2 className='font-bold text-center mb-2'>{livingSufarageProducts[8].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={livingSufarageProducts[8].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{livingSufarageProducts[8].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{livingSufarageProducts[8].price}</p>
      </div>
    </div>
  </div>
  )
}

export default LivingSufragerie