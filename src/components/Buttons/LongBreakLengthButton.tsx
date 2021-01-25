import shallow from 'zustand/shallow';
import useZustandStore from '../../hooks/useZustandStore';
import ButtonWithCounter from '../ButtonWithCounter';

function LongBreakLengthButton() {
  const [longBreakLength, setLongBreakLength] = useZustandStore(
    (state) => [state.longBreakLength, state.setLongBreakLength],
    shallow
  );

  return (
    <ButtonWithCounter
      label="Long Break Length"
      maxValue={60}
      counterValue={longBreakLength}
      setCounterValue={setLongBreakLength}
    />
  );
}

export default LongBreakLengthButton;
