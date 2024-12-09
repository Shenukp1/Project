import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
    licensePlateNumber: { type: String, required: true, unique: true },//primary key
    availability: { type: Boolean, default: true },
    numOfVehicles: { type: Number, default: 1 },
    vehicleLicenceClass: { type: String } // Class 1, Class 2,..,Class 7
});
  
const vehicleModel = mongoose.model('vehicle', vehicleSchema)
export {vehicleModel as Vehicle}
