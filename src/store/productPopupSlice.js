import { createSlice } from "@reduxjs/toolkit";

const productPopupSlice = createSlice({
  name: "product",
  initialState: {
    isShown: false,
    product: {},
  },
  reducers: {
    showPopup: (state, action) => {
      state.isShown = true;
      state.product = action.payload;
    },
    hidePopup: (state) => {
      state.isShown = false;
      state.product = {};
    },
  },
});
export const { hidePopup, showPopup } = productPopupSlice.actions;
export default productPopupSlice.reducer;
