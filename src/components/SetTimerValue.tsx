import { IconButton, Typography } from '@mui/material';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

function uppercaseFirstChar(word: string) {
  const firstChar = word.slice(0, 1).toUpperCase();
  const restOfType = word.slice(1);
  return firstChar + restOfType;
}

interface ISetTimerValue {
  timerValue: number;
  inc: Function;
  dec: Function;
  type: string;
}

export default function SetTimerValue({
  timerValue,
  inc,
  dec,
  type,
}: ISetTimerValue) {
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
