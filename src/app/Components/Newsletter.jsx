'use client'
import React, { useState } from 'react';
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';
import emailjs from 'emailjs-com';
import Head from 'next/head';

export default function Example() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a90ekme', 'template_bj8vqj2', e.target, 'Y9tHCORXy0k8LD77j')
      .then((result) => {
        console.log(result.text);
        setMessage('Subscription successful!');
      }, (error) => {
        console.log(error.text);
        setMessage('Subscription failed. Please try again.');
      });

    setEmail('');
  };

  return (
    <>
      <Head>
        <title>digitallink Saudi</title>
        <meta name="description" content="Subscribe to our weekly newsletter for cutting-edge insights, transformative strategies, and innovation updates. Join our community of forward-thinking professionals." />
        <meta name="keywords" content="newsletter, digital excellence, weekly updates, innovation insights, business transformation" />
        
        {/* OpenGraph tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Subscribe to Our Innovation Newsletter" />
        <meta property="og:description" content="Get weekly doses of inspiration and innovation insights delivered to your inbox." />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://yourwebsite.com/newsletter/#webpage",
                "url": "https://yourwebsite.com/newsletter/",
                "name": "Newsletter Subscription | Your Company Name",
                "description": "Subscribe to our weekly newsletter for cutting-edge insights and innovation updates."
              },
              {
                "@type": "NewsletterService",
                "name": "Innovation Insights Newsletter",
                "description": "Weekly newsletter featuring digital excellence insights and transformative strategies",
                "provider": {
                  "@type": "Organization",
                  "name": "Your Company Name"
                },
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD"
                },
                "frequency": "Weekly",
                "category": "Technology & Innovation"
              },
              {
                "@type": "Organization",
                "@id": "https://yourwebsite.com/#organization",
                "name": "Your Company Name",
                "url": "https://yourwebsite.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://yourwebsite.com/logo.png"
                }
              }
            ]
          })}
        </script>
      </Head>

      <div className="relative isolate overflow-hidden bg-blue-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-4xl font-semibold tracking-tight text-blue-900 animate-fade-in hover:scale-105 transition-transform duration-300">
                Subscribe to our newsletter
              </h2>
              <p className="mt-4 text-lg text-blue-600">
                🚀 Step into the future of digital excellence! Join our constellation of innovators where we blend 
                cutting-edge insights with transformative strategies. Get ready for weekly doses of inspiration that 
                turn ambitious dreams into remarkable realities.
              </p>
              <form onSubmit={sendEmail} className="mt-6 flex max-w-md gap-x-4 group">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-blue-900 shadow-sm ring-1 ring-inset ring-blue-200 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm/6 animate-slide-in hover:shadow-lg transition-shadow duration-300 focus:scale-105 transform"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 hover:scale-110 hover:rotate-2 active:scale-95 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Subscribe
                </button>
              </form>
              {message && <p className="mt-4 text-blue-600">{message}</p>}
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start animate-fade-in group">
                <div className="rounded-md bg-white p-2 ring-1 ring-blue-100 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg transition-all duration-300">
                  <CalendarDaysIcon aria-hidden="true" className="size-6 text-blue-600 group-hover:text-blue-700" />
                </div>
                <dt className="mt-4 text-base font-semibold text-blue-900 group-hover:translate-x-2 transition-transform duration-300">
                  Weekly articles
                </dt>
                <dd className="mt-2 text-base/7 text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                  ✨ Unlock a treasury of innovation! Each week, dive into carefully crafted content that bridges 
                  the gap between visionary thinking and practical excellence.
                </dd>
              </div>
              <div className="flex flex-col items-start animate-fade-in group">
                <div className="rounded-md bg-white p-2 ring-1 ring-blue-100 group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-lg transition-all duration-300">
                  <HandRaisedIcon aria-hidden="true" className="size-6 text-blue-600 group-hover:text-blue-700" />
                </div>
                <dt className="mt-4 text-base font-semibold text-blue-900 group-hover:translate-x-2 transition-transform duration-300">
                  No spam
                </dt>
                <dd className="mt-2 text-base/7 text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                  🛡️ Quality is our promise! Experience a curated flow of pure inspiration - where every word matters, 
                  every insight counts, and every message sparks innovation.
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div 
          aria-hidden="true" 
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6 hover:blur-2xl transition-all duration-700"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-blue-100 to-blue-50 opacity-30 animate-pulse hover:opacity-40 transition-opacity duration-700"
          />
        </div>
      </div>
    </>
  );
}
