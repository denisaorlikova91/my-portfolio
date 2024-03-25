import { CssBaseline, Container, Box, Typography } from '@mui/material';
import React from 'react';

interface AboutProps {} 

/**
 * Represents the About component.
 * 
 * @component
 * @example
 * ```tsx
 * <About />
 * ```
 */
const About: React.FC<AboutProps> = () => {
    return (
        <React.Fragment>
        <Container>
            <Box
                height={'100vh'}
                width={'100%'}
                display="flex"
                justifyContent={'center'}
                alignItems="center"
                gap={4}
                p={2}
                sx={{ border: '1px dashed hotpink'}}
                >
             
             <Typography variant="h1" component="h1" gutterBottom>About</Typography>

            </Box>
        </Container>
  </React.Fragment>
    );
};

export default About;
