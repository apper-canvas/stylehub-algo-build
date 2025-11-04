import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "@/store/slices/cartSlice"

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
})