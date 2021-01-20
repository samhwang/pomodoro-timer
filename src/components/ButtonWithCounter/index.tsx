import { IconButton, Grid, Typography } from '@material-ui/core';
import { ArrowUpward, ArrowDownward } from '@material-ui/icons';
import { useValueCounter } from '../../hooks';

interface IButtonWithCounter {
  label?: string;
  initialValue?: number;
  maxValue?: number | null;
}

function getButtonId(label = '') {
  return label ? label.toLowerCase().replace(' ', '-') : label;
}

function ButtonWithCounter({
  label = '',
  initialValue = 0,
  maxValue = null,
}: IButtonWithCounter) {
  const [counterValue, increase, decrease] = useValueCounter(
    initialValue,
    maxValue
  );
  const id = getButtonId(label);
  const disableIncreaseButton = Boolean(maxValue && counterValue === maxValue);
  const disableDecreaseButton = counterValue === 0;

  return (
    <Grid container item xs={12}>
      <Grid item xs={12}>
        <Typography paragraph variant="h5" id={`${id}-label`}>
          {label}
        </Typography>
      </Grid>
      <Grid
        item
        container
        xs={4}
        alignItems="center"
        alignContent="center"
        justify="center"
      >
        <IconButton
          disableRipple
          edge="end"
          color="primary"
          onClick={increase}
          id={`${id}-increment`}
          disabled={disableIncreaseButton}
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
      <Grid
        item
        container
        xs={4}
        alignItems="center"
        alignContent="center"
        justify="center"
      >
        <IconButton
          disableRipple
          edge="start"
          color="primary"
          onClick={decrease}
          id={`${id}-decrement`}
          disabled={disableDecreaseButton}
        >
          <ArrowDownward />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default ButtonWithCounter;
