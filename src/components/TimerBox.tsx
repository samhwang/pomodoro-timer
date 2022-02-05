import { Grid, IconButton, Typography } from '@mui/material';
import { Pause, PlayArrow, Refresh } from '@mui/icons-material';

export default function TimerBox() {
  return (
    <>
      <Grid item xs={12}>
        <Typography id="timer-label" variant="h3">
          Session
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography id="time-left" variant="h3">
          00:00
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <IconButton id="start_stop">
          <PlayArrow />
          <Pause />
        </IconButton>
        <IconButton id="reset">
          <Refresh />
        </IconButton>
      </Grid>
    </>
  );
}
