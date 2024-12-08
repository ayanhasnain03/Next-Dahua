'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

// Static Data
const footerLinks = {
  company: [
    { name: 'About Us', href: '/About' },
    { name: 'Contact', href: '/Contact' },
  ],
  services: [
    { name: 'Web Development', href: '/Service' },
    { name: 'Mobile Apps', href: '/Service' },
    { name: 'Cloud Solutions', href: '/Service' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/Privacy' },
  ],
};

const socialLinks = [
  { icon: <FaTwitter size={20} />, href: 'https://twitter.com', label: 'Twitter' },
  { icon: <FaLinkedinIn size={20} />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <FaGithub size={20} />, href: 'https://github.com', label: 'GitHub' },
  { icon: <FaInstagram size={20} />, href: 'https://instagram.com', label: 'Instagram' },
];

// Animation Variants
const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const floatVariants = {
  initial: { y: 0 },
  animate: {
    y: [-20, 20],
    transition: { duration: 6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' },
  },
};

const pulseVariants = {
  initial: { scale: 1, opacity: 0.3 },
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
};

const spinVariants = {
  initial: { rotate: 0, scale: 1 },
  animate: {
    rotate: 360,
    scale: [1, 1.1, 1],
    transition: { duration: 15, repeat: Infinity, ease: 'linear' },
  },
};

// Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-sky-100">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={floatVariants}
          initial="initial"
          animate="animate"
          className="absolute top-20 left-[10%] w-64 h-64 bg-sky-200/50 rounded-full blur-3xl"
        />
        <motion.div
          variants={pulseVariants}
          initial="initial"
          animate="animate"
          className="absolute top-1/3 right-[20%] w-72 h-72 bg-sky-200/40 rounded-full blur-2xl"
        />
        <motion.div
          variants={spinVariants}
          initial="initial"
          animate="animate"
          className="absolute top-40 right-[30%] w-40 h-40"
          style={{ transformOrigin: 'center' }}
        >
          <div className="w-full h-full border-4 border-sky-200/40 rounded-3xl" />
        </motion.div>
      </div>

      {/* Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Company Name</h2>
            <p className="text-blue-700 mb-6 max-w-md">
              ⚡ Empowering businesses with innovative solutions. We're dedicated to transforming ideas into exceptional digital experiences. 
              From pixel-perfect designs to lightning-fast performance, we craft digital masterpieces that leave lasting impressions. 
              Let's build something extraordinary together! 🚀
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300 shadow-sm"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-blue-900 mb-4 capitalize">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-blue-700 hover:text-blue-900 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-blue-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-700 text-sm">© {currentYear} Company Name. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
