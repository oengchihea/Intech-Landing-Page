import React from 'react';
import { motion } from 'framer-motion';
import CTAImage from '../images/cta.jpg';
import DemoModal from './DemoModal';

function CTASection() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <section className="bg-[#fff8f3] py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-16">
          <div className="md:w-1/2">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold leading-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Upgrade Your Business?
            </motion.h2>
            <motion.p 
              className="text-gray-600 text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Request a demo today and discover how InTech can transform your workplace!
            </motion.p>
            <motion.button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#00f2ea] hover:bg-[#00ddd5] text-black font-medium px-8 py-3 rounded-md transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Demo Now
            </motion.button>
          </div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <img
              src={CTAImage}
              alt="InTech conference room"
              className="relative z-10 w-full rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

export default CTASection;