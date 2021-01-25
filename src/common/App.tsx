import { CssBaseline, Grid, Typography } from '@material-ui/core';
import {
  WorkLengthButton,
  LongBreakLengthButton,
  ShortBreakLengthButton,
  IntervalButton,
  StartButton,
  StopButton,
  ResetButton,
} from '../components/Buttons';
import { useStyles } from '../hooks';

function App() {
  const classes = useStyles();
  const buttonsWithCounter = [
    { label: 'Work Length', component: <WorkLengthButton /> },
    { label: 'Short Break Length', component: <ShortBreakLengthButton /> },
    { label: 'Long Break Length', component: <LongBreakLengthButton /> },
    { label: 'Interval', component: <IntervalButton /> },
  ];
  const timerButtons = [
    { label: 'Start', component: <StartButton /> },
    { label: 'Stop', component: <StopButton /> },
    { label: 'Reset', component: <ResetButton /> },
  ];

  return (
    <>
      <CssBaseline />
      <Grid container spacing={1} className={classes.root}>
        <Grid container item xs={12} alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h2" paragraph align="center">
              Pomodoro Timer
            </Typography>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={1}>
          <Grid
            container
            item
            xs={12}
            md={6}
            spacing={2}
            direction="column"
            alignItems="center"
            justify="space-between"
          >
            {buttonsWithCounter.map(({ label, component }) => (
              <Grid item xs={3} key={label}>
                {component}
              </Grid>
            ))}
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={6}
            direction="column"
            alignItems="center"
            justify="space-between"
          >
            <Grid item container xs={4} alignItems="center">
              <Grid item xs={12}>
                <Typography paragraph variant="h5">
                  Time remaining:
                </Typography>
              </Grid>
            </Grid>
            <Grid item container xs={4} alignItems="center">
              <Grid item xs={12}>
                <Typography paragraph variant="h5">
                  Insert timer element here
                </Typography>
              </Grid>
            </Grid>
            <Grid item container spacing={3} xs={4} alignItems="center">
              {timerButtons.map(({ label, component }) => (
                <Grid item xs={4} key={label}>
                  {component}
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
