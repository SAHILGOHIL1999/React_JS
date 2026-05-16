import { configureStore } from "@reduxjs/toolkit";
import productReducer from './features/products/productSlice'
import cartReducer from './features/cart/cartSlice'
import wishlistReducer from './features/cart/wishSlice'

export const store = configureStore({
  reducer:{
   product:productReducer,
   cart:cartReducer,
   wishlist:wishlistReducer 
  }
})