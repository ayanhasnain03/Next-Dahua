import React from 'react';
import Image from 'next/image';
import Barco from '../../../public/logo/Barco.jpg';
import Bose from '../../../public/logo/bose.webp';
import CTC from '../../../public/logo/CTC.jpg';
import Dahua from '../../../public/logo/dahua.webp';
import Epson from '../../../public/logo/Epson.webp';
import Furman from '../../../public/logo/furman.jpg';
import Link from '../../../public/logo/link.webp';
import LogoImage from '../../../public/logo/logo.webp';
import Neutrik from '../../../public/logo/logoneutrik.webp';
import Megvii from '../../../public/logo/Megvii_logo.webp';
import QSC from '../../../public/logo/qsc.webp';
import Poland from '../../../public/logo/Roland.webp';
import Ruijie from '../../../public/logo/Ruijie.webp';
import Seagate from '../../../public/logo/seagate.webp';
import Shuru from '../../../public/logo/Shure.webp';
import UNV from '../../../public/logo/unv.webp';
import WesternDigital from '../../../public/logo/westerndigital.webp';  

export const metadata = {
  title: 'Our Partners - Leading Technology Companies',
  description: 'Trusted by leading companies in technology, security and audio-visual solutions. Partners include Barco, Bose, Dahua, Epson and more.',
  keywords: 'technology partners, security solutions, audio visual partners',
  openGraph: {
    type: 'website',
    title: 'Our Technology Partners',
    description: 'Partnering with world-leading technology companies',
  },
}

const Logo = () => {
  const logos = [
    { id: 1, src: Barco, alt: 'Company 1' },
    { id: 2, src: Bose, alt: 'Company 2' },
    { id: 3, src: CTC, alt: 'Company 3' },
    { id: 4, src: Dahua, alt: 'Company 4' },
    { id: 5, src: Epson, alt: 'Company 5' },
    { id: 6, src: Furman, alt: 'Company 6' },
    { id: 7, src: Link, alt: 'Company 7' },
    { id: 8, src: LogoImage, alt: 'Company 8' },
    { id: 9, src: Neutrik, alt: 'Company 9' },
    { id: 10, src: Megvii, alt: 'Company 10' },
    { id: 11, src: QSC, alt: 'Company 11' },
    { id: 12, src: Poland, alt: 'Company 12' },
    { id: 13, src: Ruijie, alt: 'Company 13' },
    { id: 14, src: Seagate, alt: 'Company 14' },
    { id: 15, src: Shuru, alt: 'Company 15' },
    { id: 16, src: UNV, alt: 'Company 16' },
    { id: 17, src: WesternDigital, alt: 'Company 17' },
  ];
  
  const duplicatedLogos = [...logos, ...logos];

  return (
    <>
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-4xl font-bold text-gray-900 mb-12">
            Trusted by leading companies
          </h2>
          <div className="overflow-hidden">
            <div 
              className="flex will-change-transform" 
              style={{
                animation: 'carousel 20s cubic-bezier(0.4, 0.0, 0.2, 1) infinite'
              }}
            >
              {duplicatedLogos.map((logo) => (
                <div
                  key={`${logo.id}-${Math.random()}`}
                  className="flex-shrink-0 w-[150px] mx-4"
                >
                  <div className="bg-white p-4 rounded-xl h-24 flex items-center justify-center">
                    <Image
                      className="h-16 w-auto object-contain"
                      src={logo.src}
                      alt={logo.alt}
                      width={150}
                      height={64}
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>
          {`
            @keyframes carousel {
              0% { transform: translate3d(0, 0, 0); }
              100% { transform: translate3d(-50%, 0, 0); }
            }
          `}
        </style>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Your Company Name",
            "url": "https://www.Digitallinktech.com",
            "partner": logos.map(logo => ({
              "@type": "Organization",
              "name": logo.alt,
              "image": logo.src
            })),
            "brand": logos.map(logo => ({
              "@type": "Brand",
              "name": logo.alt,
              "logo": logo.src
            })),
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500"
            }
          })
        }}
      />
    </>
  );
};

export default Logo;
