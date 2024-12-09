import mongoose from "mongoose";

const maintenanceForSchema = new mongoose.Schema({
    damages:{type:String, required:true, ref:'maintenance'},//foreign key
    licensePlateNumber: { type: String, required: true, ref:'vehicle'},//foreign key
})

const maintenanceForModel = mongoose.model('maintenanceFor', maintenanceForSchema)
export {maintenanceForModel as MaintenanceFor}