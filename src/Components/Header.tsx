import React from 'react';
import Nav from './Nav';

interface HeaderProps {} 

const Header: React.FC<HeaderProps> = () => {
  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Work Experience', to: '/workexperience' },
    { label: 'Current Projects', to: '/currentprojects' },
    { label: 'Contact', to: '/contact' },
    { label: 'Blog', to: '/blog' },
  ];

  return (
    <header>
      <Nav navLinks={navLinks} /> 
    </header>
  );
};

export default Header;
