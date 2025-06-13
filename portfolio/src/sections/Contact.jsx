import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  background: ${({ bgColor }) => bgColor || 'linear-gradient(135deg, #e0f7fa 0%, #b7c59a 100%)'};
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

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  @media (max-width: 600px) {
    gap: 1rem;
    justify-content: flex-start;
  }
`;

const SocialIcon = styled.a`
  color: #6e7f4e;
  font-size: 2rem;
  transition: color 0.2s;
  &:hover {
    color: #b7c59a;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid #b7c59a;
  font-size: 1rem;
  @media (max-width: 600px) {
    font-size: 0.98rem;
    padding: 0.6rem 0.7rem;
  }
`;

const Textarea = styled.textarea`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid #b7c59a;
  font-size: 1rem;
  min-height: 120px;
  @media (max-width: 600px) {
    font-size: 0.98rem;
    padding: 0.6rem 0.7rem;
    min-height: 80px;
  }
`;

const Button = styled.button`
  padding: 0.75rem 2rem;
  background: #6e7f4e;
  color: #fff;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1.1rem;
  border: none;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #b7c59a;
    color: #222;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
  }
`;

const Contact = () => (
  <ContactSection bgColor="linear-gradient(135deg, #e0f7fa 0%, #b7c59a 100%)" id="contact">
    <Container
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <Title>Contact</Title>
      <ContactInfo>
        <span><FontAwesomeIcon icon={faEnvelope} /> peterskelvin51@gmail.com</span>
        <span><FontAwesomeIcon icon={faWhatsapp} /> WhatsApp: +234 814 669 2164</span>
        <span><FontAwesomeIcon icon={faPhone} /> Call: +234 903 691 1159</span>
      </ContactInfo>
      <SocialLinks>
        <SocialIcon href="https://www.linkedin.com/in/kelvin-peters-740b75209" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </SocialIcon>
        <SocialIcon href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </SocialIcon>
        <SocialIcon href="https://wa.me/2348146692164" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </SocialIcon>
        <SocialIcon href="tel:+2349036911159" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faPhone} />
        </SocialIcon>
      </SocialLinks>
      <Form action="https://formspree.io/f/mdkgqanb" method="POST">
        <Input type="text" name="name" placeholder="Your Name" required />
        <Input type="email" name="email" placeholder="Your Email" required />
        <Textarea name="message" placeholder="Your Message" required />
        <Button type="submit">Send Message</Button>
      </Form>
    </Container>
  </ContactSection>
);

export default Contact; 