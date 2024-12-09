import mongoose from "mongoose";

const driverSchema = new mongoose.Schema({
    d_ID: {type:String, required:true},
    employeeID: {type:String, required:true, ref:'employee'},//foreign key
    age:{type:Number}
})

const driverModel = mongoose.model('driver', driverSchema)
export {driverModel as Driver}