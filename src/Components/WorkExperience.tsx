import * as React from 'react';
import { Typography } from '@mui/material';
import WorkTimeline from './WorkTimeline/WorkTimeline';

export default function WorkExperience() {
  return (
    <React.Fragment>
      <Typography align='center' variant="h3" component='h2' mt={12} gutterBottom>
        Work Experience
      </Typography>
          <WorkTimeline />
    </React.Fragment>
  );
}