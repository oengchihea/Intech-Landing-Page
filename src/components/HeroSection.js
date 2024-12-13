import React, { useState } from 'react';
import { motion } from 'framer-motion';
import heroImage from '../images/hero-image.jpg';
import InfoModal from './InfoModal';

function HeroSection() {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  const openModal = () => {
    setIsInfoModalOpen(true);
  };

  const closeModal = () => {
    setIsInfoModalOpen(false);
  };

  return (
    <section className="bg-gradient-to-b from-[#00b1ec] to-blue">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Revolutionizing Workplace Efficiency with Smart Technology!
            </motion.h1>
            <motion.p 
              className="text-gray-600 text-lg mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore our cutting-edge solutions designed to simplify and secure your business operations.
            </motion.p>
            <motion.button 
              onClick={openModal}
              className="bg-[#ffa726] hover:bg-[#ff9800] text-white px-8 py-3 rounded-md transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </div>
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="absolute -top-4 -right-4 w-full h-[calc(100%+2rem)] bg-[#fff5e6] rounded-lg"></div>
            <img
              src={heroImage}
              alt="InTech conference room"
              className="relative z-10 w-full rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
      <InfoModal isOpen={isInfoModalOpen} onClose={closeModal} />
    </section>
  );
}

export default HeroSection;
