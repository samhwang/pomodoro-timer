import {
  Grid,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Typography,
  Link,
} from '@mui/material';
import { useBoolean, useAudio } from 'react-use';
import { useCallback } from 'react';
import SetTimerInput from './components/SetTimerInput';
import TimerBox from './components/TimerBox';
import useTimerValue from './hooks/useTimerValue';
import useTimerState from './hooks/useTimerState';

const theme = createTheme();

export default function App() {
  const [breakLength, incBreak, decBreak, getBreak, , resetBreak] =
    useTimerValue(5);
  const [sessionLength, incSess, decSess, getSess, , resetSess] =
    useTimerValue(25);
  const [sets, incSet, decSet, , , resetSet] = useTimerValue(16, 48, 0);
  const [currentSet, incCurrentSet, , , , resetCurrentSet] = useTimerValue(
    0,
    sets,
    0
  );

  const [isBreakTime, toggleBreakTime] = useBoolean(false);
  const getMinutes = useCallback(
    (breaktime: boolean = isBreakTime) => (breaktime ? getBreak() : getSess()),
    []
  );
  const [audio, , controls] = useAudio({
    src: '/beep.wav',
    autoPlay: false,
    id: 'beep',
  });

  const [currentSeconds, isTimerRunning, toggleTimerRunning, resetAll] =
    useTimerState(
      getMinutes(isBreakTime),
      () => {
        if (currentSet === sets) {
          toggleTimerRunning(false);
          return;
        }

        if (isBreakTime) {
          incCurrentSet();
        }

        toggleBreakTime(!isBreakTime);
        controls.play();
      },
      () => {
        resetBreak();
        resetSess();
        resetSet();
        resetCurrentSet();
        toggleBreakTime(false);
        controls.seek(0);
      }
    );

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
            <Typography variant="h1">Pomodoro Timer</Typography>
          </Grid>
          <Grid item xs={4}>
            <SetTimerInput
              timerValue={sets}
              inc={incSet}
              dec={decSet}
              type="sets"
            />
          </Grid>
          <Grid item xs={4}>
            <SetTimerInput
              timerValue={breakLength}
              inc={incBreak}
              dec={decBreak}
              type="break"
            />
          </Grid>
          <Grid item xs={4}>
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
              isBreak={isBreakTime}
              currentSet={currentSet}
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
