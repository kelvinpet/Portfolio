import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomeSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--color-olive-gradient), url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1500&q=80');
  background-size: cover;
  background-position: center;
  overflow: hidden;
  @media (max-width: 600px) {
    padding: 2.5rem 0.5rem 1.5rem 0.5rem;
    min-height: 90vh;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color-overlay);
  z-index: 1;
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  z-index: 2;
  opacity: 0.18;
`;

const Content = styled(motion.div)`
  position: relative;
  z-index: 3;
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Headline = styled(motion.h1)`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: 1px;
  @media (max-width: 600px) {
    font-size: 1.6rem;
    margin-bottom: 0.7rem;
  }
`;

const Subheadline = styled(motion.p)`
  font-size: 1.3rem;
  margin-bottom: 2rem;
  font-weight: 500;
  @media (max-width: 600px) {
    font-size: 1rem;
    margin-bottom: 1.2rem;
  }
`;

const ResumeButton = styled(motion.a)`
  display: inline-block;
  padding: 0.85rem 2.2rem;
  background: linear-gradient(90deg, #b7c59a 60%, #6e7f4e 100%);
  color: #fff;
  border-radius: 30px;
  font-weight: 700;
  text-decoration: none;
  font-size: 1.15rem;
  box-shadow: 0 4px 24px rgba(60,80,40,0.15);
  transition: background 0.3s, color 0.3s, transform 0.2s;
  &:hover {
    background: linear-gradient(90deg, #6e7f4e 60%, #b7c59a 100%);
    color: #222;
    transform: scale(1.05);
  }
  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 0.7rem 1.2rem;
  }
`;

const WaveDivider = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  line-height: 0;
  z-index: 4;
`;

const Home = () => (
  <HomeSection id="home">
    <Overlay />
    {/* Floating SVG shapes for depth */}
    <FloatingShape
      initial={{ y: -40, x: -60 }}
      animate={{ y: 0, x: 0 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      style={{ top: 60, left: 40 }}
    >
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none"><circle cx="45" cy="45" r="45" fill="#b7c59a" /></svg>
    </FloatingShape>
    <FloatingShape
      initial={{ y: 30, x: 40 }}
      animate={{ y: 0, x: 0 }}
      transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse' }}
      style={{ bottom: 80, right: 60 }}
    >
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none"><rect width="60" height="60" rx="18" fill="#6e7f4e" /></svg>
    </FloatingShape>
    <FloatingShape
      initial={{ y: 20, x: -30 }}
      animate={{ y: 0, x: 0 }}
      transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
      style={{ bottom: 30, left: 100 }}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><ellipse cx="20" cy="20" rx="20" ry="12" fill="#fff" /></svg>
    </FloatingShape>
    <Content
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Headline
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Empowering Brands Through Strategic Digital Marketing & Innovative Design
      </Headline>
      <Subheadline
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Helping businesses grow through compelling storytelling and bold visuals.
      </Subheadline>
      <ResumeButton
        href="https://drive.google.com/file/d/1OguPmD9zTSSXSuyV5wq4gTyq9Pu7oTwD/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.97 }}
      >
        Download Resume
      </ResumeButton>
    </Content>
    <WaveDivider>
      <svg viewBox="0 0 1440 120" width="100%" height="80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#f6f7f4" d="M0,32L60,37.3C120,43,240,53,360,69.3C480,85,600,107,720,112C840,117,960,107,1080,90.7C1200,75,1320,53,1380,42.7L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" />
      </svg>
    </WaveDivider>
  </HomeSection>
);

export default Home; 