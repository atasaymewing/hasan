import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <img 
                src="https://i.ibb.co/YDytwp0/046ee74a-fec7-4987-b105-71fd47c6a3cc.jpg" 
                alt="SAYAŞ Logo" 
                className="h-14 w-14 rounded-full object-cover" // Increased from h-10 w-10 to h-14 w-14
              />
              <span className="text-red-600 font-bold text-2xl tracking-wider">SAYAŞ</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-300 hover:text-red-600 transition-colors">Ana Sayfa</a>
              <a href="#services" className="text-gray-300 hover:text-red-600 transition-colors">Hizmetler</a>
              <a href="#portfolio" className="text-gray-300 hover:text-red-600 transition-colors">Portfolyo</a>
              <a href="#team" className="text-gray-300 hover:text-red-600 transition-colors">Ekibimiz</a>
              <a href="#contact" className="text-gray-300 hover:text-red-600 transition-colors">İletişim</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-red-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-sm">
            <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-red-600">Ana Sayfa</a>
            <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-red-600">Hizmetler</a>
            <a href="#portfolio" className="block px-3 py-2 text-gray-300 hover:text-red-600">Portfolyo</a>
            <a href="#team" className="block px-3 py-2 text-gray-300 hover:text-red-600">Ekibimiz</a>
            <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-red-600">İletişim</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;