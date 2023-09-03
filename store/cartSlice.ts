import { createSlice } from '@reduxjs/toolkit';

type Item = {
  id: number;
  title: string;
  price: number;
  amount: number;
  thumbnail: string;
};

type SliceState = {
  items: Item[];
  total: number;
};

const initialState: SliceState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      const item = state.items.find((item) => {
        return item.id === action.payload.id;
      });

      if (item) item.amount++;
      else {
        state.items.push({ ...action.payload, amount: 1 });
      }

      state.total = state.items.reduce((acc, item) => {
        return acc + item.price * item.amount;
      }, 0);
    },


    remove: (state, action) => {
      const item = state.items.find((item) => {
        return item.id === action.payload;
      });
      
      if (item) {
        if (item.amount === 1) {
          state.items = state.items.filter((item) => {
            return item.id !== action.payload;
          })
        }
        else item.amount--;
      }

      state.total = state.items.reduce((acc, item) => {
        return acc + item.price * item.amount;
      }, 0);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
