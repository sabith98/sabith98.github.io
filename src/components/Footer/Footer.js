import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

const FooterSection = styled.footer`
  background: #1a1a1a;
  color: #fff;
  padding: 80px 0 20px;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterColumn = styled.div``;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  margin-bottom: 1rem;
  display: block;
`;

const FooterText = styled.p`
  color: #999;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: all 0.3s ease;
  
  &:hover {
    background: #15cdfc;
    transform: translateY(-3px);
  }
`;

const FooterTitle = styled.h4`
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 1rem;
  
  a {
    color: #999;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #15cdfc;
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  text-align: center;
  color: #999;
`;

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterContent>
          <FooterColumn>
            <Logo to="/">Shatrends</Logo>
            <FooterText>
              We create cutting-edge web and mobile applications that drive business growth and user engagement. Our team of experts is dedicated to delivering exceptional digital experiences.
            </FooterText>
            <SocialLinks>
              <SocialLink href="#" target="_blank">
                <FontAwesomeIcon icon={faFacebookF} />
              </SocialLink>
              <SocialLink href="#" target="_blank">
                <FontAwesomeIcon icon={faTwitter} />
              </SocialLink>
              <SocialLink href="#" target="_blank">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </SocialLink>
              <SocialLink href="#" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </SocialLink>
              <SocialLink href="#" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </SocialLink>
            </SocialLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLinks>
              <FooterLink>
                <Link to="/">Home</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/about">About Us</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/services">Services</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/portfolio">Portfolio</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/contact">Contact</Link>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Services</FooterTitle>
            <FooterLinks>
              <FooterLink>
                <a href="#">Web Development</a>
              </FooterLink>
              <FooterLink>
                <a href="#">Mobile App Development</a>
              </FooterLink>
              <FooterLink>
                <a href="#">UI/UX Design</a>
              </FooterLink>
              <FooterLink>
                <a href="#">Custom Software</a>
              </FooterLink>
              <FooterLink>
                <a href="#">Digital Transformation</a>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Contact Info</FooterTitle>
            <FooterLinks>
              <FooterLink>
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
              </FooterLink>
              <FooterLink>
                <a href="mailto:contact@shatrends.com">contact@shatrends.com</a>
              </FooterLink>
              <FooterLink>
                <a href="#">123 Business Street,</a>
              </FooterLink>
              <FooterLink>
                <a href="#">Silicon Valley, CA 94022</a>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>
        </FooterContent>

        <FooterBottom>
          <p>&copy; {new Date().getFullYear()} Shatrends. All rights reserved.</p>
        </FooterBottom>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
