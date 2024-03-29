import { IconButton, Typography } from '@mui/material';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { useCallback } from 'react';
import { useTimerValue } from './useTimer';

type TimerValue = ReturnType<typeof useTimerValue>;

export interface ISetTimerInput {
  timerValue: TimerValue[0];
  inc: TimerValue[1];
  dec: TimerValue[2];
  type: string;
}

export default function SetTimerInput({
  timerValue,
  inc,
  dec,
  type,
}: ISetTimerInput) {
  const uppercaseFirstChar = useCallback((word: string) => {
    const firstChar = word.slice(0, 1).toUpperCase();
    const restOfType = word.slice(1);
    return firstChar + restOfType;
  }, []);
  const title = `${uppercaseFirstChar(type)} Length`;

  return (
    <>
      <Typography variant="h3" id={`${type}-label`}>
        {title}
      </Typography>
      <IconButton id={`${type}-increment`} onClick={() => inc()}>
        <ArrowUpward />
      </IconButton>
      <Typography id={`${type}-length`} variant="h3">
        {timerValue}
      </Typography>
      <IconButton id={`${type}-decrement`} onClick={() => dec()}>
        <ArrowDownward />
      </IconButton>
    </>
  );
}
