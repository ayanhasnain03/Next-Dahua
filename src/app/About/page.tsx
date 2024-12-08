import About from '../Components/About';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

// Export metadata for the page
export const metadata = {
  title: 'About Us | Lovosis Technology',
  description: 'Learn about Lovosis Technology\'s journey, mission, and vision for the future.',
  keywords: 'Lovosis Technology, about us, mission, vision, team',
  openGraph: {
    title: 'About Us | Lovosis Technology',
    description: 'Learn about Lovosis Technology\'s journey, mission, and vision for the future.',
    url: 'https://www.lovosistech.com/about/',
    siteName: 'Lovosis Technology',
    images: [
      {
        url: 'https://www.lovosistech.com/logo.png',
        width: 112,
        height: 112,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  // JSON-LD can be added using a script tag in layout.js if needed
};

export default function AboutPage() {
  return (
    <div>
      <NavBar />
      <About />
      <Footer />
    </div>
  );
}