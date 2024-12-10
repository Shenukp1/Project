import React from 'react'
import { useState } from 'react';
//import '../css/AddReservation.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const AddReservation = () => {

    // add all the usestates
    const [reservationNumber, setReservationNumber] = useState('');
    const [licenseNumber, setLicenseNumber] = useState('');
    const [pickupLocation, setPickupLocation] = useState('');
    const [dropoffLocation, setDropoffLocation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [status, setStatus] = useState('pending');
    const [totalCost, setTotalCost] = useState('');
    const [licensePlateNumber, setLicensePlateNumber] = useState('');
    

    // handle form submission 
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const reservationData = {
            reservationNumber,
            licenseNumber,
            pickupLocation,
            dropoffLocation,
            startDate,
            endDate,
            status,
            totalCost,
            licensePlateNumber,
        }
        console.log('Reservation Data:', reservationData);
    };

    


    return (
        <div className="add-reservation-page">
          <div className="add-reservation-container">
            <h2>Add Reservation</h2>
    
            <form onSubmit={handleSubmit}>
              <h3>Reservation Details</h3>
    
              <div className="form-group">
                <label htmlFor="reservationNumber">Reservation Number:</label>
                <input
                  type="text"
                  id="reservationNumber"
                  value={reservationNumber}
                  onChange={(e) => setReservationNumber(e.target.value)}
                  placeholder="Enter reservation number"
                  required
                />
              </div>
    
              <div className="form-group">
                <label htmlFor="licenseNumber">License Number:</label>
                <input
                  type="text"
                  id="licenseNumber"
                  value={licenseNumber}
                  onChange={(e) => setLicenseNumber(e.target.value)}
                  placeholder="Enter license number"
                  required
                />
              </div>
    
              <div className="form-group">
                <label htmlFor="licensePlateNumber">License Plate Number:</label>
                <input
                  type="text"
                  id="licensePlateNumber"
                  value={licensePlateNumber}
                  onChange={(e) => setLicensePlateNumber(e.target.value)}
                  placeholder="Enter license plate number (e.g., ABC-1234)"
                  required
                />
              </div>
    
              <div className="form-group">
                <label htmlFor="pickupLocation">Pickup Location:</label>
                <input
                  type="text"
                  id="pickupLocation"
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  placeholder="Enter pickup location"
                  required
                />
              </div>
    
              <div className="form-group">
                <label htmlFor="dropoffLocation">Dropoff Location:</label>
                <input
                  type="text"
                  id="dropoffLocation"
                  value={dropoffLocation}
                  onChange={(e) => setDropoffLocation(e.target.value)}
                  placeholder="Enter dropoff location"
                  required
                />
              </div>
    
              <div className="form-group">
                <label htmlFor="startDate">Start Date:</label>
                <input
                  type="date"
                  id="startDate"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                />
              </div>
    
              <div className="form-group">
                <label htmlFor="endDate">End Date:</label>
                <input
                  type="date"
                  id="endDate"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                />
              </div>
    
              <div className="form-group">
                <label htmlFor="status">Status:</label>
                <select
                  id="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  required
                >
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
    
              <div className="form-group">
                <label htmlFor="totalCost">Total Cost:</label>
                <input
                  type="number"
                  id="totalCost"
                  value={totalCost}
                  onChange={(e) => setTotalCost(e.target.value)}
                  placeholder="Enter total cost"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
    
              <button type="submit" className="btn-submit">
                Add Reservation
              </button>
            </form>
          </div>
        </div>
    );
}

export default AddReservation