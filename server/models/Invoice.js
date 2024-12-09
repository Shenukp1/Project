import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema({
    invoiceNum:{type:Number, required:true,unique:true},//primary key
    reservationNumber:{type:Number, required:true, ref:'reservation'},///foreign key
    paymentCharge:{type:Number, required:true},
    repairCharge:{type:Number},
    otherCharges:{type:Number},
    a_ID: {type:String, required:true, ref:'admin'},//foreign key
    rentalCharge:{type:Number, required:true},
    isPaid:{type:Boolean,required:true}
})

const invoiceModel = mongoose.model('invoice', invoiceSchema)
export {invoiceModel as Invoice}