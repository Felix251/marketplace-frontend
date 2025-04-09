import React from 'react';

const MainFooter: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Marketplace</h3>
            <p className="text-gray-400">
              Your one-stop shop for all your needs. Find the best products from trusted sellers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="/faq" className="text-gray-400 hover:text-white">FAQ</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="/categories/electronics" className="text-gray-400 hover:text-white">Electronics</a></li>
              <li><a href="/categories/fashion" className="text-gray-400 hover:text-white">Fashion</a></li>
              <li><a href="/categories/home" className="text-gray-400 hover:text-white">Home & Garden</a></li>
              <li><a href="/categories/sports" className="text-gray-400 hover:text-white">Sports</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates and offers.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l text-gray-900 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 px-4 py-2 rounded-r hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Marketplace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter; 