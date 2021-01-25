/* eslint-disable no-unused-vars */
import create from 'zustand';
import type { State } from 'zustand';

type TCurrentState = 'working' | 'long break' | 'short break';

interface TimerState extends State {
  workLength: number;
  shortBreakLength: number;
  longBreakLength: number;
  interval: number;
  isRunning: boolean;
  currentState: TCurrentState;
  setWorkLength: (workLength: number) => void;
  setShortBreakLength: (shortBreakLength: number) => void;
  setLongBreakLength: (longBreakLength: number) => void;
  setInterval: (interval: number) => void;
  setCurrentState: (currentState: TCurrentState) => void;
  startTimer: () => void;
  stopTimer: () => void;
  resetState: () => void;
}

const initialState = {
  workLength: 25,
  shortBreakLength: 5,
  longBreakLength: 15,
  interval: 4,
  isRunning: false,
  currentState: 'working',
} as TimerState;

const useZustandStore = create<TimerState>((set) => ({
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
  resetState: () => set(() => ({ ...initialState })),
}));

export default useZustandStore;
