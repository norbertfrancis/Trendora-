
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    orderList: [],
    orderDetails : null,
}

 export  const getALlOrdersForAdmin = createAsyncThunk(
    "/order/getAllOrdersForAdmin",
    async () => {
        const response = await axios.get(
            `http://localhost:5000/api/admin/orders`
        );
        return response.data;
    }
 )

 export const getOrderDetailsForAdmin = createAsyncThunk(
    "/order/getOrderDetailsForAdmin",
    async (id) => {
        const response = await axios.get(
            `http://localhost:5000/api/admin/orders/${id}`
        )
        return response.data
    }
 )

 const adminOrderSlice = createSlice({
    name : 'adminOrderSlice' ,
    initialState ,
    reducers : {
       resetOrderDetails:(state)=> {
        state.orderDetails = null
       }
    },
    extraReducers: (builder)=> {
        builder.addCase(getALlOrdersForAdmin.pending, (state)=> {
            state.isLoading = true
        }).addCase(getALlOrdersForAdmin.fulfilled, (state, action) => {
            state.isLoading = false;
            state.orderList = action.payload.datan || []
        }).addCase(getALlOrdersForAdmin.rejected, (state)=> {
            state.isLoading = false;
            state.orderList = []
        }).addCase(getOrderDetailsForAdmin.pending, (state)=> {
            state.isLoading = true
        }).addCase(getOrderDetailsForAdmin.fulfilled, (state,action) => {
            state.isLoading = false;
            state.orderDetails = action.payload.data;
        }).addCase(getOrderDetailsForAdmin.rejected, (state)=> {
            state.isLoading = false;
            state.orderDetails = null
        })
    },
 });

export const {resetOrderDetails} = adminOrderSlice.actions;
 export default adminOrderSlice.reducer