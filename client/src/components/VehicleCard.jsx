import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useState, useContext, useEffect } from 'react';
import '../css/VehicleCard.css';

const VehicleCard = ({entry, index}) => {
    const { vehicle, specification, branch } = entry;
  
    return (
        
        <div className="vehicle-card-container" key={index}>
            <h2>Vehicle {index + 1}</h2>
            <div className="vehicle-section">
                <h3>Vehicle Information</h3>
                <p><strong>License Plate:</strong> {vehicle.licensePlateNumber}</p>
                <p><strong>Availability:</strong> {vehicle.availability ? 'Available' : 'Not Available'}</p>
                <p><strong>Number of Vehicles:</strong> {vehicle.numOfVehicles}</p>
                <p><strong>Licence Class:</strong> {vehicle.vehicleLicenceClass}</p>
            </div>

        {specification && (
            <div className="vehicle-section">
                <h3>Specifications</h3>
                <p><strong>Make:</strong> {specification.make}</p>
                <p><strong>Model:</strong> {specification.model}</p>
                <p><strong>Year:</strong> {specification.year}</p>
                <p><strong>Fuel Type:</strong> {specification.fuelType}</p>
                <p><strong>Mileage:</strong> {specification.mileage} km</p>
            </div>
        )}

        {branch && (
            <div className="vehicle-section">
            <h3>Branch Information</h3>
            <p><strong>Address:</strong> {branch.address}</p>
            </div>
        )}

            <div className="vehicle-action">
                <button><Link to={`/vehicle/${vehicle._id}`}>Edit</Link></button>
                <button>Delete</button>
            </div>
        
        </div>

    );
}

export default VehicleCard