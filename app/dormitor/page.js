import React from 'react'

const Dormitor = () => {

   const dormitorProducts = [
    {
      id: 1,
      name: "Dormitor Bed",
      image: "https://picsum.photos/200/300",
      description: "A comfortable bed for a good night's sleep",
      price: 199.99,
      category: "dormitor"
    },
    {
      id: 2,
      name: "Dormitor Dresser",
      image: "https://picsum.photos/200/301",
      description: "A stylish dresser for storing your clothes",
      price: 149.99,
      category: "dormitor"
    },
    {
      id: 3,
      name: "Dormitor Nightstand",
      image: "https://picsum.photos/200/302",
      description: "A convenient nightstand for keeping your essentials within reach",
      price: 99.99,
      category: "dormitor"
    },
    {
      id: 4,
      name: "Dormitor Desk",
      image: "https://picsum.photos/200/303",
      description: "A spacious desk for studying and working",
      price: 249.99,
      category: "dormitor"
    },
    {
      id: 5,
      name: "Dormitor Chair",
      image: "https://picsum.photos/200/304",
      description: "A comfortable chair for relaxing and reading",
      price: 79.99,
      category: "dormitor"
    },
    {
      id: 6,
      name: "Dormitor Table",
      image: "https://picsum.photos/200/305",
      description: "A stylish table for displaying your favorite photos",
      price: 299.99,
      category: "dormitor"
    },
    {
      id: 7,
      name: "Dormitor Lamp",
      image: "https://picsum.photos/200/306",
      description: "A stylish lamp for illuminating your room",
      price: 59.99,
      category: "dormitor"
    },
    {
      id: 8,
      name: "Dormitor Wardrobe",
      image: "https://picsum.photos/200/307",
      description: "A stylish wardrobe for storing your clothes",
      price: 399.99,
      category: "dormitor"
    },
    {
      id: 9,
      name: "Dormitor Mirror",
      image: "https://picsum.photos/200/308",
      description: "A stylish mirror for displaying your favorite photos",
      price: 79.99,
      category: "dormitor"
    },
  ];


  return (
    <div className='h-full p-4 md:p-8'>
      <h1 className="text-3xl font-bold mb-8 text-center">Dormitor</h1>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-8">
      <div className="card shadow-lg">
        <h2 className='font-bold text-center mb-2'>{dormitorProducts[0].name}</h2>
        <div className='flex justify-center mb-2'>
        <img src={dormitorProducts[0].image} alt="produs" />
        </div>
        <p className='text-center mb-2'>{dormitorProducts[0].description}</p>
        <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{dormitorProducts[0].price}</p>
      </div>
      <div className="card">
        <h2 className='font-bold text-center mb-2'>{dormitorProducts[1].name}</h2>
        <div className='flex justify-center mb-2'>
        <img src={dormitorProducts[1].image} alt="produs" />
        </div>
        <p className='text-center mb-2'>{dormitorProducts[1].description}</p>
        <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{dormitorProducts[1].price}</p>
      </div>
      <div className="card">
        <h2 className='font-bold text-center mb-2'>{dormitorProducts[2].name}</h2>
        <div className='flex justify-center mb-2'>
        <img src={dormitorProducts[2].image} alt="produs" />
        </div>
        <p className='text-center mb-2'>{dormitorProducts[2].description}</p>
        <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{dormitorProducts[2].price}</p>
      </div>
      <div className="card">
        <h2 className='font-bold text-center mb-2'>{dormitorProducts[3].name}</h2>
        <div className='flex justify-center mb-2'>
        <img src={dormitorProducts[3].image} alt="produs" />
        </div>
        <p className='text-center mb-2'>{dormitorProducts[3].description}</p>
        <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{dormitorProducts[3].price}</p>
      </div>
      <div className="card">
        <h2 className='font-bold text-center mb-2'>{dormitorProducts[4].name}</h2>
        <div className='flex justify-center mb-2'>
        <img src={dormitorProducts[4].image} alt="produs" />
        </div>
        <p className='text-center mb-2'>{dormitorProducts[4].description}</p>
        <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{dormitorProducts[4].price}</p>
      </div>
      <div className="card">
        <h2 className='font-bold text-center mb-2'>{dormitorProducts[5].name}</h2>
        <div className='flex justify-center mb-2'>
        <img src={dormitorProducts[5].image} alt="produs" />
        </div>
        <p className='text-center mb-2'>{dormitorProducts[5].description}</p>
        <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{dormitorProducts[5].price}</p>
      </div>
      <div className="card">
        <h2 className='font-bold text-center mb-2'>{dormitorProducts[6].name}</h2>
        <div className='flex justify-center mb-2'>
        <img src={dormitorProducts[6].image} alt="produs" />
        </div>
        <p className='text-center mb-2'>{dormitorProducts[6].description}</p>
        <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{dormitorProducts[6].price}</p>
      </div>
      <div className="card">
        <h2 className='font-bold text-center mb-2'>{dormitorProducts[7].name}</h2>
        <div className='flex justify-center mb-2'>
        <img src={dormitorProducts[7].image} alt="produs" />
        </div>
        <p className='text-center mb-2'>{dormitorProducts[7].description}</p>
        <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{dormitorProducts[7].price}</p>
        </div>
        <div className="card">
        <h2 className='font-bold text-center mb-2'>{dormitorProducts[8].name}</h2>
        <div className='flex justify-center mb-2'>
        <img src={dormitorProducts[8].image} alt="produs" />
        </div>
        <p className='text-center mb-2'>{dormitorProducts[8].description}</p>
        <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{dormitorProducts[8].price}</p>
        </div>
      </div>
    </div>
  )
}

export default Dormitor;