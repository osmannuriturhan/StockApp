import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firms: [],
  products: [],
  purchases: [],
  brands: [],
};

const stockSlice = createSlice({
  name: "",
  initialState,
  reducers: {},
});

export const {} = stockSlice.actions;

export default stockSlice.reducer;
