import mongoose from "mongoose";

const vehicleSpecificationSchema = new mongoose.Schema({
    licensePlateNumber: { type: String, required: true, ref: 'vehicle'},//foreign key
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    fuelType: { type: String },
    mileage: { type: Number }
})

const vehicleSpecificationModel = mongoose.model('vehicleSpecification', vehicleSpecificationSchema)
export {vehicleSpecificationModel as VehicleSpecification}