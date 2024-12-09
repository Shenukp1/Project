import mongoose from "mongoose";

const maintenanceSchema = new mongoose.Schema({
    damages:{type:String, required:true},
    licensePlateNumber: { type: String, required: true, ref:'vehicle'},//foreign key
    address: {type:String, required:true, ref:'branch'},//foreign key
    cost:{type:Number},
    m_ID:{type:String, ref:'mechanic'}
})

const maintenanceModel = mongoose.model('maintenance', maintenanceSchema)
export {maintenanceModel as Maintenance}