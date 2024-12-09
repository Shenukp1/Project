import express from 'express'
import { Vehicle } from '../models/Vehicle.js';
import { VehicleSpecification } from '../models/Vehicle_Specification.js';
import { VehicleAtBranch } from '../models/Vehicle_At_Branch.js';
import { verifyAdmin } from './auth.js';
const router = express.Router()

router.post('/addVehicle',verifyAdmin,async (req,res) => { 
    console.log('Request body:', req.body); // check
   
    try {
        
        const { licensePlateNumber, availability, numOfVehicles, vehicleLicenceClass } = req.body;
       
        const existingVehicle = await Vehicle.findOne({ licensePlateNumber });
        if (existingVehicle) {
            return res.status(409).json({ message: 'Vehicle with this license plate number already exists' });
        }

        const newVehicle = new Vehicle({
          licensePlateNumber,
          availability,
          numOfVehicles,
          vehicleLicenceClass
        });

        await newVehicle.save()
        return res.json({createdVehicle: true})// i can use this var "createdVehicle" to check in the front end if we did all the code above
      } catch (err) {
        console.error('Error adding vehicle:', err);
        return res.json({message: "Vehicle was not created first!"});
      }
})

router.post('/addSpecification',verifyAdmin,async (req,res) => { 
    try {
        
        const { licensePlateNumber, make, model, year, fuelType, mileage } = req.body;
        const newSpecification =  VehicleSpecification({
          licensePlateNumber,
          make,
          model,
          year,
          fuelType,
          mileage
        });

        await newSpecification.save()
        return res.json({createdSpecification: true})
        
      } catch (err) {
        return res.json({message: "Specification was not created Second!"});
      }
})

router.post('/addBranch',verifyAdmin,async (req,res) => { 
    try {
        const { address, licensePlateNumber } = req.body;
        const newBranch =  VehicleAtBranch({
          address,
          licensePlateNumber
        });

        await newBranch.save()
        return res.json({createdBranch: true})
        
      } catch (err) {
        return res.json({message: "Specification was not created Second!"});
      }
})

export {router as VehicleRouter}