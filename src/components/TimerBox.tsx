import { Grid, IconButton, Typography } from '@mui/material';
import { Pause, PlayArrow, Refresh } from '@mui/icons-material';
import { useMemo } from 'react';
import { secondsToMinutes } from 'date-fns';

interface ITimerBox {
  seconds: number;
  isTimerRunning: boolean;
  toggleTimer: (timerState: boolean) => void;
  reset: () => void;
  isBreak: boolean;
  currentSet: number;
}

export default function TimerBox({
  isTimerRunning,
  seconds,
  toggleTimer,
  reset,
  isBreak,
  currentSet,
}: ITimerBox) {
  const timeValue = useMemo(() => {
    const minutes = secondsToMinutes(seconds);
    const remainingSeconds = seconds - minutes * 60;
    const convertTo2Digits = (value: number) =>
      value.toString().padStart(2, '0');
    return `${convertTo2Digits(minutes)}:${convertTo2Digits(remainingSeconds)}`;
  }, [seconds]);

  return (
    <>
      <Grid item xs={6}>
        <Grid item xs={12}>
          <Typography id="timer-label" variant="h3">
            Current Set
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography id="sessions-left" variant="h3">
            {currentSet}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid item xs={12}>
          <Typography id="timer-label" variant="h3">
            {isBreak ? 'BREAK' : 'WORK'}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography id="time-left" variant="h3">
            {timeValue}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <IconButton
          id="start_stop"
          onClick={() => toggleTimer(!isTimerRunning)}
        >
          <PlayArrow />
          <Pause />
        </IconButton>
        <IconButton id="reset" onClick={() => reset()}>
          <Refresh />
        </IconButton>
      </Grid>
    </>
  );
}
