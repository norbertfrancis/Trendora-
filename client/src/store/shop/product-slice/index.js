import axios from "axios";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoading: false,
    productList: [],
    productDetails: null
}

export const fetchAllFilterdProducts = createAsyncThunk(
    "/products/fetchAllProducts",
    async ({filterParams,sortParams}) => {
        console.log(fetchAllFilterdProducts, "fetchAllFilterdProducts");

        const query = new URLSearchParams({
            ...filterParams,
            sortBy : sortParams
        })
        const result = await axios.get(
            `http://localhost:5000/api/shop/products/get?${query}`
        );
        return result?.data;
    }
)
export const fetchProductDetails = createAsyncThunk(
    "/products/fetchProductDetails",
    async (id) => {
        const result = await axios.get(
            `http://localhost:5000/api/shop/products/get/${id}`
        );
        return result?.data;
    }
)

const shoppingProductsSlice = createSlice({
    name: 'shoppingProducts',
    initialState,
    reducers: {},
    extraReducers: (builder)=> {
        builder.addCase(fetchAllFilterdProducts.pending, (state)=> {
            state.isLoading = true           
        }).addCase(fetchAllFilterdProducts.fulfilled,(state, action) => {
            state.isLoading = false
            state.productList = action.payload.data
        }).addCase(fetchAllFilterdProducts.rejected,(state) => {
            state.isLoading = false
            state.productList = []
        }).addCase(fetchProductDetails.pending, (state) =>{
            state.isLoading = true;
        }).addCase(fetchProductDetails.fulfilled, (state, action) => {
            state.isLoading = false;
            state.productDetails = action.payload.data
        }).addCase(fetchProductDetails.rejected, (state) => {
            state.isLoading = false;
            state.productDetails = null 
        })        
    }
})

export default shoppingProductsSlice.reducer;