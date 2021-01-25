import shallow from 'zustand/shallow';
import useZustandStore from '../../hooks/useZustandStore';
import ButtonWithCounter from '../ButtonWithCounter';

function WorkLengthButton() {
  const [workLength, setWorkLength] = useZustandStore(
    (state) => [state.workLength, state.setWorkLength],
    shallow
  );

  return (
    <ButtonWithCounter
      label="Work Length"
      maxValue={60}
      counterValue={workLength}
      setCounterValue={setWorkLength}
    />
  );
}

export default WorkLengthButton;
