import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProductById = createAsyncThunk(
  'product/fetchProduct',
  async (id) => {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return res.data;
  }
);

export const productDetailsSlice = createSlice({
  name: 'product',
  initialState: {
    product: null,
    error: null,
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.error = null;
      state.item = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchProductById.rejected, (state, action) => {
      state.item = [];
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});
export default productDetailsSlice.reducer;
