import React from 'react';

const CategoriesSection: React.FC = () => {
  const categories = [
    { id: 1, name: 'Electronics', icon: '💻', count: 1200 },
    { id: 2, name: 'Fashion', icon: '👕', count: 850 },
    { id: 3, name: 'Home & Garden', icon: '🏠', count: 650 },
    { id: 4, name: 'Sports', icon: '⚽', count: 450 },
    { id: 5, name: 'Books', icon: '📚', count: 300 },
    { id: 6, name: 'Toys', icon: '🎮', count: 250 },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`/categories/${category.name.toLowerCase().replace(' & ', '-')}`}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="font-semibold mb-1">{category.name}</h3>
              <p className="text-gray-500 text-sm">{category.count} products</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection; 