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

// to get the vehicles
router.get('/vehicles', async (req,res) => {

  try {
    
    // gets all vehicles from the database
    const vehicles = await Vehicle.find();

    // gets specifications and branches for all vehicles
    const vehicleDetails = await Promise.all(
      vehicles.map(async (vehicle) => {
        const specification = await VehicleSpecification.findOne({
          licensePlateNumber: vehicle.licensePlateNumber,
        });
        const branch = await VehicleAtBranch.findOne({
          licensePlateNumber: vehicle.licensePlateNumber,
        });

        return {
          vehicle,
          specification: specification || null,
          branch: branch || null,
        };
      })
    );

    return res.json(vehicleDetails)
  } catch (err) {
    return res.json({message: "could not get the vehicles"});
  }

})

router.get('/vehicle/:id', async (req,res) => {
  try {
    const id = req.params.id;
    console.log("Request ID:", req.params);
    console.log("Received ID:", id); // Debug the received ID

    // gets all vehicles from the database
    const vehicle = await Vehicle.findById(id);

    //console.log("Fetched Vehicle:", vehicle); // Debug the fetched vehicle


    if (!vehicle) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }

    // gets specifications and branches for all vehicles
    // Fetch the related specification and branch
    const specification = await VehicleSpecification.findOne({
      licensePlateNumber: vehicle.licensePlateNumber,
    });
    const branch = await VehicleAtBranch.findOne({
      licensePlateNumber: vehicle.licensePlateNumber,
    });

    // Build the response
    const vehicleDetail = {
      vehicle,
      specification: specification || null,
      branch: branch || null,
    };

    return res.json(vehicleDetail)
  } catch (err) {
    return res.json({message: "could not get the vehicles"});
  }
})

router.put('/vehicle/:id', async (req,res) => {
  try {
    const id = req.params.id;
    console.log("Request ID:", req.params);
    console.log("Received ID:", id); // Debug the received ID

    // gets all vehicles from the database
    const vehicle = await Vehicle.findByIdAndUpdate(id,req.body);

    console.log("Fetched Vehicle:", vehicle); // Debug the fetched vehicle


    if (!vehicle) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }

    // gets specifications and branches for all vehicles
    // Fetch the related specification and branch
    const specification = await VehicleSpecification.findOne({
      licensePlateNumber: vehicle.licensePlateNumber,
    });
    const branch = await VehicleAtBranch.findOne({
      licensePlateNumber: vehicle.licensePlateNumber,
    });

    // Build the response
    const vehicleDetail = {
      vehicle,
      specification: specification || null,
      branch: branch || null,
    };

    return res.json({updated: true,vehicleDetail})
  } catch (err) {
    return res.json({message: "could not get the vehicles"});
  }
})

export {router as VehicleRouter}