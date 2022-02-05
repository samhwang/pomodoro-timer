import { Grid, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Title from './components/Title';
import Footer from './components/Footer';
import SetTimerValue from './components/SetTimerValue';
import TimerBox from './components/TimerBox';
import useTimerValue from './hooks/useTimerValue';

const theme = createTheme();

export default function App() {
  const [breakLength, incBreak, decBreak] = useTimerValue(5);
  const [sessionLength, incSess, decSess] = useTimerValue(25);

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
            <TimerBox />
          </Grid>
        </Grid>
        <Footer />
      </Grid>
    </ThemeProvider>
  );
}
