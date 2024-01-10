import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sales: [],
  firms: [],
  products: [],
  purchases: [],
  brands: [],
  categories: [],
  loading: false,
  error: false,
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    getFirmsSuccess: (state, { payload }) => {
      state.firms = payload;
      state.loading = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, getFirmsSuccess, fetchFail } = stockSlice.actions;

export default stockSlice.reducer;
