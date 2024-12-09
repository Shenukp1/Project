import mongoose from "mongoose";

const branchSchema = new mongoose.Schema({
    address: {type:String, required:true, unique:true},//primary key
    garage: {type:String},
    office: {type:String},
    vehicleDepot: {type:String},
})

const branchModel = mongoose.model('branch', branchSchema)
export {branchModel as Branch}