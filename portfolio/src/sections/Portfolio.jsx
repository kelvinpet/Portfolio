import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faSpa, faCar, faUniversity, faGem, faImages, faPlay, faPenNib, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const WaveDivider = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  line-height: 0;
  z-index: 3;
`;

const PortfolioSection = styled.section`
  background: ${({ bgColor }) => bgColor || 'linear-gradient(135deg, #f3e5f5 0%, #ce93d8 100%)'};
  color: #222;
  padding: 4rem 0 3rem 0;
  position: relative;
  @media (max-width: 600px) {
    padding: 2.5rem 0.5rem 1.5rem 0.5rem;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;
  @media (max-width: 600px) {
    padding: 0 0.5rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 1.3rem;
    margin-bottom: 1.2rem;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const Card = styled(motion.div)`
  background: #f6f7f4;
  border-radius: 18px;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  box-shadow: 0 4px 24px rgba(60,80,40,0.10);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 8px 32px rgba(60,80,40,0.18);
  }
  @media (max-width: 600px) {
    padding: 1.2rem 0.7rem 1rem 0.7rem;
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

const GalleryButton = styled.button`
  margin-top: 1.2rem;
  background: #6e7f4e;
  color: #fff;
  border: none;
  border-radius: 24px;
  padding: 0.6rem 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background 0.2s;
  touch-action: manipulation;
  z-index: 2;
  &:hover {
    background: #b7c59a;
    color: #222;
  }
  &:active {
    background: #4e5e36;
    color: #fff;
    transform: scale(0.97);
  }
`;

const LightboxOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(34, 34, 34, 0.92);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LightboxContent = styled.div`
  max-width: 90vw;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LightboxMedia = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 24px rgba(60,80,40,0.18);
  max-width: 80vw;
  max-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LightboxImg = styled.img`
  max-width: 70vw;
  max-height: 55vh;
  border-radius: 8px;
`;

const LightboxVideo = styled.video`
  max-width: 70vw;
  max-height: 55vh;
  border-radius: 8px;
`;

const LightboxNav = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1.5rem;
`;

const LightboxBtn = styled.button`
  background: #6e7f4e;
  color: #fff;
  border: none;
  border-radius: 18px;
  padding: 0.4rem 1.2rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #b7c59a;
    color: #222;
  }
`;

// Portfolio project data with local files
const projects = [
  {
    icon: faUserTie,
    title: 'Dr. Ada Johnson (Mindset Coach)',
    desc: 'Designed webinar flyers, quote graphics, and Instagram carousels to promote productivity and mindset tips.',
    media: [
      '/Ada johnson/1.png',
      '/Ada johnson/2.png',
      '/Ada johnson/3.png',
      '/Ada johnson/4.png',
      '/Ada johnson/5.png',
      '/Ada johnson/6.png',
      '/Ada johnson/7.png',
      '/Ada johnson/8.png',
      '/Ada johnson/Ada business card.png',
      '/Ada johnson/ada logo.png',
      '/Ada johnson/Brand board.png',
      '/Ada johnson/DAJ.png',
      '/Ada johnson/Dr. Ada logom.png',
    ],
    mediaType: ['image','image','image','image','image','image','image','image','image','image','image','image','image'],
  },
  {
    icon: faSpa,
    title: 'Glow Treats (Skincare Brand)',
    desc: 'Built a soft, feminine-themed social media content pack — product highlights, skincare tips, beauty quotes.',
    media: [
      '/Glow treats/1.png',
      '/Glow treats/2.png',
      '/Glow treats/3.png',
      '/Glow treats/4.png',
      '/Glow treats/5.png',
      '/Glow treats/6.png',
      '/Glow treats/7.png',
      '/Glow treats/8.png',
      '/Glow treats/9.png',
      '/Glow treats/10.png',
      '/Glow treats/11.png',
      '/Glow treats/12 (2).png',
      '/Glow treats/12.png',
      '/Glow treats/13.png',
      '/Glow treats/14.png',
      '/Glow treats/15.png',
      '/Glow treats/16.png',
      '/Glow treats/17.png',
    ],
    mediaType: [
      'image','image','image','image','image','image','image','image','image','image','image','image','image','image','image','image','image','image'
    ],
  },
  {
    icon: faCar,
    title: 'Voltura (Car Brand)',
    desc: 'Created bold, clean graphics for automotive launches, promotional posts, and brand storytelling on Instagram.',
    media: [
      '/Voltura/voltura logo.png',
      '/Voltura/Voltura Ad_2.mp4',
      '/Voltura/voltura product launch_2.mp4',
    ],
    mediaType: ['image','video','video'],
  },
  {
    icon: faUniversity,
    title: 'Brew Haven',
    desc: 'Branding and social media graphics for a specialty coffee shop.',
    media: [
      '/Brew Haven/1.jpg',
      '/Brew Haven/2.jpg',
      '/Brew Haven/3.jpg',
      '/Brew Haven/4.jpg',
    ],
    mediaType: ['image', 'image', 'image', 'image'],
  },
  {
    icon: faGem,
    title: 'Grafhix Digitech Logo Designs',
    desc: 'Crafted clean and modern brand identity visuals for tech and creative services company.',
    media: [
      '/Grafhix Digitech Logo Designs/1.png',
      '/Grafhix Digitech Logo Designs/2.png',
      '/Grafhix Digitech Logo Designs/5.png',
      '/Grafhix Digitech Logo Designs/6.png',
      '/Grafhix Digitech Logo Designs/7.png',
      '/Grafhix Digitech Logo Designs/8.png',
      '/Grafhix Digitech Logo Designs/9.png',
      '/Grafhix Digitech Logo Designs/10.png',
      '/Grafhix Digitech Logo Designs/Shift.jpg',
    ],
    mediaType: ['image','image','image','image','image','image','image','image','image'],
  },
  {
    icon: faUniversity,
    title: 'EaseMoni Loans',
    desc: 'Promotional flyers and digital assets for EaseMoni Loans.',
    media: [
      '/EaseMoni Loans/1.png',
      '/EaseMoni Loans/2.png',
      '/EaseMoni Loans/4.png',
      '/EaseMoni Loans/5.png',
      '/EaseMoni Loans/6.png',
      '/EaseMoni Loans/7.png',
    ],
    mediaType: ['image','image','image','image','image','image'],
  },
  {
    icon: faUniversity,
    title: 'Okash Loans',
    desc: 'Promotional flyers and digital assets for Okash Loans.',
    media: [
      '/Okash Loans/1.png',
      '/Okash Loans/2.png',
      '/Okash Loans/3.png',
      '/Okash Loans/4.png',
      '/Okash Loans/5.png',
      '/Okash Loans/6.png',
      '/Okash Loans/7.png',
      '/Okash Loans/14.png',
      '/Okash Loans/17.png',
    ],
    mediaType: ['image','image','image','image','image','image','image','image','image'],
  },
  {
    icon: faGem,
    title: 'Rima Artistry',
    desc: 'Creative works and branding for Rima Artistry.',
    media: [
      '/Rima Artistry/Rima logo.png',
      '/Rima Artistry/Rima.mp4',
    ],
    mediaType: ['image', 'video'],
  },
  {
    icon: faSpa,
    title: 'Zick Lash & Brow',
    desc: 'Branding and promotional graphics for a beauty and brow studio.',
    media: [
      '/Zick Lash & Brow/1.png',
      '/Zick Lash & Brow/i am zick.mp4',
      '/Zick Lash & Brow/zick.mp4',
      '/Zick Lash & Brow/zick2.mp4',
    ],
    mediaType: ['image', 'video', 'video', 'video'],
  },
  {
    icon: faPenNib,
    title: 'Sharon Fitness Studio - Virtual Assistant',
    desc: 'Managed a 30-day content calendar and workflow for Sharon Fitness Studio using Trello. Supported content planning, scheduling, and project tracking for fitness and wellness campaigns.',
    media: [
      '/screenshots/sharon-fitness-trello.jpeg'
    ],
    mediaType: ['image'],
  },
];

const Portfolio = () => {
  const [lightbox, setLightbox] = useState({ open: false, projectIdx: 0, mediaIdx: 0 });

  const openLightbox = (projectIdx, mediaIdx = 0) => {
    setLightbox({ open: true, projectIdx, mediaIdx });
  };
  const closeLightbox = () => setLightbox({ ...lightbox, open: false });
  const nextMedia = () => {
    const project = projects[lightbox.projectIdx];
    setLightbox({ ...lightbox, mediaIdx: (lightbox.mediaIdx + 1) % project.media.length });
  };
  const prevMedia = () => {
    const project = projects[lightbox.projectIdx];
    setLightbox({ ...lightbox, mediaIdx: (lightbox.mediaIdx - 1 + project.media.length) % project.media.length });
  };

  return (
    <PortfolioSection bgColor="linear-gradient(135deg, #f3e5f5 0%, #ce93d8 100%)" id="portfolio">
      <Container>
        <Title>Portfolio</Title>
        <CardGrid>
          {projects.map((project, idx) => (
            <Card
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <IconWrap>
                <FontAwesomeIcon icon={project.icon} />
              </IconWrap>
              <CardTitle>{project.title}</CardTitle>
              <CardDesc>{project.desc}</CardDesc>
              {project.media.length > 0 && (
                <GalleryButton onClick={() => openLightbox(idx)} role="button" tabIndex={0}>
                  <FontAwesomeIcon icon={project.mediaType[0] === 'video' ? faPlay : faImages} />
                  View Work
                </GalleryButton>
              )}
            </Card>
          ))}
        </CardGrid>
      </Container>
      {lightbox.open && (
        <LightboxOverlay onClick={closeLightbox}>
          <LightboxContent onClick={e => e.stopPropagation()}>
            <LightboxMedia>
              {projects[lightbox.projectIdx].mediaType[lightbox.mediaIdx] === 'image' ? (
                <LightboxImg src={projects[lightbox.projectIdx].media[lightbox.mediaIdx]} alt="Portfolio work" />
              ) : (
                <LightboxVideo controls src={projects[lightbox.projectIdx].media[lightbox.mediaIdx]} />
              )}
            </LightboxMedia>
            <LightboxNav>
              <LightboxBtn onClick={prevMedia}>Previous</LightboxBtn>
              <LightboxBtn onClick={nextMedia}>Next</LightboxBtn>
              <LightboxBtn onClick={closeLightbox}>Close</LightboxBtn>
            </LightboxNav>
          </LightboxContent>
        </LightboxOverlay>
      )}
      <WaveDivider>
        <svg viewBox="0 0 1440 120" width="100%" height="80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#f6f7f4" d="M0,32L60,37.3C120,43,240,53,360,69.3C480,85,600,107,720,112C840,117,960,107,1080,90.7C1200,75,1320,53,1380,42.7L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" />
        </svg>
      </WaveDivider>
    </PortfolioSection>
  );
};

export default Portfolio; 