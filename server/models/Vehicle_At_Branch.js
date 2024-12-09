import mongoose from "mongoose";

const vehicleAtBranchSchema = new mongoose.Schema({
    address:{type:String,ref:'branch'},//foreign key
    licensePlateNumber: { type: String, ref:'vehicle' },//foreign key
})

const vehicleAtBranchModel = mongoose.model('vehicleAtBranch', vehicleAtBranchSchema)
export {vehicleAtBranchModel as VehicleAtBranch}