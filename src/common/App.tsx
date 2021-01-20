import { CssBaseline, Grid, Typography } from '@material-ui/core';
import ButtonWithCounter from '../components/ButtonWithCounter';
import { useStyles } from '../hooks';

function App() {
  const classes = useStyles();
  const grids = [
    { label: 'Work Length', initialValue: 25, maxValue: 60 },
    { label: 'Short Break Length', initialValue: 5, maxValue: 60 },
    { label: 'Long Break Length', initialValue: 15, maxValue: 60 },
    { label: 'Interval', initialValue: 4 },
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
            {grids.map(({ label, initialValue, maxValue }) => (
              <Grid item xs={3} key={label}>
                <ButtonWithCounter
                  label={label}
                  initialValue={initialValue}
                  maxValue={maxValue}
                />
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
              <Grid item xs={4}>
                Start Button
              </Grid>
              <Grid item xs={4}>
                Stop Button
              </Grid>
              <Grid item xs={4}>
                Reset Button
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
