import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./eslices/cart-slice";
import productSlice from "./eslices/product-slice";

export const store= configureStore({
       reducer:{
          products:productSlice,
          cart:cartSlice
       },   
})