import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
    licensePlateNumber: { type: String, required: true, unique: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    fuelType: { type: String },
    mileage: { type: Number },
    vehicleClass: { type: String }, // e.g., 'economy', 'luxury', 'SUV'
    availability: { type: Boolean, default: true },
    
    // If you want to store multiple quantities of same model:
    quantity: { type: Number, default: 1 },
});
  
const vehicleModel = mongoose.model('vehicle', vehicleSchema)
export {vehicleModel as Vehicle}
