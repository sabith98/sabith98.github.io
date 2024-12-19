import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMobile, 
  faGlobe, 
  faCode, 
  faRocket,
  faDesktop,
  faShieldAlt 
} from '@fortawesome/free-solid-svg-icons';

const ServicesSection = styled.section`
  padding: 100px 0;
  background: #fff;
`;

const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const ServicesTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
`;

const ServicesSubtitle = styled(motion.p)`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 4rem;
  color: #666;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const ServiceCard = styled(motion.div)`
  background: #fff;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: #15cdfc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: #fff;
  font-size: 1.5rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #1a1a1a;
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const services = [
  {
    icon: faMobile,
    title: 'Mobile App Development',
    description: 'Create powerful, user-friendly mobile applications for iOS and Android platforms using the latest technologies.'
  },
  {
    icon: faGlobe,
    title: 'Web Development',
    description: 'Build responsive, scalable web applications that provide seamless user experiences across all devices.'
  },
  {
    icon: faCode,
    title: 'Custom Software Development',
    description: 'Develop tailored software solutions that address your specific business needs and challenges.'
  },
  {
    icon: faRocket,
    title: 'Digital Transformation',
    description: 'Transform your business with innovative digital solutions that drive growth and efficiency.'
  },
  {
    icon: faDesktop,
    title: 'UI/UX Design',
    description: 'Create intuitive and engaging user interfaces that enhance user experience and satisfaction.'
  },
  {
    icon: faShieldAlt,
    title: 'Maintenance & Support',
    description: 'Provide ongoing maintenance and support to ensure your applications run smoothly and securely.'
  }
];

const Services = () => {
  return (
    <ServicesSection>
      <ServicesContainer>
        <ServicesTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </ServicesTitle>
        <ServicesSubtitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We offer comprehensive digital solutions to help your business thrive in the modern world
        </ServicesSubtitle>
        
        <ServicesGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              <IconWrapper>
                <FontAwesomeIcon icon={service.icon} />
              </IconWrapper>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesContainer>
    </ServicesSection>
  );
};

export default Services;
