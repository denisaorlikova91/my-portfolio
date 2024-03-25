import { Container, Box, Typography } from '@mui/material';
import React from 'react';

interface ProjectsProps {} 

const Projects: React.FC<ProjectsProps> = () => {
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
             
             <Typography variant="h1" component="h1" gutterBottom>Projects</Typography>

            </Box>
        </Container>
  </React.Fragment>
    );
};

export default Projects;
