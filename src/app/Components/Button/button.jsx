'use client';

import React from 'react';
import { motion } from 'framer-motion';


const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  loading = false,
  disabled = false,
  ...props
}) => {
  // Base styles for all buttons
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 relative overflow-hidden';

  // Size variations
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm min-w-[100px]',
    md: 'px-6 py-2.5 text-base min-w-[120px]',
    lg: 'px-8 py-3 text-lg min-w-[140px]',
  };

  // Variant styles
  const variantStyles = {
    primary: `
      bg-gradient-to-r from-gray-900 to-gray-700 text-white hover:from-gray-800 hover:to-gray-600 
      shadow-md hover:shadow-lg active:shadow-inner disabled:from-gray-400 disabled:to-gray-300
      backdrop-filter backdrop-blur-sm`,
    secondary: `
      bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 
      hover:border-gray-300 active:bg-gray-100 disabled:bg-gray-50 disabled:text-gray-400
      shadow-sm hover:shadow`,
    outline: `
      border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white 
      active:bg-gray-900 disabled:border-gray-300 disabled:text-gray-300
      shadow-sm hover:shadow-md`,
  };

  // Animation variants
  const buttonVariants = {
    hover: { scale: 1.015, transition: { duration: 0.2, ease: 'easeInOut' } },
    tap: { scale: 0.985 },
    disabled: { scale: 1, opacity: 0.65 },
  };

  // Loading spinner animation
  const spinTransition = { repeat: Infinity, ease: 'linear', duration: 1 };

  return (
    <motion.button
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      variants={buttonVariants}
      whileHover={!disabled && !loading ? 'hover' : undefined}
      whileTap={!disabled && !loading ? 'tap' : undefined}
      animate={disabled ? 'disabled' : 'default'}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <motion.span
          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={spinTransition}
        />
      ) : (
        <>
          {icon && <span className="mr-2">{icon}</span>}
          {children}
        </>
      )}

      {/* Hover effect overlay */}
      <motion.div
        className="absolute inset-0 bg-white mix-blend-soft-light"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.1 }}
      />
    </motion.button>
  );
};

// Add displayName for better debugging
Button.displayName = 'Button';

// Use React.memo for performance optimization
export default React.memo(Button);
