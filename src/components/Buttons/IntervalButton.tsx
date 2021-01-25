import shallow from 'zustand/shallow';
import useZustandStore from '../../hooks/useZustandStore';
import ButtonWithCounter from '../ButtonWithCounter';

function IntervalButton() {
  const [interval, setInterval] = useZustandStore(
    (state) => [state.interval, state.setInterval],
    shallow
  );

  return (
    <ButtonWithCounter
      label="Interval"
      maxValue={60}
      counterValue={interval}
      setCounterValue={setInterval}
    />
  );
}

export default IntervalButton;
