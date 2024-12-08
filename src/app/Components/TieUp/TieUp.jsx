// TieUp.jsx
'use client'
import React, { useMemo, memo } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Image from 'next/image';
import unvImage from '../../../../public/unv/unv.webp';
import hikvisionImage from '../../../../public/hikvision/hikvision.webp';
import dahuaImage from '../../../../public/dahua/dahua.webp';
import whiteBg from '../../../../public/white.webp';


// Define metadata for the page
export const metadata = {
  title: 'Our Featured Clients | Your Company Name',
  description: 'Discover our featured clients and partners who trust us for their business needs. Learn more about our collaborations and success stories.',
  keywords: 'featured clients, business partners, collaborations, Your Company Name',
};

const TieUpSection = styled.section`
  position: relative;
  background: linear-gradient(165deg, 
    rgba(37, 99, 235, 0.95) 0%, 
    rgba(37, 99, 235, 0.4) 25%, 
    rgba(0, 0, 0, 0) 50%),
    url(${whiteBg.src});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 6rem 0;
  overflow: hidden;
`;

const TieUp = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const features = useMemo(
    () => [
      {
        id: 1,
        title: 'Premium Client',
        company: 'Uniview Technologies Co., Ltd.',
        description:
          'Uniview is a global leader in video surveillance solutions, renowned for its innovative technologies, high-quality products, and commitment to providing comprehensive security solutions. ',
        image: unvImage,
        stats: '500+ Projects Delivered',
        color: 'bg-sky-50',
        link: '/unv',
      },
      {
        id: 2,
        title: 'Enterprise Partner',
        company: 'Hikvision Digital Technology Co., Ltd.',
        description:
          'Hikvision’s leadership in the security industry is underpinned by their dedication to innovation. They continuously push the boundaries of what is possible in surveillance technology, offering features like AI-powered .',
        image: hikvisionImage,
        stats: '100+ Countries Served',
        color: 'bg-blue-50',
        link: '/Hikvision',
      },
      {
        id: 3,
        title: 'Strategic Client',
        company: 'Dahua Technology Co., Ltd',
        description:
          'Dahua’s technological leadership is demonstrated by innovations such as AI-powered surveillance systems, thermal imaging, and facial recognition technology. ',
        image: dahuaImage,
        stats: '50M+ Users Reached',
        color: 'bg-indigo-50',
        link: '/dahua',
      },
    ],
    []
  );

  const FeatureCard = memo(({ feature }) => (
    <motion.div
      key={feature.id}
      role="listitem"
      aria-label={`${feature.company} Feature Card`}
      variants={cardVariants}
      whileHover={{
        scale: 1.03,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.08)',
      }}
      className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100"
    >
      <div
        className="relative h-48 mb-6 group flex items-center justify-center"
        role="img"
        aria-label={`${feature.company} Image`}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="absolute w-3/4 h-3/4 rounded-xl overflow-hidden"
        >
          <Image
            src={feature.image}
            alt={feature.company}
            fill
            className="object-contain transform transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      </div>

      <motion.h3
        className="text-2xl font-bold text-gray-900 mb-2 hover:text-gray-700 transition-colors duration-300"
        whileHover={{ scale: 1.02 }}
      >
        {feature.title}
      </motion.h3>

      <motion.h4 className="text-xl font-semibold text-gray-700 mb-4">
        {feature.company}
      </motion.h4>

      <motion.p className="text-gray-600 mb-6 leading-relaxed">
        {feature.description}
      </motion.p>

      <div className="flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-gray-50 px-4 py-2 rounded-full font-medium text-sm text-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
        >
          {feature.stats}
        </motion.div>

        <motion.a
          href={feature.link}
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-gray-900 px-4 py-2 rounded-full font-medium text-sm text-white shadow-sm hover:shadow-md hover:bg-gray-800 transition-all duration-300"
        >
          Learn More
        </motion.a>
      </div>
    </motion.div>
  ));

  return (
    <TieUpSection aria-label="Featured Clients Section">
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-blue-900 mb-4"
          >
            Our Featured Clients
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-black font-medium"
          >
            Trusted by industry leaders worldwide
          </motion.p>
        </motion.div>

        <motion.div
          role="list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </motion.div>
      </div>
    </TieUpSection>
  );
};

export default memo(TieUp);
