'use client';
import Image from 'next/image'
import Link from 'next/link'
import DahuaImage1 from '../../../public/dahua/AJHAU opt_1.webp'
import DahuaImage2 from '../../../public/dahua/AJHAU opt_2.webp'
import IpCameraImage from '../../../public/dahua/ipcamera.webp'
import SmartIotImage from '../../../public/dahua/Smart IoT Solutions.webp'
import AiAnalyticsImage from '../../../public/dahua/AI-Powered Analytics.webp'

export const metadata = {
  title: 'Dahua Technology | Your Company Name',
  description: 'Discover Dahua Technologys innovative security solutions and services. Learn more about our mission, vision, and featured products.',
  keywords: 'Dahua Technology, security solutions, IoT, AI, video surveillance',
}

export default function Dahua() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero/About Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Content */}
            <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Shaping Ideas into
                <span className="block text-blue-600">Security Innovation</span>
              </h1>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
                Dahua Technology Co., Ltd. is a world-leading video-centric smart IoT solution and service provider.
                Founded in 2001, Dahua has grown from a company with a single product to a global enterprise with
                cutting-edge technologies in AI, IoT, cloud services, and more.
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
                  src={DahuaImage1}
                  alt="Company Overview"
                  width={800}
                  height={600}
                  className="relative w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who is Dahua Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Who is Dahua
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Dahua Technology is a global leader in video-centric smart IoT solutions and services. With over 20 years
                of expertise in the industry, Dahua offers end-to-end security solutions, products, and services to create
                value for city operations, corporate management, and consumers.

                Our comprehensive product portfolio includes advanced IP cameras, AI-powered solutions, video management software,
                access control systems, and intelligent building management solutions. We're committed to continuous innovation
                and have established a complete R&D system to ensure cutting-edge technology development.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                With a workforce of over 20,000 employees worldwide, Dahua has established a global service network covering
                180+ countries and regions. Our solutions and products have been widely deployed in various fields including
                public security, traffic management, retail, banking & finance, energy, and smart building applications.
              </p>
            </div>
            <div className="flex-1">
              <Image
                src={DahuaImage2}
                alt="Dahua Overview"
                width={800}
                height={600}
                className="w-full rounded-lg shadow-xl"
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
                To enable a safer society and smarter living through continuous innovation and dedication
                to providing high-quality, professional smart IoT solutions and services that create value
                for customers worldwide.
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
                To be a world-leading video-centric smart IoT solution and service provider, empowering our
                customers to achieve digital transformation and sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
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
                name: "IP Surveillance",
                image: IpCameraImage,
                description: "Dahua's comprehensive IP surveillance solutions include cutting-edge cameras with advanced AI capabilities, thermal imaging, and precise facial recognition. Our cameras deliver exceptional image quality and intelligent features for enhanced security monitoring.",
                tag: "Best Seller"
              },
              {
                name: "Smart IoT Solutions",
                image: SmartIotImage,
                description: "Our integrated smart IoT solutions combine video surveillance with intelligent analytics, access control, and alarm systems. These solutions provide comprehensive security management for various scenarios, from small businesses to large enterprises.",
                tag: "Popular"
              },
              {
                name: "AI-Powered Analytics",
                image: AiAnalyticsImage,
                description: "Dahua's AI-powered video analytics platform leverages deep learning algorithms to provide intelligent features such as facial recognition, people counting, vehicle detection, and behavior analysis, enabling smarter security decisions.",
                tag: "Enterprise"
              }
            ].map((product) => (
              <div key={product.name} className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={800}
                      height={600}
                      className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
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
  )
}

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.dahuasecurity.com/#organization",
      "name": "Dahua Technology",
      "url": "https://www.dahuasecurity.com",
      "foundingDate": "2001",
      "description": "World-leading video-centric smart IoT solution and service provider",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.dahuasecurity.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/dahua-technology",
        "https://twitter.com/DahuaTechnology"
      ],
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": "20000+"
      }
    },
    {
      "@type": "Product",
      "name": "IP Surveillance Solutions",
      "description": "Cutting-edge cameras with advanced AI capabilities, thermal imaging, and facial recognition",
      "category": "Security Systems",
      "brand": {
        "@type": "Brand",
        "name": "Dahua"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "Product",
      "name": "Smart IoT Solutions",
      "description": "Integrated security management solutions combining video surveillance with intelligent analytics",
      "category": "IoT Systems",
      "brand": {
        "@type": "Brand",
        "name": "Dahua"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "Product",
      "name": "AI-Powered Analytics",
      "description": "Deep learning video analytics for facial recognition, people counting, and behavior analysis",
      "category": "AI Software",
      "brand": {
        "@type": "Brand",
        "name": "Dahua"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.dahuasecurity.com/#webpage",
      "url": "https://www.dahuasecurity.com",
      "name": "Dahua Technology - Smart IoT Solutions",
      "description": "Discover Dahua's innovative video-centric smart IoT solutions",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@id": "https://www.dahuasecurity.com/",
              "name": "Home"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@id": "https://www.dahuasecurity.com/products/",
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
          "name": "What is Dahua's core business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dahua is a world-leading video-centric smart IoT solution and service provider specializing in video surveillance and security systems."
          }
        },
        {
          "@type": "Question",
          "name": "What is Dahua's global presence?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dahua has over 20,000 employees worldwide and has established a global service network covering 180+ countries and regions."
          }
        }
      ]
    }
  ]
}