// UI slice — demonstrates how a separate slice can hold orthogonal concerns
// (theme, modals, sidebar state, etc.) without polluting other slices.

import { StateCreator } from 'zustand';

export interface UISlice {
  /** Current theme mode */
  theme: 'light' | 'dark';
  /** Toggle between light and dark */
  toggleTheme: () => void;
}

export const createUISlice: StateCreator<UISlice, [["zustand/devtools", never]], []> = (set) => ({
  theme: 'light',
  toggleTheme: () => set(
    (state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' }),
    false,
    'ui/toggleTheme'
  ),
});
