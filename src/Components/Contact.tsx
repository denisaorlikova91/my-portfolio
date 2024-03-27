import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Typography, Link, List, ListItem, ListItemIcon, ListItemText, Box, Container } from '@mui/material';

const Contact: React.FC = () => {
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
               <Typography variant="h2" component='h2' gutterBottom>
        Let's Connect
      </Typography>
      <Typography variant="body1" gutterBottom>
        The best way to reach me is through my email <Link href="mailto:d.orlikova@outlook.com">d.orlikova@outlook.com</Link>
      </Typography>
        </Box>
    </Container>
</React.Fragment>
  );
};

export default Contact;
