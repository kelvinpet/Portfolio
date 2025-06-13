import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f6f7f4 0%,rgb(216, 245, 157) 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at center, rgba(110,127,78,0.1) 0%, transparent 50%);
    animation: rotate 30s linear infinite;
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const Container = styled(motion.div)`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #6e7f4e 0%, #b7c59a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const AnimatedRoles = styled(motion.span)`
  display: inline-block;
  font-weight: 700;
  color: #6e7f4e;
  font-size: 1.2em;
  margin-bottom: 0.5rem;
  min-height: 1.5em;
`;

const roles = [
  'Graphic Designer',
  'Social Media Manager',
  'Brand Strategist',
  'Administrative Virtual Assistant',
  'Lead at Grafhix Digitech'
];

function useTypewriter(words, speed = 80, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  React.useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), pause);
      return;
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, speed, pause]);

  return words[index].substring(0, subIndex);
}

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #6e7f4e 0%, #b7c59a 100%);
  color: #fff;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  font-size: 1.1rem;
  box-shadow: 0 4px 24px rgba(60,80,40,0.15);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 30px rgba(60,80,40,0.2);
    color: #fff;

    &::before {
      left: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #6e7f4e;
  font-size: 0.9rem;
  opacity: 0.7;
  cursor: pointer;

  &::after {
    content: '';
    width: 20px;
    height: 20px;
    border-right: 2px solid #6e7f4e;
    border-bottom: 2px solid #6e7f4e;
    transform: rotate(45deg);
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0) rotate(45deg);
    }
    40% {
      transform: translateY(-10px) rotate(45deg);
    }
    60% {
      transform: translateY(-5px) rotate(45deg);
    }
  }
`;

const Home = () => {
  const typewriterRole = useTypewriter(roles, 80, 1200);

  return (
    <HeroSection id="home">
      <Container
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm Kelvin Peters
        </Title>
        <AnimatedRoles
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {typewriterRole}
          <span style={{ borderRight: '2px solid #6e7f4e', marginLeft: 2 }} />
        </AnimatedRoles>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I help brands stand out with creative design, strategic social media management, impactful brand storytelling, custom logo creation, and administrative virtual assistance.<br />
          From eye-catching graphics to full-scale campaigns, I turn ideas into visuals that connect and convert.
        </Subtitle>
        <CTAButton
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Collaborate
        </CTAButton>
      </Container>
      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        Scroll Down
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Home; 