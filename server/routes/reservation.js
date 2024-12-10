import express from 'express'
import {ReservationFor} from '../models/Reservation_For.js'
import {Reservation} from '../models/Reservation.js'
const router = express.Router()


router.post('/addReservation', async (req,res) => { })



export {router as ReservationRouter}