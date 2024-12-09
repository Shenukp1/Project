import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    a_ID: {type:String, required:true},
    employeeID: {type:String, required:true, ref:'employee'}//foreign key
})

const adminModel = mongoose.model('admin', adminSchema)
export {adminModel as Admin}