import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ResumeSection = styled.section`
  background: ${({ bgColor }) => bgColor || 'linear-gradient(135deg, #e3f2fd 0%, #90caf9 100%)'};
  color: #222;
  padding: 4rem 0 3rem 0;
  @media (max-width: 600px) {
    padding: 2.5rem 0.5rem 1.5rem 0.5rem;
  }
`;

const Container = styled(motion.div)`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1.5rem;
  text-align: center;
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

const ResumeButton = styled.a`
  display: inline-block;
  padding: 0.75rem 2rem;
  background: #6e7f4e;
  color: #fff;
  border-radius: 30px;
  font-weight: 600;
  text-decoration: none;
  font-size: 1.1rem;
  box-shadow: 0 4px 24px rgba(60,80,40,0.15);
  transition: background 0.3s;
  margin-bottom: 1.5rem;
  &:hover {
    background: #b7c59a;
    color: #222;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
  }
`;

const Resume = () => (
  <ResumeSection bgColor="linear-gradient(135deg, #e3f2fd 0%, #90caf9 100%)" id="resume">
    <Container
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <Title>Resume</Title>
      <ResumeButton href="https://drive.google.com/file/d/1OguPmD9zTSSXSuyV5wq4gTyq9Pu7oTwD/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        Download Resume (PDF)
      </ResumeButton>
      <div>
        <a href="https://drive.google.com/file/d/1OguPmD9zTSSXSuyV5wq4gTyq9Pu7oTwD/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          View Resume on Google Drive
        </a>
      </div>
    </Container>
  </ResumeSection>
);

export default Resume; 