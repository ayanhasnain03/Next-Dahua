'use client';
import styled from 'styled-components';
import { FaHeadset, FaPencilRuler, FaCode, FaTools, FaCog } from 'react-icons/fa';
import React, { memo,} from 'react';
import { motion } from 'framer-motion';
import audioVideoMain from '../../../public/audio/audiovideomain.webp';
import audioRight from '../../../public/audio/audioright.webp';
import meetingRoom from '../../../public/audio/Meeting Room Solutions.webp';
import smartClassroom from '../../../public/audio/Smart Classroom Solutions.webp';
import auditorium from '../../../public/audio/Auditorium Solutions.webp';
import bgm from '../../../public/audio/BGM Solutions.webp';
import paVa from '../../../public/audio/PA and VA Systems.webp';
import homeCinema from '../../../public/audio/Home Cinema.webp';
import commandControl from '../../../public/audio/Command & Control Center Solutions.webp';
import ledVideoWall from '../../../public/audio/LED & Video Wall Solutions.webp';
import crisisManagement from '../../../public/audio/Crisis Management Solutions.webp';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

const HeroSection = styled.div`
  position: relative;
  min-height: 100vh; // Changed from 120vh for better mobile view
  background: linear-gradient(165deg, 
    rgba(37, 99, 235, 0.95) 0%, 
    rgba(37, 99, 235, 0.4) 25%, 
    rgba(0, 0, 0, 0) 50%),
    url(${audioVideoMain.src});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  padding: 2rem 0; // Added padding for mobile
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 100vh;
    background-attachment: scroll; // Better performance on mobile
    padding: 6rem 1rem 2rem 1rem; // Added top padding for mobile header
    background: linear-gradient(165deg, 
      rgba(37, 99, 235, 0.98) 0%, 
      rgba(37, 99, 235, 0.7) 50%, 
      rgba(37, 99, 235, 0.4) 100%),
      url(${audioVideoMain.src});
  }
`;

// Create these image versions using Sharp or similar tool:
// 1. audiovideomain-compressed.webp (1440x960, quality: 60)
// 2. audiovideomain-full.webp (2880x1920, quality: 90)
// 3. audiovideomain-full@2x.webp (3840x2560, quality: 90)
// 4. audiovideomain-full@3x.webp (5760x3840, quality: 90)

// Command to generate images using Sharp:
/*
npm install sharp
npx sharp input.jpg -o audiovideomain-compressed.webp -q 60 -w 1440
npx sharp input.jpg -o audiovideomain-full.webp -q 90 -w 2880
npx sharp input.jpg -o audiovideomain-full@2x.webp -q 90 -w 3840
npx sharp input.jpg -o audiovideomain-full@3x.webp -q 90 -w 5760
*/

const HeroContent = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 5%;
  z-index: 10;
  
  @media (max-width: 1200px) {
    padding: 0 6%;
  }
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const MainHeading = styled.span`
  display: block;
  font-size: 0.875rem;
  color: #ffffff; // Changed for better visibility
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 500;
  position: relative;
  padding-left: 45px;
  
  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding-left: 0;
    margin-bottom: 1rem;
    
    &:before {
      display: none;
    }
  }
`;

const SubHeading = styled.span`
  display: block;
  font-size: 3.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  max-width: 600px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 1.5rem 0 2.5rem;
  max-width: 450px;
  line-height: 1.6;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 1rem auto 2rem;
    text-align: center;
    padding: 0 1rem;
  }
`;

const CtaButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 1rem 2.5rem;
  background-color: #ffffff;
  border: none;
  color: #2563eb;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 50px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    background-color: #f8fafc;
  }

  @media (max-width: 768px) {
    padding: 0.875rem 2rem;
    font-size: 0.9rem;
    width: 100%;
    justify-content: center;
    max-width: 300px;
  }
`;

// Update the badge styling in the component
const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    padding: 0.625rem 1.25rem;
    margin-bottom: 1.5rem;
  }
`;

const ContentSection = styled.section`
  padding: 6rem 0;
  background: #f8faff;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 5%;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const TextContent = styled.div`
  h2 {
    color: #60a5fa;
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
    
    @media (max-width: 768px) {
      font-size: 1.8rem;
      text-align: center;
    }
  }
  
  p {
    color: #64748b;
    font-size: 1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 768px) {
    h2 {
      font-size: 1.8rem;
      text-align: center;
    }
    
    p {
      font-size: 0.9rem;
      text-align: center;
    }
  }
