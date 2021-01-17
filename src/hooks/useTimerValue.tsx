import { useState } from 'react';

function useTimerValue(initialValue = 0) {
  const [minute, setMinute] = useState(initialValue);

  const increment = () => setMinute((currentMinute) => currentMinute + 1);
  const decrement = () => setMinute((currentMinute) => currentMinute - 1);

  return [minute, increment, decrement] as const;
}

export default useTimerValue;
