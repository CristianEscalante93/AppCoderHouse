import { configureStore } from '@reduxjs/toolkit'
import shopReducer from "../Features/shop/shopSlice.js"

export const store = configureStore({
  reducer: {
    shop: shopReducer
  },
})