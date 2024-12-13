import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LOGOImage from '../images/logo.jpg';
import DemoModal from './DemoModal';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="container mx-auto px-4 py-4 flex items-center justify-between bg-gradient-to-b from-white to-orange-50">
      <motion.a 
        href="#" 
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} 
        className="flex items-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img
          src={LOGOImage}
          alt="InTech Logo"
          className="h-8 w-auto"
        />
      </motion.a>
      <nav className="hidden md:flex items-center gap-8">
        <motion.a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} 
          className="text-gray-700 hover:text-gray-900"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Home
        </motion.a>
        <motion.a 
          href="#about" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
          }} 
          className="text-gray-700 hover:text-gray-900"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          About Us
        </motion.a>
        <motion.a 
          href="#products" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('products');
          }} 
          className="text-gray-700 hover:text-gray-900"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Products
        </motion.a>
        <motion.a 
          href="#contact" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }} 
          className="text-gray-700 hover:text-gray-900"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
        </motion.a>
      </nav>
      <motion.button 
        onClick={() => setIsModalOpen(true)}
        className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Request Demo
      </motion.button>
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
}

export default Header;