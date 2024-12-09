'use client'
import Head from 'next/head';

const SEO = ({ title, description, keywords }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
  </Head>
);

export default SEO;