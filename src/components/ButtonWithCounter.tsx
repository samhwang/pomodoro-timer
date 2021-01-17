import { IconButton, Grid, Typography } from '@material-ui/core';
import { ArrowUpward, ArrowDownward } from '@material-ui/icons';
import { useTimerValue } from '../hooks';

interface IButtonWithCounter {
  label?: string;
  initialValue?: number;
}

function getButtonId(label = '') {
  return label ? label.toLowerCase().replace(' ', '-') : label;
}

function ButtonWithCounter({
  label = '',
  initialValue = 0,
}: IButtonWithCounter) {
  const [counterValue, increase, decrease] = useTimerValue(initialValue);
  const id = getButtonId(label);

  return (
    <Grid container item xs={12}>
      <Grid item xs={12}>
        <Typography paragraph variant="h5" id={`${id}-label`}>
          {label}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <IconButton
          disableRipple
          edge="end"
          color="primary"
          onClick={increase}
          id={`${id}-increment`}
        >
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
        id={id}
      >
        <Typography variant="h6">{counterValue}</Typography>
      </Grid>
      <Grid item xs={4}>
        <IconButton
          disableRipple
          edge="start"
          color="primary"
          onClick={decrease}
          id={`${id}-decrement`}
        >
          <ArrowDownward />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default ButtonWithCounter;
