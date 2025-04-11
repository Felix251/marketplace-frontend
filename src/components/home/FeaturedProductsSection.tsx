import React from 'react';

const FeaturedProductsSection: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 199.99,
      image: '/products/headphone.jpg',
      rating: 4.5,
      reviews: 120,
    },
    {
      id: 2,
      name: 'Smart Watch Series 5',
      price: 299.99,
      image: '/products/smartwatch.jpg',
      rating: 4.8,
      reviews: 85,
    },
    {
      id: 3,
      name: 'Professional Camera Kit',
      price: 899.99,
      image: '/products/camera.jpg',
      rating: 4.7,
      reviews: 45,
    },
    {
      id: 4,
      name: 'Gaming Laptop Pro',
      price: 1299.99,
      image: '/products/laptop.jpg',
      rating: 4.9,
      reviews: 210,
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm ml-2">
                    ({product.reviews} reviews)
                  </span>
                </div>
                <p className="text-xl font-bold text-gray-900">${product.price}</p>
                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection; 