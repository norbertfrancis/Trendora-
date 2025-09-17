const mongoose = require( 'mongoose');

const AddressSchema = new mongoose.Schema(
    {
        userId: String,
        address: String,
        city: String,
        landMark: String,    
        pincode: String,
        phone: String,
        notes: String,
    },
    {timestamps:true}
);