import mongoose from "mongoose";


const reservationSchema = new mongoose.Schema({
    
    licenseNumber: { type: String, ref: 'customer', required: true }, // the ref is how you connect it to another table
    licensePlateNumber: { type: String, ref: 'vehicle', required: true },
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
