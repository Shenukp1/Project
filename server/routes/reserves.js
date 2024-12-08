import express from 'express'

import {Reservation} from '../models/Reservation'

const router = express.Router();
router.post('/', async (req, res) => {
  try {
    const newReservation = await Reservation.create({
      licenseNumber: req.body.licenseNumber,
      licensePlateNumber: req.body.licensePlateNumber,
      pickupLocation: req.body.pickupLocation,
      dropoffLocation: req.body.dropoffLocation,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      // status and totalCost have defaults, so you can omit them if you wish
    });

    return res.status(201).json(newReservation);
  } catch (error) {
    console.error('Error creating reservation:', error);
    return res.status(400).json({ error: 'Unable to create reservation' });
  }
});

module.exports = router;