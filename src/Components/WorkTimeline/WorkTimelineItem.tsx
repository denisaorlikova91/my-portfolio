import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography } from '@mui/material';

export default function WorkTimelineItem() {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot variant="outlined" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography fontWeight={'bold'}>
          React/TypeScript Developer | 2019 - 2023
        </Typography>
        <Typography>
          React/TypeScript Developer | 2019 - 2023
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}