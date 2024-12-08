'use client';
import Link from 'next/link';
import Image from 'next/image';
import hikvision1 from '../../../public/hikvision/hikvision_1.webp';
import hikvisionOverview from '../../../public/hikvision/hikvision1.webp';
import ipCamera from '../../../public/hikvision/ip camera.webp';
import nvrSystems from '../../../public/hikvision/NVR Systems.webp';
import hikCentral from '../../../public/hikvision/HikCentral-FocSign-thumbnail.webp';

export const metadata = {
  title: 'Hikvision Technology | Your Company Name',
  description: 'Discover Hikvision Technology\'s innovative security solutions and services. Learn more about our mission, vision, and featured products.',
  keywords: 'Hikvision Technology, security solutions, IoT, AI, video surveillance',
};

const Hikvision = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section - Updated content */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Leading the Future of
                <span className="block text-blue-600">Security Innovation</span>
              </h1>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
                Hikvision is a world-leading provider of security products and solutions. We deliver cutting-edge 
                AI-powered surveillance technology, IoT devices, and smart solutions that help create a safer and 
                more efficient world for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                <Link 
                  href="/Contact" 
                  className="px-6 md:px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Contact Us →
                </Link>
              </div>
            </div>
            {/* Image */}
            <div className="flex-1 mt-8 md:mt-0">
              <div className="relative px-4 md:px-0">
                <div className="absolute inset-0 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
                <Image
                  src={hikvision1}
                  alt="Company Overview"
                  className="relative w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who is Hikvision Section - Updated content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Who is Hikvision
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Hikvision is an IoT solution provider with video as its core competency. Founded in 2001, 
                Hikvision now has more than 42,000 employees and over 20,000 R&D engineers. The company 
                annually invests 8% to 10% of its annual sales revenue to research and development for 
                continued product innovation.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Our comprehensive product line spans multiple categories including video surveillance, access 
                control, intercom systems, and alarm systems. Beyond security, Hikvision has expanded into 
                smart home technology, industrial automation, and automotive electronics to achieve its 
                long-term vision of expanding channels for growth through innovation.
              </p>
            </div>
            <div className="flex-1">
              <Image
                src={hikvisionOverview}
                alt="Hikvision Overview"
                className="w-full rounded-lg shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="space-y-6 p-8 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              <p className="text-gray-600">
                To explore innovative ways to better perceive and understand the world,
                empower vision for decision-makers and practitioners, and work together
                to enhance safety and advance sustainable development around the world.
              </p>
            </div>

            {/* Vision */}
            <div className="space-y-6 p-8 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                  <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              <p className="text-gray-600">
                To lead the future of AIoT solutions through machine perception, artificial
                intelligence, and big data, creating a safer and smarter world for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section - Updated product descriptions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Featured Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of professional security solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "IP Cameras",
                image: ipCamera,
                description: "Hikvision's comprehensive IP camera range features advanced AI capabilities, superior image quality, and robust build quality. From basic surveillance to advanced analytics, our cameras deliver reliable performance in any environment.",
                tag: "Best Seller"
              },
              {
                name: "NVR Systems",
                image: nvrSystems,
                description: "Our Network Video Recorders combine powerful recording capabilities with intelligent features like deep learning analytics and smart search. These systems offer seamless integration with Hikvision cameras and third-party devices.",
                tag: "Popular"
              },
              {
                name: "HikCentral",
                image: hikCentral,
                description: "HikCentral is our comprehensive video management platform that unifies security, business intelligence, and operations management. It offers powerful features like facial recognition, vehicle management, and visitor management.",
                tag: "Enterprise"
              }
            ].map((product) => (
              <div key={product.name} className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <Link
                        href="/Contact"
                        className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                      >
                        Learn More →
                      </Link>
                      <span className="text-gray-500 text-sm">{product.tag}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Clients' },
              { number: '100+', label: 'Projects' },
              { number: '10+', label: 'Years' },
              { number: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl font-bold mb-2 bg-blue-400/30 rounded-lg py-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const HikvisionJsonLd = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://www.hikvision.com/#organization",
              "name": "Hikvision Technology",
              "url": "https://www.hikvision.com",
              "foundingDate": "2001",
              "description": "World-leading provider of security products and solutions",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.hikvision.com/logo.png"
              },
              "sameAs": [
                "https://www.linkedin.com/company/hikvision",
                "https://twitter.com/hikvision"
              ],
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "value": "42000"
              }
            },
            {
              "@type": "Product",
              "name": "IP Cameras",
              "description": "Advanced AI-powered surveillance cameras with superior image quality",
              "category": "Security Cameras",
              "brand": {
                "@type": "Brand",
                "name": "Hikvision"
              },
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              }
            },
            {
              "@type": "Product",
              "name": "NVR Systems",
              "description": "Network Video Recorders with deep learning analytics",
              "category": "Security Systems",
              "brand": {
                "@type": "Brand",
                "name": "Hikvision"
              },
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              }
            },
            {
              "@type": "Product",
              "name": "HikCentral",
              "description": "Comprehensive video management platform with AI capabilities",
              "category": "Security Software",
              "brand": {
                "@type": "Brand",
                "name": "Hikvision"
              },
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              }
            },
            {
              "@type": "WebPage",
              "@id": "https://www.hikvision.com/#webpage",
              "url": "https://www.hikvision.com",
              "name": "Hikvision Technology - Security Solutions",
              "description": "Discover Hikvision's innovative security solutions",
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                      "@id": "https://www.hikvision.com/",
                      "name": "Home"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                      "@id": "https://www.hikvision.com/products/",
                      "name": "Products"
                    }
                  }
                ]
              }
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is Hikvision's core competency?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hikvision is an IoT solution provider with video as its core competency, specializing in AI-powered surveillance technology and smart solutions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How many R&D engineers does Hikvision employ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hikvision employs over 20,000 R&D engineers and invests 8% to 10% of annual sales revenue in research and development."
                  }
                }
              ]
            }
          ]
        })
      }}
    />
  );
};

export default Hikvision;