import useZustandStore from '../../hooks/useZustandStore';
import ActionButton from '../ActionButton';

function StopButton() {
  const stopTimer = useZustandStore((state) => state.stopTimer);

  return (
    <ActionButton label="Stop Timer" onClick={stopTimer} color="secondary" />
  );
}

export default StopButton;
