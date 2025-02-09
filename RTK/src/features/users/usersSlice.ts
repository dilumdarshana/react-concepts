import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UsersState {
  userUpdated: boolean;
}

// set intial values
const initialState: UsersState = {
  userUpdated: false,
};

const UsersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // define list of actions
    userUpdated: (state, action: PayloadAction<true | false>) => {
      state.userUpdated = action.payload;;
    },
  },
});

export const { userUpdated } = UsersSlice.actions;
export default UsersSlice.reducer;
