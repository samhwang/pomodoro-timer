import { CssBaseline, Grid, Typography } from '@material-ui/core';
import ButtonWithCounter from '../components/ButtonWithCounter';
import { useStyles } from '../hooks';

function App() {
  const classes = useStyles();
  const grids = [
    { label: 'Work Length', initialValue: 25 },
    { label: 'Short Break Length', initialValue: 5 },
    { label: 'Long Break Length', initialValue: 15 },
    { label: 'Interval', initialValue: 4 },
  ];

  return (
    <>
      <CssBaseline />
      <Grid container spacing={1} className={classes.root}>
        <Typography variant="h2" paragraph>
          Pomodoro Timer
        </Typography>
        <Grid container item xs={12} spacing={2}>
          {grids.map(({ label, initialValue }) => (
            <Grid item xs={3} key={label}>
              <ButtonWithCounter label={label} initialValue={initialValue} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
}

export default App;
