import React, { memo } from 'react';
import { motion } from 'framer-motion';

const ProcessStep = memo(({ step, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="relative z-10">
        <div className="text-4xl mb-6">{step.icon}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {step.title}
        </h3>
        <p className="text-gray-600">
          {step.description}
        </p>
      </div>
      {index < 3 && (
        <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-blue-200 transform -translate-y-1/2" />
      )}
    </motion.div>
  );
});

export default ProcessStep;