import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const Nav = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
  transition: background 0.3s, box-shadow 0.3s;
  background: ${({ scrolled }) =>
    scrolled ? 'rgba(246, 247, 244, 0.97)' : 'transparent'};
  box-shadow: ${({ scrolled }) =>
    scrolled ? '0 2px 12px rgba(60,80,40,0.07)' : 'none'};
`;

const NavContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

const Logo = styled.a`
  font-size: 1.3rem;
  font-weight: 700;
  color: #6e7f4e;
  text-decoration: none;
  letter-spacing: 1px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 800px) {
    position: absolute;
    top: 70px;
    left: 0;
    width: 100vw;
    background: rgba(246, 247, 244, 0.97);
    backdrop-filter: blur(8px);
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: ${({ open }) => (open ? '2rem 0' : '0')};
    transition: max-height 0.3s, padding 0.3s;
    max-height: ${({ open }) => (open ? '400px' : '0')};
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(60,80,40,0.18);
    z-index: 1200;
  }
`;

const NavLink = styled.a`
  color: #222;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.2s;
  position: relative;
  &:hover {
    color: #6e7f4e;
  }
  &.active {
    color: #6e7f4e;
    font-weight: 700;
  }
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  padding: 0;
  z-index: 200;
  @media (max-width: 800px) {
    display: flex;
  }
`;

const Bar = styled.span`
  width: 24px;
  height: 3px;
  background: #6e7f4e;
  margin: 3px 0;
  border-radius: 2px;
  transition: 0.3s;
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <Logo href="#home">Kelvin Peters</Logo>
        <Hamburger onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle menu">
          <Bar style={{ transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none' }} />
          <Bar style={{ opacity: menuOpen ? 0 : 1 }} />
          <Bar style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }} />
        </Hamburger>
        <NavLinks open={menuOpen}>
          <NavLink href="#home" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink href="#about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink href="#services" onClick={() => setMenuOpen(false)}>Services</NavLink>
          <NavLink href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</NavLink>
          <NavLink href="#resume" onClick={() => setMenuOpen(false)}>Resume</NavLink>
          <NavLink href="#contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;