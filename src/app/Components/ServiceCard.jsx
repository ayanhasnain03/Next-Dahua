import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const ServiceCard = memo(({ service, index }) => (
  <motion.article
    key={service.id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    whileHover={{ 
      y: -8, 
      scale: 1.02,
      transition: { duration: 0.3 } 
    }}
    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
  >
    <motion.div 
      className="text-4xl mb-4"
      whileHover={{ 
        scale: 1.2,
        rotate: [0, -10, 10, 0],
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300,
        duration: 0.6 
      }}
    >
      {service.icon}
    </motion.div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">
      {service.title}
    </h3>
    <p className="text-gray-600 mb-6">
      {service.description}
    </p>
    <ul className="space-y-2">
      {service.features.map((feature, idx) => (
        <motion.li 
          key={idx} 
          className="flex items-center text-gray-600"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + (idx * 0.1) }}
        >
          <FiCheck className="text-blue-600 mr-2 flex-shrink-0" />
          <span>{feature}</span>
        </motion.li>
      ))}
    </ul>
  </motion.article>
));

export default ServiceCard;