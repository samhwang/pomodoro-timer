import { Typography } from '@material-ui/core';
import useZustandStore from '../../hooks/useZustandStore';

function TimerStatus() {
  const currentState = useZustandStore((state) => state.currentState);

  return (
    <Typography variant="h4" paragraph>
      Current Session: {currentState}
    </Typography>
  );
}

export default TimerStatus;
