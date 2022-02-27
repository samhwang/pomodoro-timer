import { useBoolean, useCounter, useInterval } from 'react-use';
import { useEffect } from 'react';

export function useTimerValue(initialValue: number, max = 60, min = 1) {
  const [timerValue, { inc, dec, get, set, reset }] = useCounter(
    initialValue,
    max,
    min
  );

  return [timerValue, inc, dec, get, set, reset] as const;
}

export function useTimerState(
  minutes: number,
  onDone: () => void,
  onReset: (isBreakTime?: boolean) => void
) {
  const [isTimerRunning, toggleTimerRunning] = useBoolean(false);
  const [currentSeconds, , decreaseSeconds, , setSeconds] = useTimerValue(
    minutes * 60,
    3600,
    0
  );

  useInterval(
    () => {
      if (currentSeconds > 0) {
        decreaseSeconds();
      }

      if (currentSeconds === 0) {
        onDone();
      }
    },
    isTimerRunning ? 1000 : null
  );

  useEffect(() => {
    setSeconds(minutes * 60);
  }, [minutes]);

  const reset = (isBreakTime?: boolean) => {
    toggleTimerRunning(false);
    setSeconds(minutes * 60);
    onReset(isBreakTime);
  };

  return [currentSeconds, isTimerRunning, toggleTimerRunning, reset] as const;
}
