import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLinkedin, 
  faTwitter, 
  faGithub 
} from '@fortawesome/free-brands-svg-icons';

const AboutSection = styled.section`
  padding: 100px 0;
  background: #fff;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const AboutHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const AboutTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
`;

const AboutSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const StorySection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 6rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const StoryContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StoryTitle = styled(motion.h3)`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
`;

const StoryText = styled(motion.p)`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const StoryImage = styled(motion.div)`
  width: 100%;
  height: 400px;
  background-image: url('https://via.placeholder.com/600x400/15cdfc/ffffff');
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatItem = styled(motion.div)`
  text-align: center;
`;

const StatNumber = styled.h4`
  font-size: 2.5rem;
  color: #15cdfc;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.p`
  font-size: 1rem;
  color: #666;
`;

const TeamSection = styled.div`
  margin-top: 6rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const TeamMemberCard = styled(motion.div)`
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const MemberImage = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(\${props => props.image});
  background-size: cover;
  background-position: center;
`;

const MemberInfo = styled.div`
  padding: 1.5rem;
  text-align: center;
`;

const MemberName = styled.h4`
  font-size: 1.3rem;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`;

const MemberRole = styled.p`
  font-size: 1rem;
  color: #15cdfc;
  margin-bottom: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: #666;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #15cdfc;
  }
`;

const teamMembers = [
  {
    name: 'John Smith',
    role: 'CEO & Founder',
    image: 'https://via.placeholder.com/300x400/15cdfc/ffffff',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Sarah Johnson',
    role: 'Lead Developer',
    image: 'https://via.placeholder.com/300x400/15cdfc/ffffff',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Michael Chen',
    role: 'UI/UX Designer',
    image: 'https://via.placeholder.com/300x400/15cdfc/ffffff',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Emily Davis',
    role: 'Mobile Developer',
    image: 'https://via.placeholder.com/300x400/15cdfc/ffffff',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  }
];

const stats = [
  { number: '150+', label: 'Projects Completed' },
  { number: '50+', label: 'Happy Clients' },
  { number: '10+', label: 'Years Experience' },
  { number: '25+', label: 'Team Members' }
];

const About = () => {
  return (
    <AboutSection>
      <AboutContainer>
        <AboutHeader>
          <AboutTitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Shatrends
          </AboutTitle>
          <AboutSubtitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We're a team of passionate developers, designers, and innovators dedicated to creating exceptional digital experiences.
          </AboutSubtitle>
        </AboutHeader>

        <StorySection>
          <StoryContent>
            <StoryTitle
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Story
            </StoryTitle>
            <StoryText
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Founded in 2013, Shatrends has grown from a small startup to a leading digital solutions provider. Our journey has been driven by innovation, excellence, and a commitment to delivering exceptional value to our clients.
            </StoryText>
            <StoryText
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              We believe in the power of technology to transform businesses and enhance people's lives. Our team combines technical expertise with creative thinking to develop solutions that drive real business results.
            </StoryText>
            
            <StatsContainer>
              {stats.map((stat, index) => (
                <StatItem
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <StatNumber>{stat.number}</StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatItem>
              ))}
            </StatsContainer>
          </StoryContent>
          
          <StoryImage
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </StorySection>

        <TeamSection>
          <AboutTitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Meet Our Team
          </AboutTitle>
          <AboutSubtitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The talented people behind our success
          </AboutSubtitle>

          <TeamGrid>
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <MemberImage image={member.image} />
                <MemberInfo>
                  <MemberName>{member.name}</MemberName>
                  <MemberRole>{member.role}</MemberRole>
                  <SocialLinks>
                    <SocialLink href={member.social.linkedin} target="_blank">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </SocialLink>
                    <SocialLink href={member.social.twitter} target="_blank">
                      <FontAwesomeIcon icon={faTwitter} />
                    </SocialLink>
                    <SocialLink href={member.social.github} target="_blank">
                      <FontAwesomeIcon icon={faGithub} />
                    </SocialLink>
                  </SocialLinks>
                </MemberInfo>
              </TeamMemberCard>
            ))}
          </TeamGrid>
        </TeamSection>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
