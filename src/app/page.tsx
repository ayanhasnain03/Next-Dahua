// pages/index.tsx

import React from 'react';
import NavBar from '../app/Components/NavBar';
import Footer from '../app/Components/Footer';
import Hero from '../app/Components/Hero';
import Features from '../app/Components/Features';
import Blog from '../app/Components/Blog';
import Logo from '../app/Components/Logo';
import Newsletter from '../app/Components/Newsletter';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Digitallink Saudi",
  description: "Digitallink Saudi",
};


const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Features />
      <Blog />
      <Logo />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HomePage;
