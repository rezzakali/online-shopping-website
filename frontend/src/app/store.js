import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cartSlice';
import productDetailsReducer from '../features/productDetailsSlice';
import productsReducer from '../features/productsSlice';

export default configureStore({
  reducer: {
    products: productsReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
  },
});
