import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function ImageModal({ isOpen, onClose, image, title, description }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-lg overflow-hidden max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="relative">
              <img
                src={image}
                alt={title}
                className="w-full h-[400px] object-cover"
              />
              <motion.button
                className="absolute top-4 right-4 bg-white rounded-full p-2 text-gray-800 hover:text-gray-600"
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ×
              </motion.button>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4">{title}</h2>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ImageModal;

