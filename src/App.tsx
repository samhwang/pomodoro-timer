import { Grid, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { useBoolean, useInterval, useToggle, useAudio } from 'react-use';
import { useEffect, useCallback } from 'react';
import Title from './components/Title';
import Footer from './components/Footer';
import SetTimerValue from './components/SetTimerValue';
import TimerBox from './components/TimerBox';
import useTimerValue from './hooks/useTimerValue';

const theme = createTheme();

export default function App() {
  const [breakLength, incBreak, decBreak, getBreak, setBreak] =
    useTimerValue(5);
  const [sessionLength, incSess, decSess, getSess, setSess] = useTimerValue(25);

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
    setBreak(5);
    setSess(25);
    toggleBreakTime(false);
    toggleTimerRunning(false);
    controls.seek(0);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Grid container maxWidth="xs">
        <CssBaseline />
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
          <Title />
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
            {audio}
            <TimerBox
              seconds={currentSeconds}
              isTimerRunning={isTimerRunning}
              toggleTimer={toggleTimerRunning}
              reset={resetAll}
            />
          </Grid>
        </Grid>
        <Footer />
      </Grid>
    </ThemeProvider>
  );
}
