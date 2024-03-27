import { Container, Box, Typography, Link, Stack } from '@mui/material';
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import LogoDevIcon from '@mui/icons-material/LogoDev';

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
                gap={4}
                p={2}
                >
                    <Box
                    height={'100vh'}
                    width={'100%'}
                    flexDirection="column"
                    display="flex"
                    justifyContent={'center'}
                    gap={4}
                    p={2}
                    >
                        <Typography variant="h2" component='h2' gutterBottom>
                            Hi 👋, I'm Denisa Orlikova
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            I build beautiful React interfaces by day and tinker with AI generated art and Python by night.
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <Link href="https://dev.to/orlikova" target="_blank" rel="noopener noreferrer">
                                <LogoDevIcon />
                            </Link>
                            <Link href="https://www.linkedin.com/in/denisaorlikova91" target="_blank" rel="noopener noreferrer">
                                <LinkedIn />
                            </Link>
                            <Link href="https://github.com/denisaorlikova91" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon />
                            </Link>
                            <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon />
                            </Link>
                        </Stack>
                    </Box>
                    <Box
                    height={'100vh'}
                    width={'100%'}
                    flexDirection="column"
                    display="flex"
                    justifyContent={'center'}
                    gap={4}
                    p={2}
                    sx={{
                        display: {
                            xs: 'none', // hide on mobile
                            sm: 'none', // show on tablet and larger screens
                            md: 'flex',
                        },
                    }}
                    >
                        <img src='cyborg.jpeg' alt="Denisa Orlikova" width='100%' height='auto' />
                    </Box>
            </Box>
        </Container>
  </React.Fragment>
    );
};

export default About;
