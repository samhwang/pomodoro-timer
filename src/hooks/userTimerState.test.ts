import { renderHook, act } from '@testing-library/react-hooks';
import useTimerState from './useTimerState';

describe('useTimerState hook', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern');
  });

  afterEach(() => {
    jest.runAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  const minutes = 10;
  const onDone = jest.fn();
  const onReset = jest.fn();

  it('Should render the hook with initial states correctly', () => {
    const { result } = renderHook(() =>
      useTimerState(minutes, onDone, onReset)
    );

    const [currentSeconds, isTimerRunning] = result.current;

    expect(currentSeconds).toEqual(minutes * 60);
    expect(isTimerRunning).toEqual(false);
  });

  it('Should update seconds when minutes is changed', () => {
    let testMinutes = minutes;
    const { result, rerender } = renderHook(() =>
      useTimerState(testMinutes, onDone, onReset)
    );

    expect(result.current[0]).toEqual(minutes * 60);

    act(() => {
      testMinutes = 60;
      rerender();
    });

    expect(result.current[0]).toEqual(3600);
  });

  it('Should decrease timer by 1 second when Timer is running', () => {
    const { result } = renderHook(() =>
      useTimerState(minutes, onDone, onReset)
    );

    act(() => {
      const [, , toggleTimerRunning] = result.current;
      toggleTimerRunning(true);
      jest.advanceTimersByTime(1001);
      toggleTimerRunning(false);
    });

    expect(result.current[0]).toEqual(minutes * 60 - 1);
  });

  it('Should run onDone when timer is over', () => {
    const { result } = renderHook(() =>
      useTimerState(minutes, onDone, onReset)
    );

    act(() => {
      const [, , toggleTimerRunning] = result.current;
      toggleTimerRunning(true);
      jest.advanceTimersByTime(minutes * 60 * 1000 + 1000);
      toggleTimerRunning(false);
    });

    expect(onDone).toBeCalled();
  });

  it('Should run onReset when called', () => {
    const { result, rerender } = renderHook(() =>
      useTimerState(minutes, onDone, onReset)
    );

    act(() => {
      result.current[3]();
      rerender();
    });

    expect(result.current[0]).toBe(minutes * 60);
    expect(result.current[1]).toBe(false);
    expect(onReset).toBeCalled();
  });
});
