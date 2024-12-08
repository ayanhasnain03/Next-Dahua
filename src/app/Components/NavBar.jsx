'use client';
import React, { useState, useEffect, useCallback, memo } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import Head from 'next/head';
import Image from 'next/image';
import logo from '../../../public/logo/logo.webp'; // Adjust the path for your project
import gsap from 'gsap';
import Script from 'next/script';


// Extract menu items outside component to prevent recreating on each render
const MENU_ITEMS = [
  { title: 'Home', href: '/' },
  { title: 'Audio & Video', href: '/AudioVideo' },
  { title: 'Service', href: '/Service' },
  { title: 'Clients', href: '/Clients' },
  { title: 'About', href: '/About' },
  { title: 'Contact', href: '/Contact' },
];

// Extract reusable components
const MenuItem = memo(({ item, activePage, handleNavigation }) => {
  const submenuRef = React.useRef(null);
  const linkRef = React.useRef(null);

  React.useEffect(() => {
    if (item.submenu) {
      gsap.set(submenuRef.current, { autoAlpha: 0, y: 20 });
    }
  }, [item.submenu]);

  const onMouseEnter = () => {
    if (item.submenu) {
      gsap.to(submenuRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
    gsap.to(linkRef.current, {
      scale: 1.05,
      duration: 0.2,
      ease: 'power1.out'
    });
  };

  const onMouseLeave = () => {
    if (item.submenu) {
      gsap.to(submenuRef.current, {
        autoAlpha: 0,
        y: 20,
        duration: 0.2,
        ease: 'power2.in'
      });
    }
    gsap.to(linkRef.current, {
      scale: 1,
      duration: 0.2,
      ease: 'power1.in'
    });
  };

  return (
    <div 
      key={item.title} 
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link
        ref={linkRef}
        href={item.href}
        onClick={() => handleNavigation(item.href)}
        className={`px-5 py-2.5 rounded-full flex items-center text-sm font-medium transition-all duration-200 ${
          activePage === item.href
            ? 'bg-white text-blue-900 font-bold'
            : 'text-blue-700 hover:text-blue-900 hover:bg-white'
        }`}
      >
        {item.title}
        {item.submenu && <ChevronDown size={16} className="ml-2" />}
      </Link>
      {item.submenu && (
        <div 
          ref={submenuRef}
          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl"
        >
          <div className="py-2">
            {item.submenu.map((subItem) => (
              <Link
                key={subItem}
                href="#"
                className="block px-5 py-3 text-sm text-blue-700 hover:bg-blue-50 hover:text-blue-900 transition-colors duration-150"
              >
                {subItem}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

// NavBar Component
const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activePage, setActivePage] = useState(pathname);
  const navRef = React.useRef(null);
  const mobileMenuRef = React.useRef(null);

  const solutions = [
    'Meeting Room Solutions',
    'Smart Classroom Solutions',
    'BGM Solutions',
    'PA and VA Systems',
    'Home Cinema',
    'Command & Control Center Solutions',
    'LED & Video Wall Solutions',
    'Crisis Management Solutions',
  ];

  useEffect(() => {
    setActivePage(pathname);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrolled = window.scrollY > 50;
      setScrolled(scrolled);
      
      gsap.to(navRef.current, {
        backgroundColor: 'rgb(255, 255, 255)',
        boxShadow: scrolled ? '0 4px 6px -1px rgb(0 0 0 / 0.1)' : 'none',
        duration: 0.3,
        ease: 'power2.out'
      });
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      handleScroll.cancel();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigation = useCallback((href) => {
    setActivePage(href);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      gsap.fromTo(mobileMenuRef.current,
        { height: 0, opacity: 0 },
        { 
          height: 'auto', 
          opacity: 1, 
          duration: 0.3, 
          ease: 'power2.out',
          onStart: () => {
            mobileMenuRef.current.style.display = 'block';
          }
        }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          mobileMenuRef.current.style.display = 'none';
        }
      });
    }
  };

  return (
    <>
      <Head>
        <title>Navigation | Your Company Name</title>
        <meta
          name="description"
          content="Navigate through our website to explore various sections and services we offer including audio-video solutions, services, client projects and more."
        />
    
        <meta name="keywords" content="navigation, menu, services, audio video solutions, smart classroom, meeting room solutions" />

        {/* OpenGraph tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Navigation | Your Company Name" />
        <meta property="og:description" content="Explore our comprehensive range of solutions and services" />
      </Head>
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
      <nav ref={navRef} className="fixed w-full z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" onClick={() => handleNavigation('/')}>
              <div className="flex items-center space-x-3 flex-shrink-0">
                <Image src={logo.src} alt="Company Logo" width={88} height={80} priority />
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {MENU_ITEMS.map((item) => (
                <MenuItem key={item.title} item={item} activePage={activePage} handleNavigation={handleNavigation} />
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-2 relative">
              <div className="relative group">
                <button
                  className="p-2.5 rounded-full text-blue-700 hover:text-blue-900 hover:bg-blue-100 transition-all duration-200"
                >
                  <ChevronDown size={20} />
                </button>
                {/* Dropdown Menu */}
                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    {solutions.map((solution, index) => (
                      <Link
                        key={index}
                        href="#"
                        className="block px-5 py-3 text-sm text-blue-700 hover:bg-blue-50 hover:text-blue-900 transition-colors duration-150"
                      >
                        {solution}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={toggleMobileMenu}
                className="p-2.5 rounded-full text-blue-700 hover:text-blue-900 hover:bg-blue-100 transition-all duration-200 lg:hidden"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          ref={mobileMenuRef} 
          className="lg:hidden bg-white border-t border-blue-100"
          style={{ display: 'none' }}
        >
          <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6">
            {MENU_ITEMS.map((item) => (
              <div key={item.title} className="py-1">
                <Link
                  href={item.href}
                  onClick={() => handleNavigation(item.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm ${
                    activePage === item.href
                      ? 'bg-white text-blue-900 font-bold'
                      : 'text-blue-700 hover:bg-white hover:text-blue-900'
                  }`}
                >
                  <span>{item.title}</span>
                  {item.submenu && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        activePage === item.href ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </Link>
                {item.submenu && (
                  <div className="ml-4 mt-1 border-l-2 border-blue-100">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem}
                        href="#"
                        className="block px-4 py-3 text-sm text-blue-700 hover:bg-blue-100 hover:text-blue-900 rounded-xl transition-colors duration-150"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

// Utility function for debounce
function debounce(func, wait) {
  let timeout;
  const debouncedFn = function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
  debouncedFn.cancel = () => clearTimeout(timeout);
  return debouncedFn;
}

export default memo(NavBar);
