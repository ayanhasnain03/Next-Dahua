'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import styled from 'styled-components';
import NavBar from '../Components/NavBar';
import { GradientButton, OutlineButton } from '../Components/Button/Button1';
import whiteImg from '../../../public/white.webp';
import heroImg from '../../../public/hero.webp';

const CountingNumber = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });
  
  useEffect(() => {
    if (inView) {
      let startTime;
      let animationFrame;
      
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        
        const percentage = Math.min(progress / duration, 1);
        const currentCount = Math.floor(end * percentage);
        
        setCount(currentCount);
        
        if (progress < duration) {
          animationFrame = requestAnimationFrame(animate);
        }
      };
      
      animationFrame = requestAnimationFrame(animate);
      
      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [end, duration, inView]);
  
  return (
    <span ref={ref}>
      {count}
    </span>
  );
};

const HeroSection = styled.div`
  position: relative;
  min-height: 100vh;
  background: linear-gradient(165deg, rgba(37, 99, 235, 0.95) 0%, rgba(37, 99, 235, 0.4) 25%, rgba(0, 0, 0, 0) 50%), url(${whiteImg.src});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  padding: 0;
  overflow: hidden;
`;

const HeroContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  z-index: 10;
  padding-top: 128px;

  @media (max-width: 768px) {
    padding: 128px 24px 0;
    text-align: center;
  }
`;

const MainHeading = styled.span`
  display: block;
  font-size: 0.875rem;
  color: #2563eb;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 500;
  position: relative;
  padding-left: 45px;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 30px;
    height: 1px;
    background: linear-gradient(90deg, #2563eb, transparent);
    transform: scaleX(0);
    animation: lineGrow 0.8s ease-out 0.5s forwards;
  }
  
  @keyframes lineGrow {
    to { transform: scaleX(1); }
  }
  
  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding-left: 0;
    margin-bottom: 0.5rem;
    
    &:before {
      display: none;
    }
  }
`;

const SubHeading = styled.span`
  display: block;
  font-size: 3.5rem;
  font-weight: 500;
  color: #1e293b;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  max-width: 600px;
  background: linear-gradient(120deg, #1e293b, #2563eb);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.5px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #334155;
  margin: 1.5rem 0 2.5rem;
  max-width: 450px;
  line-height: 1.6;
  font-weight: 400;
  letter-spacing: 0.2px;
  opacity: 0;
  animation: fadeIn 1s ease-out 0.3s forwards;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin: 1rem auto 2rem;
    text-align: center;
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  opacity: 0;
  animation: fadeUp 1s ease-out 0.9s forwards;

  @media (max-width: 640px) {
    justify-content: center;
  }
`;

const ServiceButton = styled(Link)`
  padding: 1.2rem 3rem;
  font-size: 0.95rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  border: 2px solid rgba(37, 99, 235, 0.3);
  border-radius: 4px;
  color: #2563eb;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  background: white;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(37, 99, 235, 0.1),
      transparent
    );
    transition: 0.5s;
  }

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(37, 99, 235, 0.8);
    box-shadow: 0 10px 20px rgba(37, 99, 235, 0.1);

    &::before {
      left: 100%;
    }
  }
