import React from 'react';
import { Typography, Link, Box, Container, Fade } from '@mui/material';
import useFadeIn from '../hooks/useFadeIn';

const Contact: React.FC = () => {
  const { fadeIn, duration } = useFadeIn(200, 800); // Customize delay and duration

  return (
    <React.Fragment>
      <Container>
        <Box
          height={'100vh'}
          width={'100%'}
          flexDirection={'column'}
          display="flex"
          justifyContent={'center'}
          gap={4}
          p={2}
        >
          <Fade in={fadeIn} timeout={duration}>  
            <div> 
              <Typography variant="h2" component='h2' gutterBottom>
                Let's Connect
              </Typography>
              <Typography variant="body1" gutterBottom>
                The best way to reach me is through my email <Link href="mailto:d.orlikova@outlook.com">d.orlikova@outlook.com</Link>
              </Typography>
            </div> 
          </Fade>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Contact;

