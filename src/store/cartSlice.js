import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id,name, price, authorName, publishDate,image } = action.payload;
      const newItem = {
        id: nanoid(), 
        image,
        name,
        price,
        authorName,
        publishDate,
        quantity: 1,
        totalPrice: price,
      };
      
      state.cartItems.push(newItem);
      state.totalQuantity += 1;
      state.totalPrice += price;
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((cartItem) => cartItem.id === id);
      
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.totalPrice;
        state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== id);
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cartItems.find((cartItem) => cartItem.id === id);
      
      if (existingItem && quantity > 0) {
        state.totalQuantity += quantity - existingItem.quantity;
        state.totalPrice += (quantity - existingItem.quantity) * existingItem.price;
        existingItem.quantity = quantity;
        existingItem.totalPrice = existingItem.price * quantity;
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
