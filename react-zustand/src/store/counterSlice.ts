// Zustand slice — each slice defines its own state + actions independently.
// Slices are composed together in the main store (useStore.ts).

import { StateCreator } from 'zustand';

export interface CounterSlice {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const createCounterSlice: StateCreator<CounterSlice, [["zustand/devtools", never]], []> = (set) => ({
  count: 1,
  increment: () => set((state) => ({ count: state.count + 1 }), false, 'counter/increment'),
  decrement: () => set((state) => ({ count: state.count - 1 }), false, 'counter/decrement'),
});
