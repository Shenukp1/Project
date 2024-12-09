import mongoose from "mongoose";

const reservationForSchema = new mongoose.Schema({
    reservationNumber:{type:Number, required:true, ref:'reservation'},//foreign key
    licensePlateNumber: { type: String, required: true, ref: 'vehicle', }//foreign key
})

const reservationForModel = mongoose.model('reservationFor', reservationForSchema)
export {reservationForModel as ReservationFor}