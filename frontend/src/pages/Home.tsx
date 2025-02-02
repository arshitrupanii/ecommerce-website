import { ShoppingCart, Heart, Search, User, Star, Truck, Clock, Shield, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Header from '../components/Header';

const HomePage = () => {
  const featuredProducts = [
    { id: 1, name: 'Product 1', price: 49.99, rating: 4 },
    { id: 2, name: 'Product 2', price: 79.99, rating: 5 },
    { id: 3, name: 'Product 3', price: 29.99, rating: 3 },
    { id: 4, name: 'Product 4', price: 99.99, rating: 4 },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
     
      {/* Hero Section */}
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
              New Collection 2024
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              Discover our latest products
            </p>
            <button className="mt-8 bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex items-center">
            <Truck className="text-indigo-400 mr-2" size={24} />
            <span className="text-gray-300">Free Shipping</span>
          </div>
          <div className="flex items-center">
            <Clock className="text-indigo-400 mr-2" size={24} />
            <span className="text-gray-300">24/7 Support</span>
          </div>
          <div className="flex items-center">
            <Shield className="text-indigo-400 mr-2" size={24} />
            <span className="text-gray-300">Secure Payments</span>
          </div>
          <div className="flex items-center">
            <Star className="text-indigo-400 mr-2" size={24} />
            <span className="text-gray-300">Premium Quality</span>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold text-gray-100 mb-8">Featured Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="bg-gray-700 h-48 rounded-lg mb-4"></div>
              <h4 className="font-medium text-gray-100">{product.name}</h4>
              <div className="flex items-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < product.rating ? 'text-yellow-400' : 'text-gray-600'}
                    fill={i < product.rating ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold text-indigo-400">${product.price}</span>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <Mail className="mx-auto text-indigo-400" size={40} />
          <h3 className="mt-4 text-2xl font-bold text-gray-100">Subscribe to Newsletter</h3>
          <p className="mt-2 text-gray-400">Get updates about our latest products and promotions</p>
          <div className="mt-8 max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-gray-100 placeholder-gray-400"
            />
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}

    </div>
  );
};

export default HomePage;