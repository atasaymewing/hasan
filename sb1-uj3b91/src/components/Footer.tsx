import React from 'react';
import { Github, Instagram, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-red-600 font-bold text-2xl">SAYAŞ</span>
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://instagram.com/hsnatasay" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-red-600 transition-colors"
              title="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://wa.me/905059803792" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-red-600 transition-colors"
              title="WhatsApp"
            >
              <Phone size={24} />
            </a>
            <a 
              href="https://github.com/atasaymewing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-600 transition-colors"
              title="Github"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p className="mb-2">sayasdijital@gmail.com</p>
          <p>&copy; {new Date().getFullYear()} SAYAŞ Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;