import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative bg-[#0e0e0e]"
    >

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="py-6">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Ayush. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer; 