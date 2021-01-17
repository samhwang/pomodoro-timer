import { IconButton, Grid, Typography } from '@material-ui/core';
import { ArrowUpward, ArrowDownward } from '@material-ui/icons';
import { useTimerValue } from '../hooks';

interface ITimerLengthButton {
  type?: string;
  initialValue?: number;
}

function TimerLengthButton({
  type = '',
  initialValue = 0,
}: ITimerLengthButton) {
  const [minute, increase, decrease] = useTimerValue(initialValue);

  return (
    <Grid container item xs={12}>
      <Grid item xs={12}>
        <Typography paragraph variant="h5">
          {type} Length
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <IconButton disableRipple edge="end" color="primary" onClick={increase}>
          <ArrowUpward />
        </IconButton>
      </Grid>
      <Grid
        item
        container
        xs={4}
        alignItems="center"
        alignContent="center"
        justify="center"
      >
        <Typography paragraph variant="h6">
          {minute}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <IconButton
          disableRipple
          edge="start"
          color="primary"
          onClick={decrease}
        >
          <ArrowDownward />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default TimerLengthButton;
