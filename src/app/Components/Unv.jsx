'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import unvOpt from '../../../public/unv/UNV_opt 1.webp';
import univiewImg from '../../../public/unv/uniview.webp';
import networkCamera from '../../../public/unv/network camera.webp';
import nvrImg from '../../../public/unv/NVR.webp';
import vmsImg from '../../../public/unv/VMS.webp';

export const metadata = {
  title: 'Uniview - Professional Surveillance Solutions',
  description: 'Discover Uniview\'s innovative surveillance solutions including IP cameras, NVR systems, and video management software for enhanced security.',
  keywords: 'Uniview, surveillance, security cameras, NVR systems, VMS, IP cameras',
};

const Unv = () => {
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
                <span className="block text-blue-600">Surveillance Excellence</span>
              </h1>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
              At Uniview, we redefine security by transforming innovative ideas into cutting-edge surveillance solutions. With 
              a commitment to excellence, we deliver advanced technology, seamless integration, and reliable 
              performance to ensure safety and peace of mind for businesses and communities worldwide.
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
                  src={unvOpt}
                  alt="Company Overview"
                  width={800}
                  height={600}
                  className="relative w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who is Uniview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Who is Uniview
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Uniview (also known as Uniview Technologies) is a company that specializes in providing video surveillance solutions, including security cameras, video management software, and other related products. Founded in 2005, Uniview is known for producing high-quality IP surveillance equipment for both commercial and residential applications. Their product line includes:

                IP Cameras: These range from standard security cameras to more advanced options like 4K cameras, PTZ (pan-tilt-zoom) cameras, and thermal cameras.

                Video Management Software (VMS): Uniview offers software solutions for managing and analyzing video footage, supporting features such as remote monitoring, video analytics, and easy integration with other security systems.

                Network Video Recorders (NVRs): Uniview produces devices that store and manage video footage captured by their cameras.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Featuring an extensive and highly skilled R&D workforce, Uniview manufactures a full suite
                of comprehensive products and solutions for a broad range of vertical markets. In addition to
                the security industry, Uniview extends its reach to smart home tech, industrial automation,
                and automotive electronics industries to achieve its long-term vision.
              </p>
            </div>
            <div className="flex-1">
              <Image
                src={univiewImg}
                alt="Uniview Overview"
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
                name: "Network Cameras",
                image: networkCamera,
                description: "Uniview Network Cameras are high-performance surveillance cameras designed to capture clear and detailed video footage over IP networks. These cameras utilize Internet Protocol (IP) technology, enabling them to transmit video data over Ethernet or Wi-Fi connections, offering flexibility in installation and integration with existing network infrastructure.",
                tag: "Best Seller"
              },
              {
                name: "NVR Systems",
                image: nvrImg,
                description: "Uniview NVR Systems are advanced, reliable devices designed to record and manage video footage from network cameras. These systems are central to modern IP surveillance setups, providing secure storage and seamless integration with Uniview’s network cameras and other compatible devices. NVRs are ideal for applications ranging from small businesses to large-scale enterprise security networks",
                tag: "Popular"
              },
              {
                name: "Video Management",
                image: vmsImg,
                description: "Uniview Video Management Systems (VMS) are comprehensive software solutions designed to efficiently manage and monitor video surveillance networks. These systems allow users to organize, access, and analyze video footage from multiple network cameras and NVRs (Network Video Recorders), providing an integrated platform for enhanced security operations.",
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
  );
};

export default Unv;
