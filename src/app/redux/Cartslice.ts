import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state[itemIndex].quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    remove: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
    incrementQuantity: (state, action) => {
      const itemIndex = state.findIndex(item => item.id === action.payload);
      if (itemIndex >= 0) {
        state[itemIndex].quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const itemIndex = state.findIndex(item => item.id === action.payload);
      if (itemIndex >= 0 && state[itemIndex].quantity > 1) {
        state[itemIndex].quantity -= 1;
      }
    },
  },
});

export const { addToCart, remove, incrementQuantity, decrementQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
