import mongoose from "mongoose";

const mechanicSchema = new mongoose.Schema({
    m_ID: {type:String, required:true},
    employeeID: {type:String, required:true, ref:'employee'}//foreign key
})

const mechanicModel = mongoose.model('mechanic', mechanicSchema)
export {mechanicModel as Mechanic}