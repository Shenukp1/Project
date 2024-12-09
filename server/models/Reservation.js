import mongoose from "mongoose";


const reservationSchema = new mongoose.Schema({
    reservationNumber:{type:Number, required:true, unique:true},///primary key
    licenseNumber: { type: String, ref: 'customer', required: true }, // foreign key; the ref is how you connect it to another table
   // licensePlateNumber: { type: String, ref: 'vehicle', required: true },//this is covered by Reservation_For relation
    pickupLocation: { type: String, required: true },
    dropoffLocation: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    // Optional: track reservation status: 'pending', 'confirmed', 'completed', 'cancelled'
    status: { type: String, enum: ['pending', 'confirmed', 'completed', 'cancelled'], default: 'pending' },
    totalCost: { type: Number, default: 0 },
});
  
const reservationModel = mongoose.model('reservation', reservationSchema)
export {reservationModel as Reservation}
