import { Container, Box, Typography } from '@mui/material';
import React, {  } from 'react';

interface CurrentProjectsProps {} 

const CurrentProjects: React.FC<CurrentProjectsProps> = () => {   

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
                    <Typography variant="h2" component="h2" gutterBottom>CurrentProjects</Typography>
                    <Typography variant="body1" gutterBottom>
                        This section is still under construction. Please check back later.
                    </Typography>
                </Box>
            </Container>
        </React.Fragment>
    );
};

export default CurrentProjects;
