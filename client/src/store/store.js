import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth-slice';
import adminProductsSlice from './admin/product-slice';
import shopProductsSlice from './shop/product-slice';
import shopCartSlice from './shop/cart-slice/cart-slice'
import shopAddressSlice from './shop/address-slice/address-slice'
import shopOrderSlice from './shop/order-slice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        adminProducts : adminProductsSlice,
        shopProducts : shopProductsSlice,
        shopCart : shopCartSlice,
        shopAddress: shopAddressSlice,
        shopeOrder : shopOrderSlice,
    },
})

export default store;