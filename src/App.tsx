import {
  Grid,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Typography,
  Link,
} from '@mui/material';
import { useBoolean, useInterval, useToggle, useAudio } from 'react-use';
import { useEffect, useCallback } from 'react';
import SetTimerInput from './components/SetTimerInput';
import TimerBox from './components/TimerBox';
import useTimerValue from './hooks/useTimerValue';

const theme = createTheme();

export default function App() {
  const [breakLength, incBreak, decBreak, getBreak, , resetBreak] =
    useTimerValue(5);
  const [sessionLength, incSess, decSess, getSess, , resetSess] =
    useTimerValue(25);

  const [isBreakTime, toggleBreakTime] = useToggle(false);
  const [isTimerRunning, toggleTimerRunning] = useBoolean(false);
  const getMinutes = useCallback(
    (breaktime: boolean) => (breaktime ? getBreak() : getSess()),
    []
  );
  const [currentSeconds, , decreaseSeconds, , setSeconds] = useTimerValue(
    getMinutes(isBreakTime) * 60,
    3600,
    0
  );
  const [audio, , controls] = useAudio({
    src: '/beep.wav',
    autoPlay: false,
    id: 'beep',
  });

  useEffect(() => {
    toggleTimerRunning(false);
    setSeconds(getMinutes(isBreakTime) * 60);
  }, [breakLength, sessionLength]);

  useInterval(
    () => {
      if (currentSeconds > 0) {
        decreaseSeconds();
      }

      if (currentSeconds === 0) {
        toggleBreakTime(!isBreakTime);
        // by this point, React still hasn't finished the batch update yet, so
        // get minutes has to work with the reverse of what isBreakTime state is.
        setSeconds(getMinutes(!isBreakTime) * 60);
        controls.play();
      }
    },
    isTimerRunning ? 1000 : null
  );

  const resetAll = useCallback(() => {
    resetBreak();
    resetSess();
    toggleBreakTime(false);
    toggleTimerRunning(false);
    controls.seek(0);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container maxWidth="xs">
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
            <SetTimerInput
              timerValue={breakLength}
              inc={incBreak}
              dec={decBreak}
              type="break"
            />
          </Grid>
          <Grid item xs={6}>
            <SetTimerInput
              timerValue={sessionLength}
              inc={incSess}
              dec={decSess}
              type="session"
            />
          </Grid>
          <Grid item container xs={12}>
            {audio}
            <TimerBox
              seconds={currentSeconds}
              isTimerRunning={isTimerRunning}
              toggleTimer={toggleTimerRunning}
              reset={resetAll}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="body2"
            align="center"
            sx={{
              color: 'text.secondary',
              marginTop: 8,
              marginBottom: 4,
            }}
          >
            {'Built with '}
            <Link color="inherit" href="https://vitejs.dev/">
              Vite
            </Link>
            {'. Copyright © '}
            <Link color="inherit" href="https://samhwang.github.io/">
              Sam Huynh
            </Link>{' '}
            {currentYear}.
          </Typography>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
