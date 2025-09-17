import axios from "axios";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  addressList: [],
};

export const addNewAddress = createAsyncThunk(
  "/addresses/addNewAddress",
  async (formData) => {
    const response = await axios.post(
        "http://localhost:5000/api/shop/address/add", formData
    );
    return response.data;
  }
);

export const fetchAllAddresses = createAsyncThunk(
    "addresses/fetchAllAddresses",
    async (userId) => {
        const response = await axios.get(
            `http://localhost:5000/api/shop/address/get/${userId}`
        )
        return response.data;
    }
);

export const editaAddress = createAsyncThunk(
    "addresses/editaAddress",
    async ({userId, addressId, formData}) => {
        const response = await axios.put(
            `http://localhost:5000/api/shop/address/update/${userId}/${addressId}`,
            formData
        )
        return response.data;
    }
);

export const deleteAddress = createAsyncThunk(
    "addresses/deleteAddressess",
    async ({userId, addressId}) => {
        const response = await axios.delete(
            `http://localhost:5000/api/shop/address/delete/${userId}/${addressId}`,
        )
        return response.data;
    }
);



const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});
