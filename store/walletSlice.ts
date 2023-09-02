import { createSlice } from '@reduxjs/toolkit';

type SliceState = {
  usd: number;
  coin: number;
};

const initialState: SliceState = {
  usd: 10000,
  coin: 10000,
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState: initialState,
  reducers: {
    replenish: (state, action) => {
      switch (action.payload.currency) {
        case 'usd':
          state.usd += action.payload.amount;
          break;
        case 'coin':
          state.coin += action.payload.amount;
          break;
      }
    },
    withdraw: (state, action) => {
      switch (action.payload.currency) {
        case 'usd':
          state.usd -= action.payload.amount;
          break;
        case 'coin':
          state.coin -= action.payload.amount;
          break;
      }
    },
  },
});

export const { replenish, withdraw } = walletSlice.actions;
export default walletSlice.reducer;