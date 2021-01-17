import { Button } from '@material-ui/core';
import useTimerValue from '../hooks/useTimerValue';

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
    <>
      <p>{type} Length</p>
      <Button variant="contained" color="primary" onClick={increase}>
        Increase
      </Button>
      <span>{minute}</span>
      <Button variant="contained" color="primary" onClick={decrease}>
        Decrease
      </Button>
    </>
  );
}

export default TimerLengthButton;
