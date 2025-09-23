 import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    orderList: [],
    orderDetails : null,
}

 const adminOrderSlice = createSlice({
    name : 'adminOrderSlice' ,
    initialState ,
    reducers : {},
    extraReducers: (builder)=> {},
 });
 export  const getALlOrdersForAdmin = createAsyncThunk(
    "/order/getAllOrdersForAdmin",
 )

 export default adminOrderSlice.reducer