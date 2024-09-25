import { createSlice } from "@reduxjs/toolkit";
import { getFromLocalStorage, saveToLocalStorage } from "../localStorage/localStorage";
const initialState = {
  cart: getFromLocalStorage("cart") || { items: [] },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cart.items.find((item) => item.productId.toString() === newItem.productId.toString());
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.cart.items.push(action.payload);
      }
      saveToLocalStorage("cart", state.cart);
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.cart.items.find((item) => item.id === id);
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.cart.items = state.cart.items.filter((item) => item.id !== id);
      }
      saveToLocalStorage("cart", state.cart);
    },
    increaseCart(state, action) {
      const productIndex = state.cart.items.findIndex((item) => item.productId === action.payload);
      state.cart.items[productIndex].quantity += 1;
      saveToLocalStorage("cart", state.cart);
    },
    decreaseCart(state, action) {
      const productIndex = state.cart.items.findIndex((item) => item.productId === action.payload);
      state.cart.items[productIndex].quantity -= 1;
      saveToLocalStorage("cart", state.cart);
    },
    clearCart(state) {
      state.cart.items = [];
      state.totalQuantity = 0;
      saveToLocalStorage("cart", state.cart);
    },
    login(state, action) {
      const userCart = action.payload.cart || { items: [] };
      state.cart = userCart;
      saveToLocalStorage("cart", userCart);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
