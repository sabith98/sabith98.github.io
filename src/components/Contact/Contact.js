import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope,
  faCheck,
  faExclamationCircle
} from '@fortawesome/free-solid-svg-icons';

const ContactSection = styled.section`
  padding: 100px 0;
  background: #fff;
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const ContactTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
`;

const ContactSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 15px;
  height: fit-content;
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  background: #15cdfc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-right: 1rem;
  flex-shrink: 0;
`;

const ContactInfoText = styled.div`
  h4 {
    font-size: 1.2rem;
    color: #1a1a1a;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #666;
    line-height: 1.6;
  }
`;

const ContactForm = styled(motion.form)`
  display: grid;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid ${props => props.error ? '#ff4d4d' : props.valid ? '#4caf50' : '#ddd'};
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #15cdfc;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 2px solid ${props => props.error ? '#ff4d4d' : props.valid ? '#4caf50' : '#ddd'};
  border-radius: 8px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #15cdfc;
  }
`;

const ErrorMessage = styled.span`
  color: #ff4d4d;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
  }
`;

const SubmitButton = styled(motion.button)`
  background: #15cdfc;
  color: #fff;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #0fb4e0;
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const ValidationIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.error ? '#ff4d4d' : '#4caf50'};
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [validFields, setValidFields] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.length >= 2;
      case 'email':
        return validateEmail(value);
      case 'subject':
        return value.length >= 5;
      case 'message':
        return value.length >= 10;
      default:
        return true;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Validate field
    const isValid = validateField(name, value);
    if (isValid) {
      setValidFields(prev => ({ ...prev, [name]: true }));
      setErrors(prev => ({ ...prev, [name]: undefined }));
    } else {
      setValidFields(prev => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      if (!validateField(key, formData[key])) {
        newErrors[key] = getErrorMessage(key);
      }
    });

    if (Object.keys(newErrors).length === 0) {
      try {
        // Here you would typically send the data to your backend
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setValidFields({});
      } catch (error) {
        alert('Failed to send message. Please try again.');
      }
    } else {
      setErrors(newErrors);
    }

    setIsSubmitting(false);
  };

  const getErrorMessage = (field) => {
    switch (field) {
      case 'name':
        return 'Name must be at least 2 characters long';
      case 'email':
        return 'Please enter a valid email address';
      case 'subject':
        return 'Subject must be at least 5 characters long';
      case 'message':
        return 'Message must be at least 10 characters long';
      default:
        return 'This field is required';
    }
  };

  return (
    <ContactSection>
      <ContactContainer>
        <ContactHeader>
          <ContactTitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </ContactTitle>
          <ContactSubtitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have a project in mind? We'd love to hear from you.
          </ContactSubtitle>
        </ContactHeader>

        <ContactContent>
          <ContactInfo>
            <ContactInfoItem>
              <IconWrapper>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </IconWrapper>
              <ContactInfoText>
                <h4>Our Location</h4>
                <p>123 Business Street, Silicon Valley, CA 94022</p>
              </ContactInfoText>
            </ContactInfoItem>

            <ContactInfoItem>
              <IconWrapper>
                <FontAwesomeIcon icon={faPhone} />
              </IconWrapper>
              <ContactInfoText>
                <h4>Phone Number</h4>
                <p>+1 (555) 123-4567</p>
              </ContactInfoText>
            </ContactInfoItem>

            <ContactInfoItem>
              <IconWrapper>
                <FontAwesomeIcon icon={faEnvelope} />
              </IconWrapper>
              <ContactInfoText>
                <h4>Email Address</h4>
                <p>contact@shatrends.com</p>
              </ContactInfoText>
            </ContactInfoItem>
          </ContactInfo>

          <ContactForm
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FormGroup>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                valid={validFields.name}
              />
              {validFields.name && <ValidationIcon icon={faCheck} />}
              {errors.name && (
                <ErrorMessage>
                  <FontAwesomeIcon icon={faExclamationCircle} />
                  {errors.name}
                </ErrorMessage>
              )}
            </FormGroup>

            <FormGroup>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                valid={validFields.email}
              />
              {validFields.email && <ValidationIcon icon={faCheck} />}
              {errors.email && (
                <ErrorMessage>
                  <FontAwesomeIcon icon={faExclamationCircle} />
                  {errors.email}
                </ErrorMessage>
              )}
            </FormGroup>

            <FormGroup>
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                error={errors.subject}
                valid={validFields.subject}
              />
              {validFields.subject && <ValidationIcon icon={faCheck} />}
              {errors.subject && (
                <ErrorMessage>
                  <FontAwesomeIcon icon={faExclamationCircle} />
                  {errors.subject}
                </ErrorMessage>
              )}
            </FormGroup>

            <FormGroup>
              <TextArea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                valid={validFields.message}
              />
              {errors.message && (
                <ErrorMessage>
                  <FontAwesomeIcon icon={faExclamationCircle} />
                  {errors.message}
                </ErrorMessage>
              )}
            </FormGroup>

            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </ContactForm>
        </ContactContent>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
