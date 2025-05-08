import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    totalProducts: 0,
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if(existingItem) {
            existingItem.quantity++;        
        } else {
            state.items.push({name, image,cost, quantity: 1});
        }
        state.totalProducts++;
    },
    removeItem: (state, action) => {
        const {name}=action.payload;
        state.items = state.items.filter(item => item.name !== name);
        var totalItems=0
        state.items.map((item) => {
          totalItems+=item.quantity;
        });
        state.totalProducts = totalItems;
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity = quantity;
        }

        var totalItems=0
        state.items.map((item) => {
          totalItems+=item.quantity;
        });
        state.totalProducts = totalItems;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
