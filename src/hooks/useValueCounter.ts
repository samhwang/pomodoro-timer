import { useState, useEffect } from 'react';

function useValueCounter(initialValue = 0, maxValue: number | null = null) {
  const [value, setValue] = useState(initialValue);

  const increase = () => setValue((currentValue) => currentValue + 1);
  const decrease = () => setValue((currentValue) => currentValue - 1);

  useEffect(() => {
    if (!maxValue) {
      return;
    }

    if (value > maxValue!) {
      setValue(0);
    }

    if (value < 0) {
      setValue(0);
    }
  }, [value, maxValue]);

  return [value, increase, decrease] as const;
}

export default useValueCounter;
