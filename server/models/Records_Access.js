import mongoose from "mongoose";

const recordsAccessSchema = new mongoose.Schema({
    employeeID: {type:String, required:true, ref:'employee'},//foreign key
    a_ID:{type:String,required:true, ref:"admin"},//foreign key
    licenceNumber:{type:String,required:true, ref:'customer'}//foreign key
})

const recordsAccessModel = mongoose.model('recordsAccess', recordsAccessSchema)
export {recordsAccessModel as RecordsAccess}