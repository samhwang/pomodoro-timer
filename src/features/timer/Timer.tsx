import { Grid, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { useAudio } from 'react-use';
import SetTimerInput, { ISetTimerInput } from './SetTimerInput';
import { useTimerState } from './useTimer';
import TimerBox from './TimerBox';
import Header from '../ui/Header';
import Footer from '../ui/Footer';

type TimerState = ReturnType<typeof useTimerState>;

interface TimerProps {
  timerInputs: Array<ISetTimerInput>;
  currentSeconds: TimerState[0];
  isTimerRunning: TimerState[1];
  toggleTimerRunning: TimerState[2];
  resetAll: TimerState[3];
  isBreakTime: boolean;
  currentSet: number;
  audio: ReturnType<typeof useAudio>[0];
}

const theme = createTheme();

export default function Timer({
  timerInputs,
  currentSeconds,
  isTimerRunning,
  toggleTimerRunning,
  resetAll,
  isBreakTime,
  currentSet,
  audio,
}: TimerProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container maxWidth="xs">
        <Grid item xs={12}>
          <Header />
        </Grid>
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
          {timerInputs.map(({ timerValue, inc, dec, type }) => (
            <Grid item xs={4}>
              <SetTimerInput
                timerValue={timerValue}
                inc={inc}
                dec={dec}
                type={type}
                key={type}
              />
            </Grid>
          ))}
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
          <Footer />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
