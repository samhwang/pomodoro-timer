import useZustandStore from '../../hooks/useZustandStore';
import ActionButton from '../ActionButton';

function StartButton() {
  const startTimer = useZustandStore((state) => state.startTimer);

  return (
    <ActionButton label="Start Timer" onClick={startTimer} color="primary" />
  );
}

export default StartButton;
