import create from 'zustand';

type TCurrentState = 'working' | 'long break' | 'short break';

const initialState = {
  workLength: 25,
  shortBreakLength: 5,
  longBreakLength: 15,
  interval: 4,
  isRunning: false,
  currentState: 'working',
  currentTimerValue: 1500,
};

const useZustandStore = create((set) => ({
  ...initialState,
  setWorkLength: (workLength: number) => set(() => ({ workLength })),
  setShortBreakLength: (shortBreakLength: number) =>
    set(() => ({ shortBreakLength })),
  setLongBreakLength: (longBreakLength: number) =>
    set(() => ({ longBreakLength })),
  setInterval: (interval: number) => set(() => ({ interval })),
  setCurrentState: (currentState: TCurrentState) =>
    set(() => ({ currentState })),
  startTimer: () => set(() => ({ isRunning: true })),
  stopTimer: () => set(() => ({ isRunning: false })),
  setCurrentTimerValue: (currentTimerValue: number) =>
    set(() => ({ currentTimerValue })),
}));

export default useZustandStore;
