import useZustandStore from '../../hooks/useZustandStore';
import ActionButton from '../ActionButton';

function ResetButton() {
  const resetState = useZustandStore((state) => state.resetState);

  return <ActionButton label="Reset" onClick={resetState} color="default" />;
}

export default ResetButton;
