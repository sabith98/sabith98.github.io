import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const PortfolioSection = styled.section`
  padding: 100px 0;
  background: #f9f9f9;
`;

const PortfolioContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const PortfolioTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
`;

const PortfolioSubtitle = styled(motion.p)`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 3rem;
  color: #666;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const FilterButton = styled.button`
  padding: 0.8rem 1.5rem;
  background: ${props => props.active ? '#15cdfc' : '#fff'};
  color: ${props => props.active ? '#fff' : '#1a1a1a'};
  border: 2px solid #15cdfc;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #15cdfc;
    color: #fff;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const ProjectCard = styled(motion.div)`
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const ProjectImage = styled.div`
  height: 200px;
  background-image: url(\${props => props.image});
  background-size: cover;
  background-position: center;
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
`;

const ProjectCategory = styled.span`
  color: #15cdfc;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: block;
`;

const ProjectDescription = styled.p`
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
`;

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A full-featured e-commerce platform with real-time inventory management.',
    image: 'https://via.placeholder.com/400x300/15cdfc/ffffff'
  },
  {
    id: 2,
    title: 'Fitness Tracking App',
    category: 'Mobile App',
    description: 'Cross-platform mobile app for tracking workouts and nutrition.',
    image: 'https://via.placeholder.com/400x300/15cdfc/ffffff'
  },
  {
    id: 3,
    title: 'Business Analytics Dashboard',
    category: 'Web Development',
    description: 'Real-time analytics dashboard for business intelligence.',
    image: 'https://via.placeholder.com/400x300/15cdfc/ffffff'
  },
  {
    id: 4,
    title: 'Social Media App',
    category: 'Mobile App',
    description: 'Feature-rich social media application with real-time messaging.',
    image: 'https://via.placeholder.com/400x300/15cdfc/ffffff'
  },
  {
    id: 5,
    title: 'Healthcare Management System',
    category: 'Custom Software',
    description: 'Comprehensive healthcare management solution for clinics.',
    image: 'https://via.placeholder.com/400x300/15cdfc/ffffff'
  },
  {
    id: 6,
    title: 'Restaurant Ordering System',
    category: 'Custom Software',
    description: 'Digital ordering and management system for restaurants.',
    image: 'https://via.placeholder.com/400x300/15cdfc/ffffff'
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web Development', 'Mobile App', 'Custom Software'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <PortfolioSection>
      <PortfolioContainer>
        <PortfolioTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Portfolio
        </PortfolioTitle>
        <PortfolioSubtitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore our latest projects and see how we've helped businesses grow
        </PortfolioSubtitle>

        <FilterContainer>
          {categories.map((category, index) => (
            <FilterButton
              key={index}
              active={filter === category}
              onClick={() => setFilter(category)}
            >
              {category}
            </FilterButton>
          ))}
        </FilterContainer>

        <ProjectsGrid>
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -10 }}
              >
                <ProjectImage image={project.image} />
                <ProjectInfo>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectCategory>{project.category}</ProjectCategory>
                  <ProjectDescription>{project.description}</ProjectDescription>
                </ProjectInfo>
              </ProjectCard>
            ))}
          </AnimatePresence>
        </ProjectsGrid>
      </PortfolioContainer>
    </PortfolioSection>
  );
};

export default Portfolio;
