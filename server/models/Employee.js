import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
   username: {type:String, required:true},
   password: {type:String, required:true},
   employeeID:{type:Number,required:true, unique:true},//primary key
   phoneNum:{type:String},
   salary:{type:Number},
   email:{type:String},
   address:{type:String, ref:'branch'},//foreign key
})

const employeeModel = mongoose.model('employee', employeeSchema)
export {employeeModel as Employee}