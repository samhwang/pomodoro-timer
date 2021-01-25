import shallow from 'zustand/shallow';
import useZustandStore from '../../hooks/useZustandStore';
import ButtonWithCounter from '../ButtonWithCounter';

function ShortBreakLengthButton() {
  const [shortBreakLength, setShortBreakLength] = useZustandStore(
    (state) => [state.shortBreakLength, state.setShortBreakLength],
    shallow
  );

  return (
    <ButtonWithCounter
      label="Short Break Length"
      maxValue={60}
      counterValue={shortBreakLength}
      setCounterValue={setShortBreakLength}
    />
  );
}

export default ShortBreakLengthButton;
