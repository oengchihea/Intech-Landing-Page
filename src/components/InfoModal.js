import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import HEAImage from '../images/hea.jpg';

function InfoModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center overflow-y-auto py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div 
            className="bg-white rounded-lg p-8 max-w-4xl w-full m-4 relative"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              ×
            </motion.button>
            
            {/* Company Overview */}
            <motion.div 
              className="mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold mb-4">About InTech</h2>
              <p className="text-gray-600 mb-4">
                InTech is a leading provider of smart workplace solutions, specializing in innovative technology 
                that transforms how businesses operate. Founded in 2020, we've quickly become an industry leader 
                in workplace efficiency and security solutions.
              </p>
            </motion.div>

            {/* Star Rating */}
            <motion.div 
              className="mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-3">Company Rating</h3>
              <div className="flex items-center gap-2 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-6 h-6 text-yellow-400 fill-current"
                  />
                ))}
                <span className="text-gray-600 ml-2">5.0 out of 5</span>
              </div>
              <p className="text-sm text-gray-500">Based on 1,000+ client reviews</p>
            </motion.div>

            {/* CEO Profile */}
            <motion.div 
              className="flex items-start gap-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-32 h-32 flex-shrink-0">
                <img
                  src={HEAImage}
                  alt="CEO"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Oeng Chihea</h3>
                <p className="text-gray-600 font-medium mb-1">CEO & Founder</p>
                <p className="text-gray-600 mb-4">
                  With over 15 years of experience in technology and workplace solutions, 
                  chihea has led InTech from a startup to an industry leader in smart workplace technology.
                </p>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    LinkedIn Profile
                  </a>
                  <a 
                    href="#" 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Twitter Profile
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Key Achievements */}
            <motion.div 
              className="mt-8 pt-8 border-t"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-400 mb-2">500+</div>
                  <div className="text-gray-600">Clients Worldwide</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-400 mb-2">98%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-400 mb-2">24/7</div>
                  <div className="text-gray-600">Support Available</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default InfoModal;