`;

const ServicesSection = styled.section`
  padding: 6rem 5%;
  background: #fafcff;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  color: #60a5fa;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = memo(styled.div`
  background: #ffffff;
  padding: 2rem 1.5rem;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(96, 165, 250, 0.05);
  transition: transform 0.3s ease;
  border: 1px solid rgba(96, 165, 250, 0.08);
  
  &:hover {
    background: #fafcff;
    box-shadow: 0 15px 35px rgba(96, 165, 250, 0.08);
  }
  
  svg {
    font-size: 2.5rem;
    color: #60a5fa;
    margin-bottom: 1.5rem;
  }
  
  h3 {
    color: #60a5fa;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  p {
    color: #64748b;
    font-size: 0.9rem;
    line-height: 1.6;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    
    svg {
      font-size: 2rem;
    }
    
    h3 {
      font-size: 1.1rem;
    }
    
    p {
      font-size: 0.85rem;
    }
  }
`);

const SolutionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 0;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 2rem 1.5rem;
  }
`;

const SolutionCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(96, 165, 250, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    background: #fafcff;
    box-shadow: 0 8px 30px rgba(96, 165, 250, 0.08);
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  ${SolutionCard}:hover & img {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  
  h3 {
    color: #60a5fa;
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
    font-weight: 600;
  }
  
  p {
    color: #64748b;
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

const ProcessSection = styled.section`
  padding: 6rem 5%;
  background: #fafcff;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ProcessCard = styled.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(96, 165, 250, 0.03);
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    background: #fafcff;
    box-shadow: 0 8px 30px rgba(96, 165, 250, 0.06);
  }
  
  &::before {
    content: "${props => props.$number}"; // Changed from number to $number
    position: absolute;
    top: -15px;
    left: -15px;
    width: 40px;
    height: 40px;
    background: #60a5fa;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 1.2rem;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    text-align: center;
    
    &::before {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const ProcessTitle = styled.h3`
  color: #60a5fa;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ProcessDescription = styled.p`
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.6;
`;

const SolutionsSection = styled.section`
  background: #f8faff;
  padding: 6rem 5%;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const metadata = {
  title: 'About Us | Digitallink Technology',
  description: "Learn about Digitallink Technology's journey, mission, and vision for the future.",
  keywords: 'Digitallink Technology, about us, mission, vision, team',
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://digitallink-sa.com/#organization",
        "name": "Digitallink Technology",
        "url": "https://www.Digitallinktech.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://digitallink-sa.com/logo.png",
          "width": 112,
          "height": 112
        },
        "sameAs": [
          "https://www.facebook.com/Digitallinktech",
          "https://www.linkedin.com/company/Digitallinktech",
          "https://twitter.com/Digitallinktech"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+971-XXX-XXXX",
          "contactType": "customer service",
          "areaServed": "AE",
          "availableLanguage": ["en", "ar"]
        }
      },
      {
        "@type": "AboutPage",
        "@id": "https://digitallink-sa.com/about/#webpage",
        "url": "https://digitallink-sa.com/about/",
        "name": "About Us | Digitallink Technology",
        "isPartOf": { "@id": "https://digitallink-sa.com/#website" },
        "about": { "@id": "https://digitallink-sa.com/#organization" },
        "description": "Learn about Digitallink Technology's journey, mission, and vision for the future.",
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
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@id": "https://digitallink-sa.com/about/",
                "name": "About Us"
              }
            }
          ]
        }
      }
    ]
  }
};

