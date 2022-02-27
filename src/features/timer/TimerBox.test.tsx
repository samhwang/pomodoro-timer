import { render, fireEvent } from '@testing-library/react';
import TimerBox from './TimerBox';

it('Should render TimerBox component', () => {
  const mockToggleTimer = jest.fn();
  const mockIsTimerRunning = false;
  const mockReset = jest.fn();
  const { container } = render(
    <TimerBox
      seconds={100}
      isTimerRunning={mockIsTimerRunning}
      toggleTimer={mockToggleTimer}
      reset={mockReset}
      isBreak
      currentSet={1}
    />
  );

  const timerLabel = container.querySelector('#timer-label');
  expect(timerLabel).toBeInTheDocument();
  expect(timerLabel!.firstChild!.nodeValue).toEqual('Current Set');

  const sessionLabel = container.querySelector('#session-label');
  expect(sessionLabel).toBeInTheDocument();
  expect(sessionLabel!.firstChild!.nodeValue).toEqual('BREAK');

  const startStopButton = container.querySelector('#start_stop');
  expect(startStopButton).toBeInTheDocument();
  fireEvent.click(startStopButton!);
  expect(mockToggleTimer).toBeCalled();
  expect(mockToggleTimer).toBeCalledWith(!mockIsTimerRunning);

  const resetButton = container.querySelector('#reset');
  expect(resetButton).toBeInTheDocument();
  fireEvent.click(resetButton!);
  expect(mockReset).toBeCalled();
});
