import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faPalette, faChartLine, faPenNib, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const WaveDivider = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  line-height: 0;
  z-index: 3;
`;

const ServicesSection = styled.section`
  background: #f6f7f4;
  color: #222;
  padding: 4rem 0 3rem 0;
  position: relative;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  text-align: center;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
`;

const Card = styled(motion.div)`
  background: #fff;
  border-radius: 18px;
  padding: 2.2rem 1.5rem 1.5rem 1.5rem;
  box-shadow: 0 4px 24px rgba(60,80,40,0.10);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 8px 32px rgba(60,80,40,0.18);
  }
`;

const IconWrap = styled.div`
  font-size: 2.2rem;
  color: #6e7f4e;
  margin-bottom: 1.2rem;
`;

const CardTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
  text-align: center;
`;

const CardDesc = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #444;
`;

const services = [
  { icon: faBullhorn, title: 'Digital Marketing Strategy', desc: 'Grow your brand with tailored digital campaigns and analytics.' },
  { icon: faChartLine, title: 'Social Media Management', desc: 'Engage your audience and build your presence on all platforms.' },
  { icon: faPalette, title: 'Brand Identity Design', desc: 'Craft a unique, memorable brand that stands out.' },
  { icon: faFileAlt, title: 'Static Graphic Design', desc: 'Posters, carousels, flyers, and more for your business.' },
  { icon: faPenNib, title: 'Content Creation', desc: 'Compelling content for Instagram, Facebook, LinkedIn, and more.' },
];

const Services = () => (
  <ServicesSection id="services">
    <Container>
      <Title>Services</Title>
      <CardGrid>
        {services.map((service, idx) => (
          <Card
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
          >
            <IconWrap>
              <FontAwesomeIcon icon={service.icon} />
            </IconWrap>
            <CardTitle>{service.title}</CardTitle>
            <CardDesc>{service.desc}</CardDesc>
          </Card>
        ))}
      </CardGrid>
    </Container>
    <WaveDivider>
      <svg viewBox="0 0 1440 120" width="100%" height="80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#fff" d="M0,32L60,37.3C120,43,240,53,360,69.3C480,85,600,107,720,112C840,117,960,107,1080,90.7C1200,75,1320,53,1380,42.7L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" />
      </svg>
    </WaveDivider>
  </ServicesSection>
);

export default Services; 