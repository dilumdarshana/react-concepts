import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/theme/themeSlice';
import usersReducer from './features/users/usersSlice';
import { userApi } from './services/userApi';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    users: usersReducer,
    [userApi.reducerPath]: userApi.reducer, // register RTK Query reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(userApi.middleware), // add the API middleware
});

setupListeners(store.dispatch); // re fetch data when switch between tabs

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
