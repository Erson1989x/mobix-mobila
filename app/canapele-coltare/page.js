import React from 'react'

const CanapeleColtare = () => {

  const canapeleColtareProducts = [
    {
      id: 1,
      name: "Canapele Coltare Table",
      image: "https://picsum.photos/200/300",
      description: "A stylish table for displaying your favorite photos",
      price: 299.99,
      category: "canapele-coltare"
    },
    {
      id: 2,
      name: "Canapele Coltare Coltare Sofa",
      image: "https://picsum.photos/200/301",
      description: "A comfortable sofa for relaxing and watching TV",
      price: 399.99,
      category: "canapele-coltare"
    },
    {
      id: 3,
      name: "Canapele Coltare Coffee Table",
      image: "https://picsum.photos/200/302",
      description: "A stylish coffee table for displaying your favorite photos",
      price: 199.99,
      category: "canapele-coltare"
    },
    {
      id: 4,
      name: "Canapele Coltare Chair",
      image: "https://picsum.photos/200/303",
      description: "A comfortable chair for relaxing and reading",
      price: 79.99,
      category: "canapele-coltare"
    },
    {
      id: 5,
      name: "Canapele Coltare Lamp",
      image: "https://picsum.photos/200/304",
      description: "A stylish lamp for illuminating your room",
      price: 59.99,
      category: "canapele-coltare"
    },
    {
      id: 6,
      name: "Canapele Coltare Wardrobe",
      image: "https://picsum.photos/200/305",
      description: "A stylish wardrobe for storing your clothes",
      price: 399.99,
      category: "canapele-coltare"
    },
    {
      id: 7,
      name: "Canapele Coltare Mirror",
      image: "https://picsum.photos/200/306",
      description: "A stylish mirror for displaying your favorite photos",
      price: 79.99,
      category: "canapele-coltare"
    },
    {
      id: 8,
      name: "Canapele Coltare Bed",
      image: "https://picsum.photos/200/307",
      description: "A comfortable bed for sleeping",
      price: 599.99,
      category: "canapele-coltare"
    },
    // Add more products here...
  ];

  return (
    <div className='h-full p-4 md:p-8'>
    <h1 className="text-3xl font-bold mb-8 text-center">Canapele & Coltare</h1>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{canapeleColtareProducts[0].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={canapeleColtareProducts[0].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{canapeleColtareProducts[0].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{canapeleColtareProducts[0].price}</p>
    </div>
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{canapeleColtareProducts[1].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={canapeleColtareProducts[1].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{canapeleColtareProducts[1].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{canapeleColtareProducts[1].price}</p>
    </div>
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{canapeleColtareProducts[2].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={canapeleColtareProducts[2].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{canapeleColtareProducts[2].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{canapeleColtareProducts[2].price}</p>
    </div>
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{canapeleColtareProducts[3].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={canapeleColtareProducts[3].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{canapeleColtareProducts[3].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{canapeleColtareProducts[3].price}</p>
    </div>
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{canapeleColtareProducts[4].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={canapeleColtareProducts[4].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{canapeleColtareProducts[4].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{canapeleColtareProducts[4].price}</p>
    </div>
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{canapeleColtareProducts[5].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={canapeleColtareProducts[5].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{canapeleColtareProducts[5].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{canapeleColtareProducts[5].price}</p>
    </div>
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{canapeleColtareProducts[6].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={canapeleColtareProducts[6].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{canapeleColtareProducts[6].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{canapeleColtareProducts[6].price}</p>
    </div>
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{canapeleColtareProducts[7].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={canapeleColtareProducts[7].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{canapeleColtareProducts[7].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{canapeleColtareProducts[7].price}</p>
      </div>
    </div>
  </div>
  )
}

export default CanapeleColtare