import { Facebook, Twitter, Instagram, Linkedin } from 'react-feather'

const Footer = () => {
  return (
    <footer className="bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h5 className="text-lg font-bold mb-4 text-gray-100">E-Shop</h5>
        <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
      </div>
      <div>
        <h5 className="text-lg font-bold mb-4 text-gray-100">Customer Service</h5>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#" className="hover:text-gray-100 transition-colors">Contact Us</a></li>
          <li><a href="#" className="hover:text-gray-100 transition-colors">FAQ</a></li>
          <li><a href="#" className="hover:text-gray-100 transition-colors">Returns</a></li>
          <li><a href="#" className="hover:text-gray-100 transition-colors">Shipping</a></li>
        </ul>
      </div>
      <div>
        <h5 className="text-lg font-bold mb-4 text-gray-100">Follow Us</h5>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors"><Facebook size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors"><Twitter size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors"><Instagram size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors"><Linkedin size={24} /></a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer