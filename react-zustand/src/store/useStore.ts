// Main store — combines all slices into a single Zustand store.
// Middleware: devtools (Redux DevTools) + persist (localStorage).
//
// Middleware order matters: immer → persist → devtools (innermost first).

import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { CounterSlice, createCounterSlice } from './counterSlice';
import { UISlice, createUISlice } from './uiSlice';
import { TodosSlice, createTodosSlice } from './todosSlice';

/** Combined store type — intersection of all slice interfaces */
export type Store = CounterSlice & UISlice & TodosSlice;

const useStore = create<Store>()(
  devtools(
    persist(
      (...a) => ({
        ...createCounterSlice(...a),
        ...createUISlice(...a),
        ...createTodosSlice(...a),
      }),
      {
        name: 'react-zustand-storage',
        // Only persist theme — count and todos use defaults on reload
        partialize: (state) => ({ theme: state.theme } as Store),
      }
    ),
    { name: 'AppStore' }
  )
);

export default useStore;
