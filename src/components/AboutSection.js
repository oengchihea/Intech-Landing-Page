import React, { useState } from 'react';
import { motion } from 'framer-motion';
import INTECHImage from '../images/intech.jpg';
import ImageModal from './ImageModal';
import './AboutSection.css';

function AboutSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 bg-about-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.div
              className="image-container cursor-pointer rounded-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsModalOpen(true)}
            >
              <img
                src={INTECHImage}
                alt="InTech office"
                className="w-full h-auto transform-image"
              />
            </motion.div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <motion.h2 
              className="text-4xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              About InTech
            </motion.h2>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl font-semibold mb-3">Mission</h3>
                <p className="text-gray-700">
                  Revolutionizing workplace efficiency and security through innovative smart technology solutions.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-2xl font-semibold mb-3">Vision</h3>
                <p className="text-gray-700">
                  To be a leading provider of cutting-edge smart technology, creating smarter, more efficient, and
                  secure work environments for businesses of all sizes.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        image={INTECHImage}
        title="Welcome to InTech"
        description="Step into the future of workplace innovation at InTech's headquarters. Our state-of-the-art facility 
        showcases the perfect blend of modern design and cutting-edge technology. The space features ambient lighting 
        that creates an inspiring atmosphere, ergonomic workstations for maximum productivity, and collaborative areas 
        that foster creativity and teamwork. The floor-to-ceiling windows offer panoramic city views while flooding 
        the space with natural light, creating an environment where innovation thrives and the future of workplace 
        solutions comes to life."
      />
    </section>
  );
}

export default AboutSection;
