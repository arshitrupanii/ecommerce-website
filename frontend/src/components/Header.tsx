import React from "react";
import { ShoppingCart, Search, User, Heart } from "lucide-react";

const Header: React.FC = () => {
    const navigation = [
        { name: 'Home', href: '#' },
        { name: 'Shop', href: '#' },
        { name: 'About', href: '#' },
        { name: 'Contact', href: '#' },
      ];
  return (
    <header className="bg-gray-800 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-100">E-Shop</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-gray-100 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-300 hover:text-gray-100">
            <Search size={20} />
          </button>
          <button className="p-2 text-gray-300 hover:text-gray-100">
            <Heart size={20} />
          </button>
          <button className="p-2 text-gray-300 hover:text-gray-100">
            <ShoppingCart size={20} />
          </button>
          <button className="p-2 text-gray-300 hover:text-gray-100">
            <User size={20} />
          </button>
        </div>
      </div>
    </div>
  </header>

  );
};

export default Header;