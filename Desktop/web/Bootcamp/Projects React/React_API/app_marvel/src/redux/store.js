import { configureStore } from '@reduxjs/toolkit';
import userMarvel from './userSlice';

export const store = configureStore({
  reducer: {
    marvel: userMarvel,
  },
});
