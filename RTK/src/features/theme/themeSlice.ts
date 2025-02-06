import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  mode: 'light' | 'dark';
  test: string;
}

// set intial values
const initialState: ThemeState = {
  mode: 'light',
  test: '',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    // define toggleTheme action
    toggleTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.mode = action.payload;
    },
    // another action
    test: (state, action: PayloadAction<string>) => {
      state.test = action.payload;
    },
  },
});

export const { toggleTheme, test } = themeSlice.actions;
export default themeSlice.reducer;
