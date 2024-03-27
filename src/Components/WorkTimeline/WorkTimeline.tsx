import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkTimelineItem from './WorkTimelineItem';
import { Grid } from '@mui/material';

export default function WorkTimeline() {
  return (
    <React.Fragment>
        <Grid container spacing={2} md={5}>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color='primary' />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Eat</TimelineContent>
              </TimelineItem>
              <WorkTimelineItem />
              <WorkTimelineItem />
              <WorkTimelineItem />
          </Timeline>
      </Grid>
    </React.Fragment>
  );
}