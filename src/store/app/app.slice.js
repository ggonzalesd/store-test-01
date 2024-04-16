import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  products: [],
  error: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
      state.products = [];
      state.error = null;
    },
    setError: (state, { payload }) => {
      state.isLoading = false;
      state.products = [];
      state.error = payload;
    },
    setProducts: (state, { payload }) => {
      state.isLoading = false;
      state.products = payload;
      state.error = null;
    },
  },
});

export const { setLoading, setError, setProducts } = appSlice.actions;
