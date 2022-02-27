import { useBoolean, useAudio } from 'react-use';
import { useCallback } from 'react';
import { useTimerValue, useTimerState } from './useTimer';
import Timer from './Timer';

export default function TimerContainer() {
  const [breakLength, incBreak, decBreak, getBreak, , resetBreak] =
    useTimerValue(5);
  const [sessionLength, incSess, decSess, getSess, , resetSess] =
    useTimerValue(25);
  const [sets, incSet, decSet, , , resetSet] = useTimerValue(16, 48, 0);
  const [currentSet, incCurrentSet, , , , resetCurrentSet] = useTimerValue(
    0,
    sets,
    0
  );

  const [isBreakTime, toggleBreakTime] = useBoolean(false);
  const getMinutes = useCallback(
    (breaktime: boolean = isBreakTime) => (breaktime ? getBreak() : getSess()),
    []
  );
  const [audio, , controls] = useAudio({
    src: '/beep.wav',
    autoPlay: false,
    id: 'beep',
  });

  const [currentSeconds, isTimerRunning, toggleTimerRunning, resetAll] =
    useTimerState(
      getMinutes(isBreakTime),
      () => {
        if (currentSet === sets) {
          toggleTimerRunning(false);
          return;
        }

        if (isBreakTime) {
          incCurrentSet();
        }

        toggleBreakTime(!isBreakTime);
        controls.play();
      },
      () => {
        resetBreak();
        resetSess();
        resetSet();
        resetCurrentSet();
        toggleBreakTime(false);
        controls.seek(0);
      }
    );

  return (
    <Timer
      timerInputs={[
        {
          timerValue: sets,
          inc: incSet,
          dec: decSet,
          type: 'sets',
        },
        {
          timerValue: breakLength,
          inc: incBreak,
          dec: decBreak,
          type: 'break',
        },
        {
          timerValue: sessionLength,
          inc: incSess,
          dec: decSess,
          type: 'session',
        },
      ]}
      currentSeconds={currentSeconds}
      isTimerRunning={isTimerRunning}
      toggleTimerRunning={toggleTimerRunning}
      resetAll={resetAll}
      isBreakTime={isBreakTime}
      currentSet={currentSet}
      audio={audio}
    />
  );
}
