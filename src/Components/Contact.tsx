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
            display="flex"
            justifyContent={'center'}
            alignItems="center"
            gap={4}
            p={2}
            sx={{ border: '1px dashed hotpink'}}
            >
         
         <section className="contact-page">
      <Typography variant="h4" gutterBottom>
        Let's Connect
      </Typography>
      <Typography variant="body1" gutterBottom>
        The best way to reach me is through email or on my social platforms.
      </Typography>

      <Box sx={{ mt: 3 }}> {/* Adds spacing */}
        <List>
          <ListItem>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText>
              <Link href="mailto:d.orlikova@outlook.com">d.orlikova@outlook.com</Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LinkedInIcon />
            </ListItemIcon>
            <ListItemText>
              <Link href="https://www.linkedin.com/in/denisaorlikova91" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Box>
    </section>

        </Box>
    </Container>
</React.Fragment>
  );
};

export default Contact;
