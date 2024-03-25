import React from 'react';
import Nav from './Nav';

interface HeaderProps {} 

const Header: React.FC<HeaderProps> = () => {
  const navLinks = [
    { label: 'About', to: '/' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <header>
      <Nav navLinks={navLinks} /> 
    </header>
  );
};

export default Header;
