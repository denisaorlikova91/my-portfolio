import { AppBar, Box, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom'; 

interface NavProps {
  navLinks: { label: string; to: string }[];
}

const Nav: React.FC<NavProps> = ({ navLinks }) => {
  return (
      <AppBar color='transparent' position='fixed'>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-evenly' }} >
                {navLinks.map((link, index) => ( 
                    <Button key={index} color="inherit" component={Link} to={link.to}>{link.label}</Button>
                 ))}
            </Box>
      </AppBar>
  );
};

export default Nav;