const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const AudioVideo = () => {
  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(metadata.jsonLd) }}
      />

      <HeroSection>
        <HeroContent
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Badge
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-blue-400 mr-2">★</span>
            <span className="text-white/90 text-sm font-medium">
              Leading AV Solutions Provider
            </span>
          </Badge>

          <h1>
            <MainHeading>Professional Audio Visual Solutions Dubai</MainHeading>
            <SubHeading>Transform Spaces Through Advanced AV Technology</SubHeading>
          </h1>
          <Description>
            Elevate your environment with state-of-the-art audiovisual solutions.
            We blend innovative technology with refined design for exceptional experiences.
          </Description>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex justify-center"
          >
            <CtaButton href="/Contact">
              Get Started
              <motion.span
                className="ml-2 inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </CtaButton>
          </motion.div>
        </HeroContent>
      </HeroSection>

      <main>
        <ContentSection>
          <Grid>
            <TextContent>
              <h2>Leading Audio Video Solutions Provider in Dubai</h2>
              <p>In today's fast-paced digital age, audio-visual solutions have become an essential part of business operations. From engaging presentations in boardrooms to immersive audio experiences at concerts and events, AV technology has revolutionized the way we communicate and connect with our environment.</p>
              <p>AV solutions, or audio-visual systems, combine audio and visual components to create a seamless multimedia experience. These systems are utilized across various sectors, including business, education, entertainment, and communication. As a trusted audio-visual equipment supplier in Dubai, GS-IT provides cutting-edge AV solutions that foster dynamic, real-time interactions. Through advanced AV technology, we help create immersive experiences that engage, inform, and inspire audiences.</p>
            </TextContent>
            <div style={{ position: 'relative', width: '100%', height: '400px' }}>
              <Image
                src={audioRight}
                alt="Professional Audio Visual Setup in Dubai Meeting Room"
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="rounded-lg shadow-2xl"
                fill={true}
              />
            </div>
          </Grid>
        </ContentSection>

        <ServicesSection>
          <SectionTitle>AV Solutions that Elevate Engagement</SectionTitle>
          <ServicesGrid>
            <ServiceCard>
              <FaHeadset />
              <h3>AV Consulting Services</h3>
              <p>Collaborating with clients to assess their audio-video needs and enhance existing technology for improved performance and efficiency.</p>
            </ServiceCard>

            <ServiceCard>
              <FaPencilRuler />
              <h3>AV Design Services</h3>
              <p>Delivering tailored AV designs that ensure seamless integration and optimal functionality within the client's infrastructure.</p>
            </ServiceCard>

            <ServiceCard>
              <FaCode />
              <h3>AV Programming</h3>
              <p>Developing custom control systems and intuitive interfaces for easy and efficient operation of AV systems.</p>
            </ServiceCard>

            <ServiceCard>
              <FaTools />
              <h3>AV Installation & Integration</h3>
              <p>Providing professional installation and seamless integration of AV equipment, ensuring smooth functionality and full regulatory compliance.</p>
            </ServiceCard>

            <ServiceCard>
              <FaCog />
              <h3>AV Support & Maintenance</h3>
              <p>Offering ongoing support and maintenance services to address any client concerns and ensure consistent, high-performance operation of AV systems.</p>
            </ServiceCard>
          </ServicesGrid>
        </ServicesSection>

        <SolutionsSection>
          <SectionTitle>Explore Our Innovative Audio Video Solutions</SectionTitle>
          <SolutionsGrid>
            <SolutionCard>
              <CardImage>
                <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                  <Image
                    src={meetingRoom}
                    alt="Meeting Room Solutions"
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="rounded-lg shadow-lg"
                    fill={true}
                  />
                </div>
              </CardImage>
              <CardContent>
                <h3>Meeting Room Solutions</h3>
                <p>Optimize meetings and collaboration in rooms of all sizes with cutting-edge solutions from our comprehensive product suite, designed to enhance communication and boost productivity.</p>
              </CardContent>
            </SolutionCard>

            <SolutionCard>
              <CardImage>
                <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                  <Image
                    src={smartClassroom}
                    alt="Smart Classroom Solutions"
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="rounded-lg shadow-lg"
                    fill={true}
                  />
                </div>
              </CardImage>
              <CardContent>
                <h3>Smart Classroom Solutions</h3>
                <p>Transform education with smart devices like interactive whiteboards, video walls, and advanced audio systems, fostering a dynamic and engaging modern learning environment.</p>
              </CardContent>
            </SolutionCard>

            <SolutionCard>
              <CardImage>
                <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                  <Image
                    src={auditorium}
                    alt="Auditorium Solutions"
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="rounded-lg shadow-lg"
                    fill={true}
                  />
                </div>
              </CardImage>
              <CardContent>
                <h3>Auditorium Solutions</h3>
                <p>Enhance audience engagement during large-scale events and presentations with enterprise-grade projection screens, powerful sound systems, and state-of-the-art lighting techniques.</p>
              </CardContent>
            </SolutionCard>

            <SolutionCard>
              <CardImage>
                <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                  <Image
                    src={bgm}
                    alt="BGM Solutions"
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="rounded-lg shadow-lg"
                    fill={true}
                  />
                </div>
              </CardImage>
              <CardContent>
                <h3>BGM Solutions</h3>
                <p>Create the perfect ambiance in any space with strategically placed background music systems, featuring high-quality speakers and advanced music players designed to set the ideal mood.</p>
              </CardContent>
            </SolutionCard>

            <SolutionCard>
              <CardImage>
                <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                  <Image
                    src={paVa}
                    alt="PA and VA Systems"
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="rounded-lg shadow-lg"
                    fill={true}
                  />
                </div>
              </CardImage>
              <CardContent>
                <h3>PA and VA Systems</h3>
                <p>Deliver clear and reliable communication across large areas with innovative and versatile Public Address and Voice Alarm systems, ideal for metro stations, stadiums, and institutions.</p>
              </CardContent>
            </SolutionCard>

            <SolutionCard>
              <CardImage>
                <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                  <StyledImage
                    src={homeCinema.src}
                    alt="Home Cinema"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </CardImage>
              <CardContent>
                <h3>Home Cinema</h3>
                <p>Enjoy the ultimate cinematic experience at home with state-of-the-art home theater systems featuring high-definition displays, high-fidelity sound, and immersive lighting setups.</p>
              </CardContent>
            </SolutionCard>

            <SolutionCard>
              <CardImage>
                <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                  <StyledImage
                    src={commandControl.src}
                    alt="Command & Control Center Solutions"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </CardImage>
              <CardContent>
                <h3>Command & Control Center Solutions</h3>
                <p>Centralized AV systems tailored to the unique requirements of control centers, enhancing operational efficiency through real-time monitoring and seamless communication.</p>
              </CardContent>
            </SolutionCard>

            <SolutionCard>
              <CardImage>
                <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                  <StyledImage
                    src={ledVideoWall.src}
                    alt="LED & Video Wall Solutions"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </CardImage>
              <CardContent>
                <h3>LED & Video Wall Solutions</h3>
                <p>High-impact visual displays designed to captivate audiences, ideal for dynamic presentations, information sharing, and visually striking branding.</p>
              </CardContent>
            </SolutionCard>

            <SolutionCard>
              <CardImage>
                <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                  <Image
                    src={crisisManagement}
                    alt="Crisis Management Solutions"
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="rounded-lg shadow-lg"
                    fill
                  />
                </div>
              </CardImage>
              <CardContent>
                <h3>Crisis Management Solutions</h3>
                <p>Effectively manage emergencies with reliable audiovisual solutions, including advanced communication systems, real-time data displays, and fully equipped control centers for rapid response.</p>
              </CardContent>
            </SolutionCard>
          </SolutionsGrid>
        </SolutionsSection>

        <ProcessSection>
          <SectionTitle>Streamlined AV Installation Process for Maximum Efficiency</SectionTitle>
          <ProcessGrid>
            <ProcessCard $number="1"> {/* Changed from number to $number */}
              <ProcessTitle>AV Consulting</ProcessTitle>
              <ProcessDescription>
                Collaborating closely with clients to understand their unique audiovisual requirements, we provide tailored and effective recommendations.
              </ProcessDescription>
            </ProcessCard>

            <ProcessCard $number="2"> {/* Changed from number to $number */}
              <ProcessTitle>Solution Design</ProcessTitle>
              <ProcessDescription>
                Developing a detailed plan that includes the layout, components, and implementation strategy for a fully customized AV system.
              </ProcessDescription>
            </ProcessCard>

            <ProcessCard $number="3"> {/* Changed from number to $number */}
              <ProcessTitle>Estimation</ProcessTitle>
              <ProcessDescription>
                Delivering transparent and detailed cost estimates with clear project timelines for client review and approval.
              </ProcessDescription>
            </ProcessCard>

            <ProcessCard $number="4"> {/* Changed from number to $number */}
              <ProcessTitle>Project Execution</ProcessTitle>
              <ProcessDescription>
                Ensuring seamless installation by skilled GS-IT technicians, executed with precision and adherence to the approved plan.
              </ProcessDescription>
            </ProcessCard>

            <ProcessCard $number="5"> {/* Changed from number to $number */}
              <ProcessTitle>Quality Check</ProcessTitle>
              <ProcessDescription>
                Conducting thorough performance evaluations of the installed AV systems to guarantee optimal functionality and efficiency.
              </ProcessDescription>
            </ProcessCard>

            <ProcessCard $number="6"> {/* Changed from number to $number */}
              <ProcessTitle>Documentation and Training</ProcessTitle>
              <ProcessDescription>
                Providing user manuals, comprehensive documentation, and training sessions to ensure proper handling and management of AV equipment.
              </ProcessDescription>
            </ProcessCard>

            <ProcessCard $number="7"> {/* Changed from number to $number */}
              <ProcessTitle>Maintenance</ProcessTitle>
              <ProcessDescription>
                Offering regular system check-ups, updates, and prompt troubleshooting to keep AV systems running smoothly and reliably
              </ProcessDescription>
            </ProcessCard>
          </ProcessGrid>
        </ProcessSection>
      </main>
    </>
  );
};

export default AudioVideo;