import React from 'react'

const MicMobilier = () => {

  const micMobilierProducts = [
    {
      id: 1,
      name: "Microwave",
      image: "https://picsum.photos/200/300",
      description: "A compact microwave for reheating meals and cooking meals",
      price: 199.99,
      category: "mic-mobilier"
    },
    {
      id: 2,
      name: "Toaster",
      image: "https://picsum.photos/200/301",
      description: "A compact toaster for toasting bread and bagels",
      price: 49.99,
      category: "mic-mobilier"
    },
    {
      id: 3,
      name: "Coffee Maker",
      image: "https://picsum.photos/200/302",
      description: "A compact coffee maker for brewing coffee and tea",
      price: 99.99,
      category: "mic-mobilier"
    },
    {
      id: 4,
      name: "Blender",
      image: "https://picsum.photos/200/303",
      description: "A compact blender for blending smoothies and soups",
      price: 79.99,
      category: "mic-mobilier"
    },
    {
      id: 5,
      name: "Slow Cooker",
      image: "https://picsum.photos/200/304",
      description: "A compact slow cooker for cooking stews and roasts",
      price: 129.99,
      category: "mic-mobilier"
    },
    {
      id: 6,
      name: "Electric Kettle",
      image: "https://picsum.photos/200/305",
      description: "A compact electric kettle for boiling water quickly",
      price: 49.99,
      category: "mic-mobilier"
    },
    {
      id: 7,
      name: "Food Processor",
      image: "https://picsum.photos/200/306",
      description: "A compact food processor for chopping, slicing, and shredding",
      price: 129.99,
      category: "mic-mobilier"
    },
    {
      id: 8,
      name: "Stand Mixer",
      image: "https://picsum.photos/200/307",
      description: "A compact stand mixer for mixing cakes, cookies, and bread",
      price: 149.99,
      category: "mic-mobilier"
    },
    {
      id: 9,
      name: "Instant Pot",
      image: "https://picsum.photos/200/308",
      description: "A compact instant pot for pressure cooking and slow cooking",
      price: 199.99,
      category: "mic-mobilier"
    },
  ];

  return (
    <div className='h-full p-4 md:p-8'>
    <h1 className="text-3xl font-bold mb-8 text-center">Mic mobilier</h1>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{micMobilierProducts[0].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={micMobilierProducts[0].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{micMobilierProducts[0].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{micMobilierProducts[0].price}</p>
    </div>
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{micMobilierProducts[1].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={micMobilierProducts[1].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{micMobilierProducts[1].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{micMobilierProducts[1].price}</p>
    </div>
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{micMobilierProducts[2].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={micMobilierProducts[2].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{micMobilierProducts[2].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{micMobilierProducts[2].price}</p>
    </div>
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{micMobilierProducts[3].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={micMobilierProducts[3].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{micMobilierProducts[3].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{micMobilierProducts[3].price}</p>
    </div>
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{micMobilierProducts[4].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={micMobilierProducts[4].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{micMobilierProducts[4].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{micMobilierProducts[4].price}</p>
    </div>
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{micMobilierProducts[5].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={micMobilierProducts[5].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{micMobilierProducts[5].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{micMobilierProducts[5].price}</p>
    </div>
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{micMobilierProducts[6].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={micMobilierProducts[6].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{micMobilierProducts[6].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{micMobilierProducts[6].price}</p>
    </div>
    <div className="card">
      <h2 className='font-bold text-center mb-2'>{micMobilierProducts[7].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={micMobilierProducts[7].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{micMobilierProducts[7].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{micMobilierProducts[7].price}</p>
      </div>
      <div className="card">
      <h2 className='font-bold text-center mb-2'>{micMobilierProducts[8].name}</h2>
      <div className='flex justify-center mb-2'>
      <img src={micMobilierProducts[8].image} alt="produs" />
      </div>
      <p className='text-center mb-2'>{micMobilierProducts[8].description}</p>
      <p className='text-center text-green-600 border-2 border-green-600 hover:scale-105 transition-transform duration-300'>{micMobilierProducts[8].price}</p>
      </div>
    </div>
  </div>
  )
}

export default MicMobilier