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
  background: #fff;
  color: #222;
  padding: 4rem 0 3rem 0;
  position: relative;
  overflow: hidden;
`;

const Container = styled(motion.div)`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const Bio = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const ListItem = styled.li`
  background: #f6f7f4;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  font-size: 1rem;
`;

const About = () => (
  <AboutSection id="about">
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
        I'm Kelvin Peters, a creative specialist with a Mass Communication degree from the National Open University of Nigeria. I help brands and entrepreneurs elevate their digital presence through strategic visual storytelling. Currently at Blueridge MFB, and leading Grafhix Digitech.
      </Bio>
      <h3>Tools I Use</h3>
      <List>
        <ListItem>Canva</ListItem>
        <ListItem>Adobe Photoshop</ListItem>
        <ListItem>CapCut</ListItem>
        <ListItem>Filmora</ListItem>
        <ListItem>Trello</ListItem>
      </List>
      <h3>Skills</h3>
      <List>
        <ListItem>Graphic Design</ListItem>
        <ListItem>Social Media Management</ListItem>
        <ListItem>Branding</ListItem>
        <ListItem>SEO</ListItem>
        <ListItem>Content Planning</ListItem>
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