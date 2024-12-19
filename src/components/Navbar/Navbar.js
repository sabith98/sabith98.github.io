import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Nav = styled.nav`
  background: #1a1a1a;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1200px) / 2);
  z-index: 10;
`;

const Logo = styled(Link)`
  color: #fff;
  font-size: 1.8rem;
  font-weight: bold;
  text-decoration: none;
  padding: 0 1rem;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  
  &:hover {
    color: #15cdfc;
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo to="/">Shatrends</Logo>
      <MobileIcon onClick={toggle}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </MobileIcon>
      <NavMenu>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
