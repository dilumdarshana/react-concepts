import { create } from 'zustand';

interface Counter {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const useStore = create<Counter>((set) => ({
  count: 1,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useStore;
