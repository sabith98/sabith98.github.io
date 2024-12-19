import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const TestimonialsSection = styled.section`
  padding: 100px 0;
  background: #f9f9f9;
  overflow: hidden;
`;

const TestimonialsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const TestimonialsHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const TestimonialsTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
`;

const TestimonialsSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
`;

const TestimonialsSlider = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`;

const TestimonialCard = styled(motion.div)`
  background: #fff;
  padding: 3rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
`;

const QuoteIcon = styled.div`
  color: #15cdfc;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const TestimonialText = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-style: italic;
`;

const ClientInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ClientImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-image: url(\${props => props.image});
  background-size: cover;
  background-position: center;
  margin-bottom: 1rem;
  border: 3px solid #15cdfc;
`;

const ClientName = styled.h4`
  font-size: 1.2rem;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`;

const ClientRole = styled.p`
  font-size: 1rem;
  color: #15cdfc;
`;

const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1a1a1a;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  z-index: 2;

  &:hover {
    background: #15cdfc;
    color: #fff;
  }

  &:disabled {
    background: #eee;
    color: #999;
    cursor: not-allowed;
  }

  ${props => props.left ? 'left: -25px;' : 'right: -25px;'}

  @media (max-width: 768px) {
    ${props => props.left ? 'left: 10px;' : 'right: 10px;'}
  }
`;

const testimonials = [
  {
    text: "Shatrends transformed our business with their innovative solutions. Their team's expertise and dedication to quality are unmatched in the industry.",
    name: "David Wilson",
    role: "CEO, TechCorp",
    image: "https://via.placeholder.com/150x150/15cdfc/ffffff"
  },
  {
    text: "Working with Shatrends was a game-changer for our startup. They delivered a world-class mobile app that our users love.",
    name: "Lisa Anderson",
    role: "Founder, HealthTech",
    image: "https://via.placeholder.com/150x150/15cdfc/ffffff"
  },
  {
    text: "The team at Shatrends goes above and beyond. Their attention to detail and commitment to excellence is evident in every project.",
    name: "Mark Thompson",
    role: "CTO, E-commerce Solutions",
    image: "https://via.placeholder.com/150x150/15cdfc/ffffff"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <TestimonialsSection>
      <TestimonialsContainer>
        <TestimonialsHeader>
          <TestimonialsTitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            What Our Clients Say
          </TestimonialsTitle>
          <TestimonialsSubtitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hear from our satisfied clients about their experience working with us
          </TestimonialsSubtitle>
        </TestimonialsHeader>

        <TestimonialsSlider>
          <AnimatePresence initial={false} custom={direction}>
            <TestimonialCard
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            >
              <QuoteIcon>
                <FontAwesomeIcon icon={faQuoteLeft} />
              </QuoteIcon>
              <TestimonialText>
                {testimonials[currentIndex].text}
              </TestimonialText>
              <ClientInfo>
                <ClientImage image={testimonials[currentIndex].image} />
                <ClientName>{testimonials[currentIndex].name}</ClientName>
                <ClientRole>{testimonials[currentIndex].role}</ClientRole>
              </ClientInfo>
            </TestimonialCard>
          </AnimatePresence>

          <SliderButton
            left
            onClick={() => paginate(-1)}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </SliderButton>
          <SliderButton
            onClick={() => paginate(1)}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </SliderButton>
        </TestimonialsSlider>
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};

export default Testimonials;
