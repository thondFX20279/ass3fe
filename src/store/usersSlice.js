// import { createSlice } from "@reduxjs/toolkit";
// import { getFromLocalStorage } from "../localStorage/localStorage";
// const usersSlice = createSlice({
//   name: "users",
//   initialState: {
//     currentUser: getFromLocalStorage("currentUser") || null,
//     isLogin: getFromLocalStorage("currentUser") ? true : false,
//   },
//   reducers: {
//     login: (state, action) => {
//       state.currentUser = action.payload;
//       state.isLogin = true;
//       //
//     },
//     logout: (state) => {
//       state.isLogin = false;
//       state.currentUser = null;
//       //
//     },
//   },
// });

// export const usersActions = usersSlice.actions;
// export default usersSlice.reducer;
// redux/authSlice.js
import Cookies from "js-cookie";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../api/axiosClient";
import { getFromLocalStorage, saveToLocalStorage } from "../localStorage/localStorage";

export const login = createAsyncThunk("auth/login", async (credentials, { rejectWithValue }) => {
  try {
    const response = await axiosClient.post("/auth/login", credentials);
    return response.data;
  } catch (error) {
    console.log(error.response.data);

    return rejectWithValue(error.response.data.message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: getFromLocalStorage("user") || null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      Cookies.remove("access_token");
      state.user = null;
      state.loading = false;
      state.error = null;
      localStorage.removeItem("user");
      localStorage.removeItem("cart");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        saveToLocalStorage("user", action.payload.user);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const usersActions = authSlice.actions;
export default authSlice.reducer;
