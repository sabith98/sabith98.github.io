import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  height: 90vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
`;

const HeroContent = styled.div`
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #fff;
`;

const HeroH1 = styled(motion.h1)`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroP = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  max-width: 600px;
  
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeroButton = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background: #15cdfc;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #0fb4e0;
    transform: translateY(-2px);
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroH1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Transform Your Digital Vision Into Reality
        </HeroH1>
        <HeroP
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We create cutting-edge web and mobile applications that drive business growth and user engagement.
        </HeroP>
        <HeroButton
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </HeroButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
