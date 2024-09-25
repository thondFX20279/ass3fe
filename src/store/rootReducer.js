import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./usersSlice";
import cartsReducer from "./cartSlice";
import productPopupReducer from "./productPopupSlice";
const rootReducer = combineReducers({
  auth: userReducer,
  cart: cartsReducer,
  popup: productPopupReducer,
});

export default rootReducer;
