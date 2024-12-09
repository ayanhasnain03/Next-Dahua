import React, { memo } from 'react';
import { motion } from 'framer-motion';

const FAQItem = memo(({ faq, index }) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ 
      scale: 1.02,
      backgroundColor: "rgba(255, 255, 255, 0.9)" 
    }}
    className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg"
  >
    <h3 
      className="text-lg font-semibold text-gray-900 mb-2"
      itemProp="name"
    >
      {faq.question}
    </h3>
    <div
      itemScope
      itemProp="acceptedAnswer"
      itemType="https://schema.org/Answer"
    >
      <p className="text-gray-600" itemProp="text">
        {faq.answer}
      </p>
    </div>
  </motion.div>
));

export default FAQItem;