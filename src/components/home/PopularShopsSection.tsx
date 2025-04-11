import React from 'react';
import Image from "next/image"

const PopularShopsSection: React.FC = () => {
  const shops = [
    {
      id: 1,
      name: 'TechGadgets',
      category: 'Electronics',
      rating: 4.8,
      products: 1200,
      image: '/shops/techgadgets.jpg',
    },
    {
      id: 2,
      name: 'FashionHub',
      category: 'Clothing',
      rating: 4.6,
      products: 850,
      image: '/shops/fashionhub.jpg',
    },
    {
      id: 3,
      name: 'HomeEssentials',
      category: 'Home & Garden',
      rating: 4.7,
      products: 650,
      image: '/shops/homeessentials.jpg',
    },
    {
      id: 4,
      name: 'SportsWorld',
      category: 'Sports',
      rating: 4.9,
      products: 450,
      image: '/shops/sportsworld.jpg',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Shops</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {shops.map((shop) => (
            <div key={shop.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 relative">
                <Image
                  src={shop.image}
                  alt={shop.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{shop.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{shop.category}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(shop.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm ml-2">{shop.rating}</span>
                  </div>
                  <span className="text-gray-500 text-sm">{shop.products} products</span>
                </div>
                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
                  Visit Shop
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularShopsSection; 