`;

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Handle resize events
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Trigger animations when in view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  const milestones = [
    {
      period: '2020',
      title: 'Establishment & Foundation',
      description: 'Founded with a vision to revolutionize enterprise solutions through cutting-edge technology and strategic innovation.',
      achievements: [
        'Initial seed funding of $2M secured',
        'Core team of industry experts assembled',
        'First enterprise client partnership established'
      ],
      metrics: {
        growth: '+127%',
        clients: '10+',
        team: '15'
      },
      color: 'from-blue-600 to-indigo-600'
    },
    {
      period: '2021',
      title: 'Market Expansion & Growth',
      description: 'Expanded operations globally while strengthening our technological infrastructure and service offerings.',
      achievements: [
        'Opened offices in 3 major cities',
        'Launched enterprise solution suite',
        'Strategic partnerships with Fortune 500 companies'
      ],
      metrics: {
        growth: '+215%',
        clients: '50+',
        team: '75'
      },
      color: 'from-indigo-600 to-violet-600'
    },
    // Add more milestones as needed
  ];

  // Mobile menu component
  const MobileMenu = React.memo(() => {
    return (
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 'auto' }}
        exit={{ height: 0 }}
        className="lg:hidden"
      >
        {/* Mobile navigation items */}
      </motion.div>
    );
  });

  // Mobile-specific touch interactions
  const handleTouchStart = (e) => {
    // Handle touch interactions
  };

  return (
    <>
      <HeroSection>
        <HeroContent>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="space-y-6"
              >
                {/* Badge */}
                <motion.div 
                  className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-blue-600 mr-2">★</span>
                  <span className="text-blue-600 text-sm font-medium">Trusted by Fortune 500 Companies</span>
                </motion.div>

                <h1>
                  <MainHeading>About Our Company</MainHeading>
                  <SubHeading>Transforming Ideas Into Digital Reality</SubHeading>
                </h1>
                <Description>
                  We are dedicated to delivering innovative solutions that drive real business 
                  growth and transformation. Our expertise and commitment to excellence set 
                  us apart in the digital landscape.
                </Description>
                <ButtonContainer
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  <ServiceButton href="/Service">Our Services</ServiceButton>
                </ButtonContainer>
              </motion.div>
            </div>
          </div>
        </HeroContent>
      </HeroSection>

      <div className="min-h-screen bg-white overflow-hidden relative">
        {/* Updated Background Layer */}
        <div className="fixed inset-0 -z-10">
          {/* Primary floating circles - Made more subtle */}
          <motion.div
            animate={{ 
              y: [-10, 10],
              x: [-10, 10],
              rotate: [0, 360],
            }}
            transition={{ 
              duration: isMobile ? 15 : 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-[20%] right-[10%] w-[200px] h-[200px] 
                       md:w-[500px] md:h-[500px]
                       bg-gradient-to-r from-gray-50 to-blue-50/30 
                       rounded-full blur-[50px] md:blur-[100px]"
          />

          <motion.div
            animate={{ 
              y: [10, -10],
              x: [10, -10],
              rotate: [360, 0],
            }}
            transition={{ 
              duration: isMobile ? 20 : 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-[20%] left-[10%] w-[250px] h-[250px] 
                       md:w-[600px] md:h-[600px]
                       bg-gradient-to-r from-blue-50/30 to-gray-50 
                       rounded-full blur-[50px] md:blur-[100px]"
          />
        </div>

        <NavBar />
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center py-16 md:py-24 px-4 md:px-8">
          {/* Mobile-optimized background elements */}
          <div className="absolute inset-0 -z-10">
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: isMobile ? 15 : 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/4 right-1/4 w-[200px] md:w-[500px] h-[200px] md:h-[500px] 
                         bg-gradient-to-r from-purple-300/20 to-blue-300/20 rounded-full blur-3xl"
            />
          </div>

          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
              {/* Content Section */}
              <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={fadeInUp}
                className="w-full lg:w-1/2 order-2 lg:order-1"
              >
                {/* Mobile-optimized heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold 
                             tracking-tight leading-tight text-gray-800 mb-6 md:mb-8">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="block"
                  >
                    Our Overview
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="block text-transparent bg-clip-text bg-gradient-to-r 
                             from-purple-600 to-blue-600"
                  >
                    & History
                  </motion.span>
                </h1>

                {/* Mobile-optimized description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed 
                           max-w-2xl"
                >
                  Our unwavering dedication to our clients' success has paid off – 
                  we're thrilled to announce that our digital marketing efforts have 
                  been recognized with both a nomination and an award. At our core, 
                  we strive for excellence in everything we do.
                </motion.p>

                {/* Mobile-friendly CTA buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="mt-8 flex flex-col sm:flex-row gap-4"
                >
                </motion.div>
              </motion.div>

              {/* Graph/Image Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
                className="w-full lg:w-1/2 order-1 lg:order-2"
              >
                <motion.div 
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                  whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Responsive image container */}
                  <div className="relative aspect-w-16 aspect-h-12 md:aspect-h-9">
                    <motion.img 
                      src={heroImg.src}
                      alt="Growth Chart 2023"
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      loading="lazy"
                    />
                    
                    {/* Animated overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-tr"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      style={{
                        background: "linear-gradient(to top right, rgba(147, 51, 234, 0.2), transparent, transparent)"
                      }}
                    />
                  </div>
                </motion.div>

                {/* Animated decorative background */}
                <motion.div 
                  className="absolute -z-10 -right-2 md:-right-4 -bottom-2 md:-bottom-4 
                            w-full h-full rounded-3xl bg-gradient-to-r 
                            from-purple-200 to-blue-200"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 0.5, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  whileHover={{ opacity: 0.7 }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Updated Vision & Mission Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Vision Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative p-8 md:p-12 rounded-3xl bg-white border border-gray-100 shadow-sm
                            hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-2xl" />
                  <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Our Vision
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    To revolutionize digital experiences through innovative solutions that empower businesses 
                    to thrive in an ever-evolving digital landscape.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {['Innovation', 'Excellence', 'Growth'].map((value, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 rounded-full text-sm font-medium bg-white shadow-sm border border-gray-100"
                      >
                        {value}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Mission Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative p-8 md:p-12 rounded-3xl bg-white border border-gray-100 shadow-sm
                            hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl" />
                  <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    To deliver exceptional digital solutions that drive measurable results, fostering lasting 
                    partnerships with our clients through innovation and dedication.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {['Client Success', 'Innovation', 'Partnership'].map((value, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 rounded-full text-sm font-medium bg-white shadow-sm border border-gray-100"
                      >
                        {value}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Updated Key Features Section */}
        <section className="py-24 bg-gray-50/50 relative">
          <div className="absolute inset-0 -z-10">
            <motion.div
              animate={{ 
                rotate: -360,
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] 
                         bg-gradient-to-r from-cyan-200/20 to-blue-200/20 
                         rounded-full blur-3xl"
            />
          </div>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-7xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
                Why Choose Us
              </h2>
              <p className="text-gray-600 text-center max-w-3xl mx-auto mb-20">
                We combine innovation with reliability to deliver exceptional digital solutions 
                that drive real business growth and transformation.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: "💡",
                    title: "Innovative Solutions",
                    description: "Cutting-edge technology and creative approaches to solve complex business challenges.",
                    color: "from-purple-600 to-indigo-600"
                  },
                  {
                    icon: "🚀",
                    title: "Rapid Deployment",
                    description: "Swift implementation and deployment strategies to get your solutions up and running quickly.",
                    color: "from-indigo-600 to-blue-600"
                  },
                  {
                    icon: "🛠️",
                    title: "Scalable Architecture",
                    description: "Build solutions that grow with your business, ensuring long-term sustainability.",
                    color: "from-blue-600 to-cyan-600"
                  },
                  {
                    icon: "🤝",
                    title: "Dedicated Support",
                    description: "24/7 expert support and maintenance to keep your systems running smoothly.",
                    color: "from-cyan-600 to-teal-600"
                  },
                  {
                    icon: "📊",
                    title: "Data-Driven Insights",
                    description: "Advanced analytics and reporting to make informed business decisions.",
                    color: "from-teal-600 to-green-600"
                  },
                  {
                    icon: "🔒",
                    title: "Enterprise Security",
                    description: "Top-tier security measures to protect your valuable business assets.",
                    color: "from-green-600 to-emerald-600"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 
                              hover:shadow-xl transition-all duration-300"
                  >
                    <div className="mb-6 text-4xl">{feature.icon}</div>
                    <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${feature.color} 
                                  bg-clip-text text-transparent`}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                    <motion.div
                      className="mt-6"
                      whileHover={{ scale: 1.05 }}
                    >
                      <a
                        href="#"
                        className={`inline-flex items-center text-sm font-medium 
                                  bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}
                      >
                        Learn more
                        <svg
                          className={`ml-2 w-4 h-4 bg-gradient-to-r ${feature.color} bg-clip-text`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Updated Achievement Metrics Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <motion.div
              animate={{ 
                rotate: 180,
                scale: [1, 1.15, 1],
              }}
              transition={{ 
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                         w-[500px] h-[500px] bg-gradient-to-r from-blue-200/30 to-cyan-200/30 
                         rounded-full blur-3xl"
            />
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { number: 500, label: 'Clients Worldwide', icon: '🌍', suffix: '+' },
                  { number: 98, label: 'Client Retention', icon: '🤝', suffix: '%' },
                  { number: 150, label: 'Team Members', icon: '👥', suffix: '+' },
                  { number: 25, label: 'Countries Served', icon: '🌐', suffix: '+' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300/20 to-cyan-300/20 
                                  rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative bg-white rounded-2xl p-8 
                                  border border-gray-100 shadow-sm 
                                  hover:shadow-xl transition-all duration-300">
                      <div className="text-4xl mb-4">{stat.icon}</div>
                      <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-cyan-500 
                                    bg-clip-text text-transparent">
                        <CountingNumber end={stat.number} />
                        {stat.suffix}
                      </div>
                      <div className="text-blue-900/70">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Global Presence - With Animations */}
        <section className="py-12 md:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 
                           text-gray-800 px-4"
              >
                Global Presence
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {[
                  { 
                    region: 'Americas', 
                    offices: 5, 
                    clients: 200,
                    icon: '🌎',
                    gradient: 'from-blue-500 to-blue-600'
                  },
                  { 
                    region: 'Europe', 
                    offices: 3, 
                    clients: 150,
                    icon: '🌍',
                    gradient: 'from-blue-400 to-blue-500'
                  },
                  { 
                    region: 'Asia Pacific', 
                    offices: 4, 
                    clients: 150,
                    icon: '🌏',
                    gradient: 'from-blue-500 to-blue-600'
                  },
                ].map((region, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: isMobile ? index * 0.1 : index * 0.2,
                      duration: 0.5
                    }}
                    whileHover={!isMobile ? { y: -5 } : {}}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 
                              shadow-lg border border-blue-100 hover:shadow-xl 
                              transition-all duration-300 mx-4 sm:mx-0"
                  >
                    <div className="text-3xl md:text-4xl mb-3 md:mb-4">
                      {region.icon}
                    </div>
                    <h3 className={`text-xl md:text-2xl font-bold mb-3 md:mb-4 
                                   bg-gradient-to-r ${region.gradient} 
                                   bg-clip-text text-transparent`}>
                      {region.region}
                    </h3>
                    <div className="space-y-2 md:space-y-3">
                      <p className="text-gray-600 flex items-center justify-center gap-2 
                                   text-sm md:text-base">
                        <span className="font-semibold">{region.offices}</span> 
                        Global Offices
                      </p>
                      <p className="text-gray-600 flex items-center justify-center gap-2 
                                   text-sm md:text-base">
                        <span className="font-semibold">{region.clients}+</span> 
                        Active Clients
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
