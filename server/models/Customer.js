import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    username: {type:String, required:true},
    password: {type:String, required:true},
    licenseNumber: { type: String, required: true, unique: true },
    InsuranceNumber: { type: String },
    age: { type: Number },
})

const customerModel = mongoose.model('customer', customerSchema)
export {customerModel as Customer}