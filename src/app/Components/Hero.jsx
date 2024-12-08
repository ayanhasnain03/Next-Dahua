'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import heroImage from '../../../public/hero.webp';
import whiteBg from '../../../public/white.webp';
import Image from 'next/image';
import Script from 'next/script';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Custom Hook: Count Animation
const useCountAnimation = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime;
    let animationFrame;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      if (progress < duration) {
        const nextCount = Math.min(end, (progress / duration) * end);
        setCount(nextCount);
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);
  
  return count;
};

// Add these styled components
const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  background: linear-gradient(165deg, rgba(37, 99, 235, 0.95) 0%, rgba(37, 99, 235, 0.4) 25%, rgba(0, 0, 0, 0) 50%),
    url(${whiteBg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  padding: 0;
  overflow: hidden;

  @media (max-width: 768px) {
    background-attachment: scroll;
    min-height: auto;
    padding: 2rem 0;
  }
`;

const Hero = () => {
  // Add ref for animations
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const statsRef = useRef(null);
  const imageRef = useRef(null);

  // Initialize animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation without SplitText
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "back.out(1.7)",
      });

      // Description paragraphs animation
      gsap.from(descriptionRef.current.children, {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
      });

      // Image animation
      gsap.from(imageRef.current, {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse"
        }
      });

      // Stats animation
      gsap.from(statsRef.current.children, {
        opacity: 0,
        y: 50,
        scale: 0.8,
        stagger: 0.1,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top center+=200",
          toggleActions: "play none none reverse"
        }
      });

      // Add floating animation to image
      gsap.to(imageRef.current, {
        y: 20,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Move animation variants outside component to prevent recreation on each render
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Memoize complex components and handlers
  const StatItem = React.memo(({ stat, index }) => {
    const isPercentage = stat.number.includes('%');
    const isTime = stat.number.includes('/');
    const isPlus = stat.number.includes('+');
    
    const numericValue = parseInt(stat.number.replace(/[^0-9]/g, ''));
    const animatedValue = useCountAnimation(numericValue);
    
    const formatValue = () => {
      if (isTime) return '24/7';
      let value = Math.round(animatedValue);
      if (isPercentage) return `${value}%`;
      if (isPlus) return `${value}+`;
      return value;
    };

    return (
      <motion.li
        key={index}
        variants={scaleIn}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 15px 30px rgba(0, 0, 0, 0.08)",
          y: -8,
          background: "linear-gradient(45deg, rgba(255, 255, 255, 0.95), rgba(249, 250, 251, 0.98))"
        }}
        className="text-center p-4 rounded-xl bg-white shadow-sm transition-all duration-300 border border-sky-100"
      >
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 + index * 0.2 }}
          className="text-3xl font-bold bg-gradient-to-r from-sky-800 to-blue-600 bg-clip-text text-transparent"
        >
          {formatValue()}
        </motion.div>
        <div className="text-sky-900 font-medium mt-1">{stat.label}</div>
      </motion.li>
    );
  });

  // Memoize stats data
  const stats = React.useMemo(() => [
    { number: "98%", label: "Success Rate" },
    { number: "24/7", label: "Support" },
    { number: "100+", label: "Countries" },
  ], []);

  // Use CSS transform instead of motion.div for simple animations
  const backgroundStyle = {
    transform: 'translate(-50%, -50%)',
    animation: 'float 6s ease-in-out infinite',
  };

  // Stagger children animation variant
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  // Add these new animation variants
  const slideIn = {
    hidden: { x: -60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  // Add new floating animation variant
  const float = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Add new shine animation variant
  const shine = {
    initial: { backgroundPosition: "-200%" },
    animate: {
      backgroundPosition: "200%",
      transition: {
        repeat: Infinity,
        duration: 4,
        ease: "linear"
      }
    }
  };

  return (
    <>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": "https://digitallink-sa.com/#website",
                "url": "https://www.digitallink Sauditech.com",
                "name": "digitallink Saudi Technology",
                "description": "Innovative Solutions for Your Business",
                "publisher": {
                  "@id": "https://digitallink-sa.com/#organization"
                }
              },
              {
                "@type": "Organization",
                "@id": "https://digitallink-sa.com/#organization",
                "name": "digitallink Saudi Technology",
                "url": "https://www.digitallink Sauditech.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://digitallink-sa.com/logo.png"
                },
                "sameAs": [
                  "https://www.linkedin.com/company/digitallink Sauditech",
                  "https://twitter.com/digitallink Sauditech"
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "500",
                  "bestRating": "5"
                }
              },
              {
                "@type": "Service",
                "serviceType": "Digital Transformation",
                "provider": {
                  "@id": "https://digitallink-sa.com/#organization"
                },
                "areaServed": {
                  "@type": "Country",
                  "name": "Global"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Digital Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Business Analytics",
                        "description": "Advanced analytics solutions for business optimization"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Process Automation",
                        "description": "Seamless automation solutions for increased efficiency"
                      }
                    }
                  ]
                }
              },
              {
                "@type": "WebPage",
                "@id": "https://digitallink-sa.com/#webpage",
                "url": "https://www.digitallink Sauditech.com",
                "name": "digitallink Saudi Technology - Innovative Solutions for Your Business",
                "description": "Discover digitallink Saudi Technology's innovative solutions to take your business to the next level.",
                "isPartOf": {
                  "@id": "https://digitallink-sa.com/#website"
                },
                "about": {
                  "@id": "https://digitallink-sa.com/#organization"
                },
                "breadcrumb": {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "item": {
                        "@id": "https://digitallink-sa.com/",
                        "name": "Home"
                      }
                    }
                  ]
                }
              }
            ]
          })
        }}
      />
      
      <HeroSection ref={heroRef} aria-label="Hero Section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-32 pb-16 relative">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Content */}
            <article className="flex-1 text-center lg:text-left space-y-6 sm:space-y-8 pt-4 sm:pt-0">
              <h1 ref={headingRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-sky-800 via-blue-600 to-sky-800 bg-[length:200%_auto] bg-clip-text text-transparent">
                  Transform Your
                </span>
                <br />
                <span className="text-gray-900">
                  Digital Future
                </span>
              </h1>

              <div ref={descriptionRef} className="space-y-4 px-4 sm:px-0">
                <motion.p
                  variants={fadeUp}
                  className="text-base sm:text-lg md:text-xl text-sky-900 max-w-xl mx-auto lg:mx-0"
                >
                  Discover our innovative solutions to take your business to the next level. Our proven strategies have helped over 500+ businesses achieve remarkable growth in the digital landscape.
                </motion.p>

                <motion.p
                  variants={fadeUp}
                  className="text-sm sm:text-base md:text-lg text-sky-800/80 max-w-xl mx-auto lg:mx-0"
                >
                  We specialize in cutting-edge digital transformation, delivering customized strategies that drive growth and enhance your market presence. With a track record of 98% client satisfaction and average ROI improvement of 150%.
                </motion.p>

                <motion.p
                  variants={fadeUp}
                  className="text-sm sm:text-base md:text-lg text-sky-800/80 max-w-xl mx-auto lg:mx-0"
                >
                  From advanced analytics to seamless automation, our comprehensive suite of services helps businesses optimize operations, increase efficiency, and achieve sustainable success in today's competitive landscape.
                </motion.p>
              </div>
            </article>

            {/* Right Image Section */}
            <div ref={imageRef} className="flex-1 lg:block mt-8 lg:mt-0 px-4 sm:px-0">
              <Image
                src={heroImage}
                alt="Transform Your Business"
                className="w-full h-[250px] sm:h-[300px] lg:h-auto object-cover rounded-lg shadow-lg"
                priority
                width={800}
                height={600}
              />
            </div>
          </div>
          
          {/* Stats Section */}
          <div ref={statsRef} className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
            {stats.map((stat, index) => (
              <StatItem key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </HeroSection>
    </>
  );
};

export default Hero;
