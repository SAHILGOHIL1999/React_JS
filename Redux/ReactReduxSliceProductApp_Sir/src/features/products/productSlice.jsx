import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products:[],
  loading:false,
  error:null
}


export const fetchProduct = createAsyncThunk("products/fetchProduct" , async() => {
  const res = await axios.get("https://api.escuelajs.co/api/v1/products")

  return res.data
})

// Product Slice

const productSlice = createSlice({
  name:"product",
  initialState,
  reducers:{},
  extraReducers:(builder) => {
    builder

    .addCase(fetchProduct.pending , (state) => {
      state.loading = true
    })

    .addCase(fetchProduct.fulfilled , (state , action) => {
      state.products = action.payload
      state.loading = false
    })

    .addCase(fetchProduct.rejected , (state , action) => {
      state.loading = false
      state.error = action.error.message
    })
  }

})

export default productSlice.reducer