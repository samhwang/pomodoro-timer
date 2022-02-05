import { useCounter } from 'react-use';

export default function useTimerValue(initialValue: number, max = 60, min = 1) {
  const [timerValue, { inc, dec, get, set, reset }] = useCounter(
    initialValue,
    max,
    min
  );

  return [timerValue, inc, dec, get, set, reset] as const;
}
