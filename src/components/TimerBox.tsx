import { IconButton, Grid, Typography } from '@mui/material';
import { PlayArrow, Pause, Refresh } from '@mui/icons-material';
import SetTimerValue from './SetTimerValue';
import useTimerValue from '../hooks/useTimerValue';

export default function TimerBox() {
  const [breakLength, incBreak, decBreak] = useTimerValue(5);
  const [sessionLength, incSess, decSess] = useTimerValue(25);

  return (
    <Grid
      item
      container
      xs={12}
      sx={{
        marginTop: 8,
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Grid item xs={12}>
        <Typography variant="h1">25 + 5 Clock</Typography>
      </Grid>
      <Grid item xs={6}>
        <SetTimerValue
          timerValue={breakLength}
          inc={incBreak}
          dec={decBreak}
          type="break"
        />
      </Grid>
      <Grid item xs={6}>
        <SetTimerValue
          timerValue={sessionLength}
          inc={incSess}
          dec={decSess}
          type="session"
        />
      </Grid>
      <Grid item container xs={12}>
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
      </Grid>
    </Grid>
  );
}
