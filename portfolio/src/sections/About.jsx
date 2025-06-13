import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const WaveDivider = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  line-height: 0;
  z-index: 3;
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  z-index: 1;
  opacity: 0.13;
`;

const AboutSection = styled.section`
  background: ${({ bgColor }) => bgColor || 'linear-gradient(135deg, #f6f7f4 0%, #e8e9e6 100%)'};
  color: #222;
  padding: 4rem 0 3rem 0;
  position: relative;
  overflow: hidden;
  @media (max-width: 600px) {
    padding: 2.5rem 0.5rem 1.5rem 0.5rem;
  }
`;

const Container = styled(motion.div)`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1.5rem;
  @media (max-width: 600px) {
    padding: 0 0.5rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  @media (max-width: 600px) {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`;

const Bio = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  @media (max-width: 600px) {
    font-size: 1rem;
    margin-bottom: 1.2rem;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.7rem;
    align-items: flex-start;
  }
`;

const ListItem = styled(motion.li)`
  background: rgba(255,255,255,0.85);
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  font-size: 1rem;
  color: #222;
  box-shadow: 0 2px 8px rgba(60,80,40,0.04);
  margin-bottom: 0.5rem;
  @media (max-width: 600px) {
    font-size: 0.95rem;
    padding: 0.6rem 1rem;
  }
`;

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 24 } },
};

const About = () => (
  <AboutSection bgColor="linear-gradient(135deg, #f6f7f4 0%,rgb(57, 172, 207) 100%)" id="about">
    {/* Floating SVG shapes for depth */}
    <FloatingShape
      initial={{ y: -30, x: 40 }}
      animate={{ y: 0, x: 0 }}
      transition={{ duration: 2.2, repeat: Infinity, repeatType: 'reverse' }}
      style={{ top: 40, right: 60 }}
    >
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none"><circle cx="35" cy="35" r="35" fill="#b7c59a" /></svg>
    </FloatingShape>
    <FloatingShape
      initial={{ y: 20, x: -30 }}
      animate={{ y: 0, x: 0 }}
      transition={{ duration: 2.7, repeat: Infinity, repeatType: 'reverse' }}
      style={{ bottom: 30, left: 80 }}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><ellipse cx="20" cy="20" rx="20" ry="12" fill="#6e7f4e" /></svg>
    </FloatingShape>
    <Container
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <Title>About Me</Title>
      <Bio>
        I'm Kelvin Peters, a Creative Specialist with a background in Mass Communication from the National Open University of Nigeria. I specialize in strategic visual storytelling—helping brands and entrepreneurs amplify their digital presence through compelling graphics, content, and design.<br /><br />
        Currently working with Blueridge Microfinance Bank, I also lead Grafhix Digitech, a creative agency focused on delivering high-impact branding and digital content solutions.
      </Bio>
      <h3>Tools I Use</h3>
      <List as={motion.ul} variants={listVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <ListItem as={motion.li} variants={itemVariants}>Canva</ListItem>
        <ListItem as={motion.li} variants={itemVariants}>Adobe Photoshop</ListItem>
        <ListItem as={motion.li} variants={itemVariants}>CapCut</ListItem>
        <ListItem as={motion.li} variants={itemVariants}>Filmora</ListItem>
        <ListItem as={motion.li} variants={itemVariants}>Trello</ListItem>
        <ListItem as={motion.li} variants={itemVariants}>Metricool</ListItem>
      </List>
      <h3>Skills</h3>
      <List as={motion.ul} variants={listVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <ListItem as={motion.li} variants={itemVariants}>Graphic Design</ListItem>
        <ListItem as={motion.li} variants={itemVariants}>Social Media Management</ListItem>
        <ListItem as={motion.li} variants={itemVariants}>Branding</ListItem>
        <ListItem as={motion.li} variants={itemVariants}>Content Planning</ListItem>
      </List>
    </Container>
    <WaveDivider>
      <svg viewBox="0 0 1440 120" width="100%" height="80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#f6f7f4" d="M0,32L60,37.3C120,43,240,53,360,69.3C480,85,600,107,720,112C840,117,960,107,1080,90.7C1200,75,1320,53,1380,42.7L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" />
      </svg>
    </WaveDivider>
  </AboutSection>
);

export default About; 