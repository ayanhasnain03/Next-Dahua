'use client'
import React from 'react';
import { motion } from 'framer-motion';

export const GradientButton = ({ children }) => (
  <motion.button
    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 
               text-white rounded-full font-medium transform transition 
               hover:scale-105 hover:shadow-lg"
  >
    {children}
  </motion.button>
);

export const OutlineButton = ({ children }) => (
  <motion.button
    className="px-8 py-4 border border-purple-200 text-gray-700 
               rounded-full font-medium transform transition 
               hover:border-purple-400 hover:shadow-lg"
  >
    {children}
  </motion.button>
);