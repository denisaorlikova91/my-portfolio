import { Box, Button, Typography } from '@mui/material';
import React from 'react';

interface FooterProps {} 

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer>
            <Box sx={{ border: '1px dashed black' , flexGrow: 1, display: 'flex', justifyContent: 'space-evenly' }} >
                <Typography variant="body1" component="p" gutterBottom>Denisa Orlikova © 2024</Typography>
            </Box>
        </footer>
    );
};

export default Footer;
