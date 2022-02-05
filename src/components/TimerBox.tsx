import { Grid, IconButton, Typography } from '@mui/material';
import { Pause, PlayArrow, Refresh } from '@mui/icons-material';

interface ITimerBox {
  seconds: number;
  isTimerRunning: boolean;
  toggleTimer: Function;
}

export default function TimerBox({
  isTimerRunning,
  seconds,
  toggleTimer,
}: ITimerBox) {
  return (
    <>
      <Grid item xs={12}>
        <Typography id="timer-label" variant="h3">
          Session
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography id="time-left" variant="h3">
          {seconds}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <IconButton
          id="start_stop"
          onClick={() => toggleTimer(!isTimerRunning)}
        >
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
