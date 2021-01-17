import { CssBaseline, Grid, Typography } from '@material-ui/core';
import TimerLengthButton from '../components/TimerLengthButton';
import { useStyles } from '../hooks';

function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Grid container spacing={1} className={classes.root}>
        <Typography variant="h1" paragraph>
          Pomodoro Timer
        </Typography>
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={4}>
            <TimerLengthButton type="Work" initialValue={25} />
          </Grid>
          <Grid item xs={4}>
            <TimerLengthButton type="Short Break" initialValue={5} />
          </Grid>
          <Grid item xs={4}>
            <TimerLengthButton type="Long Break" initialValue={15} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
