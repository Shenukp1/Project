import express from 'express'
import {ReservationFor} from '../models/Reservation_For.js'
import {Reservation} from '../models/Reservation.js'
import { Vehicle } from '../models/Vehicle.js';
const router = express.Router()

//============================== GET ==============================

//============================== POST ==============================
router.post('/addReservation', async (req,res) => { 
    try {
        console.log('Request body:', req.body);
        //grab all the data
        const {
            reservationNumber,
            licenseNumber,
            pickupLocation,
            dropoffLocation,
            startDate,
            endDate,
            status,
            totalCost,
            licensePlateNumber,
        } = req.body

        //check if the vehicle is in the system
        const existingVehicle = await Vehicle.findOne({ licensePlateNumber });
        if(existingVehicle === null){ 
            console.log("noooo")
            return res.status(409).json({ message: 'Vehicle does not exists' });
        }
        
        // check if the vehicle is avaliable

        // if vehicle does exist and is avaliable 
        const newReservation = new Reservation({
            reservationNumber,
            licenseNumber,
            pickupLocation,
            dropoffLocation,
            startDate,
            endDate,
            status,
            totalCost,
            licensePlateNumber,
        })
        console.log("Reservation: "+newReservation)

        await newReservation.save()
        return res.json({addedReservation: true, newReservation })
    } catch (err) {
        return res.json({message: "Reservation was not created first!"});
    }
})
//============================== PUT ==============================

//============================== DELETE ==============================


export {router as ReservationRouter}