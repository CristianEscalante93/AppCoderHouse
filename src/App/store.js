import { configureStore } from '@reduxjs/toolkit'
import shopReducer from "../Features/shop/shopSlice.js"
import { shopApi } from './service/shopServices.js'
import { setupListeners } from '@reduxjs/toolkit/query'
import cartReducer from "../Features/cart/cartSlice.js"
import authReducer from "../Features/auth/authSlice.js"
import { authApi } from './service/auth.js'

export const store = configureStore({
  reducer: {
    shop: shopReducer,
    cart: cartReducer,
    auth: authReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware,authApi.middleware)
})

setupListeners(store.dispatch)