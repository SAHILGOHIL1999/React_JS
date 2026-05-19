import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cartItem:[]
}

const cartSlice = createSlice({
  name:'cart',
  initialState,
  reducers:{
    addToCart:(state , action) => {
      state.cartItem.push(action.payload)
    },
    removeToCart:(state , action) => {
      state.cartItem = state.cartItem.filter((item) => item.id !== action.payload)
    }
  }
  
})

export const {addToCart , removeToCart} = cartSlice.actions

export default cartSlice.reducer