import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import { useDispatch } from 'react-redux';
import walletSlice from './walletSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    wallet: walletSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
