import { CssBaseline, Grid, Typography } from '@material-ui/core';
import ButtonWithCounter from '../components/ButtonWithCounter';
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
          <Grid item xs={3}>
            <ButtonWithCounter label="Work Length" initialValue={25} />
          </Grid>
          <Grid item xs={3}>
            <ButtonWithCounter label="Short Break Length" initialValue={5} />
          </Grid>
          <Grid item xs={3}>
            <ButtonWithCounter label="Long Break Length" initialValue={15} />
          </Grid>
          <Grid item xs={3}>
            <ButtonWithCounter label="Interval" initialValue={4} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
