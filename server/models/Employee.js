import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
   employeeID:{type:Number,required:true, unique:true},//primary key
   name:{type:String,required:true},
   phoneNum:{type:String},
   salary:{type:Number},
   email:{type:String},
   address:{type:String, ref:'branch'},//foreign key
   username: {type:String, required:true},
   password: {type:String, required:true}
})

const employeeModel = mongoose.model('employee', employeeSchema)
export {employeeModel as Employee}