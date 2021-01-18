import { useState } from 'react';

function useValueCounter(initialValue = 0) {
  const [value, setValue] = useState(initialValue);

  const increase = () => setValue((currentValue) => currentValue + 1);
  const decrease = () => setValue((currentValue) => currentValue - 1);

  return [value, increase, decrease] as const;
}

export default useValueCounter;
