'use client'
import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import AIInSurveillance from '../../../public/blog/AI in Surveillance_1.webp';
import AIoT from '../../../public/blog/AIoT_1.webp';
import ITEcosystem from '../../../public/blog/IT Ecosystem Infrastructure_1.webp';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Container = styled.main`
  width: 100%;
  padding: 60px 20px;
  min-height: 100vh;
  background: linear-gradient(165deg, 
    rgba(37, 99, 235, 0.95) 0%, 
    rgba(37, 99, 235, 0.4) 25%, 
    rgba(0, 0, 0, 0) 50%),
    url('src/assets/img/white.webp');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  @media (max-width: 768px) {
    padding: 40px 16px;
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 50px;

  h1 {
    font-size: 2.8rem;
    color: #1a237e;
    font-weight: 700;
    margin-bottom: 16px;
  }

  p {
    color: #000000;
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const Card = styled.article`
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  border: 1px solid #f8f9fa;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.06);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  padding-top: 60%;
  overflow: hidden;
`;

const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

const Content = styled.div`
  padding: 24px;

  h2 {
    font-size: 1.4rem;
    color: #2d3748;
    margin-bottom: 12px;
    font-weight: 600;
  }

  p {
    color: #718096;
    line-height: 1.6;
    margin-bottom: 20px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 0.9rem;
  color: #718096;
`;

const Button = styled.button`
  background-color: #f8f9fa;
  color: #4A5568;
  padding: 10px 22px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: #718096;
    color: white;
  }
`;

const Blog = () => {
  const [posts] = useState([
    {
      id: 1,
      title: 'AI in Surveillance',
      content: 'Utilizes computer software programs that analyze the audio and images from video surveillance cameras in order to recognize humans, vehicles, objects, attributes, and events',
      image: AIInSurveillance,
      url: 'https://digitechtalk.com/?s=ai'
    },
    {
      id: 2,
      title: 'Artificial intelligence of things (AIoT)',
      content: 'Is the combination of artificial intelligence (AI) technologies with the Internet of things (IoT) infrastructure to achieve more efficient IoT operations, improve human-machine interactions and enhance data management and analytics.',
      image: AIoT,
      url: 'https://digitechtalk.com/?s=cameras'
    },
    {
      id: 3,
      title: 'IT Ecosystem Infrastructure',
      content: 'Deals with the IT hardware (compute, storage, net), operating systems, basic services and platforms (virtualisation) for cloud services. The overall infrastructure approach is determined by quality (e.g. availability), security and economic efficiency',
      image: ITEcosystem,
      url: 'https://digitechtalk.com/?s=IT'
    }
  ]);

  const router = useRouter();
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Header animation
    gsap.fromTo(headerRef.current,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      }
    );

    // Cards stagger animation
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(card,
        {
          opacity: 0,
          y: 50,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  const handleReadMore = (post) => {
    router.push(post.url);
  };

  return (
    <Container>
      <Header ref={headerRef}>
        <h1>Latest Articles</h1>
        <p>Insights from our expert team</p>
      </Header>

      <Grid>
        {posts.map((post, index) => (
          <Card 
            key={post.id} 
            ref={el => cardsRef.current[index] = el}
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1.03,
                duration: 0.3,
                ease: "power2.out"
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
              });
            }}
          >
            <ImageContainer>
              <StyledImage
                src={post.image}
                alt={post.title}
                loading={index > 0 ? 'lazy' : 'eager'}
              />
            </ImageContainer>
            <Content>
              <h2>{post.title}</h2>
              <Meta>
                <span>{post.date}</span>
                <span>{post.author}</span>
              </Meta>
              <p>{post.content}</p>
              <Button onClick={() => handleReadMore(post)}>Read More</Button>
            </Content>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Blog;
