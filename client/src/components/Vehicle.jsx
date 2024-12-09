import React from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext.jsx';
import '../css/Vehicle.css';

const Vehicle = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state


  useEffect(() => {
    axios.get('http://localhost:3001/vehicle/vehicles') // Replace with your actual backend route
    .then((res) => {
      setVehicles(res.data); // Store the fetched vehicles
      setLoading(false); // Set loading to false
      console.log(res.data); // Log response for debugging
    }).catch((err) => {
        console.error('Error fetching vehicles:', err);
        setError(err.response?.data?.message || 'Failed to fetch vehicles');
        setLoading(false);
    });
  }, []);

   // when data is not being fetched properly
  if (loading) {
    return <p>Loading vehicles...</p>;
  }

  // nothing there
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="vehicle-list-page">
      <h1>All Vehicles</h1>
      {vehicles.map((entry, index) => (
        <div key={index} className="vehicle-card">
          <h2>Vehicle {index + 1}</h2>
          <div className="vehicle-section">
            <h3>Vehicle Information</h3>
            <p><strong>License Plate:</strong> {entry.vehicle.licensePlateNumber}</p>
            <p><strong>Availability:</strong> {entry.vehicle.availability ? 'Available' : 'Not Available'}</p>
            <p><strong>Number of Vehicles:</strong> {entry.vehicle.numOfVehicles}</p>
            <p><strong>Licence Class:</strong> {entry.vehicle.vehicleLicenceClass}</p>
          </div>

          {entry.specification && (
            <div className="vehicle-section">
              <h3>Specifications</h3>
              <p><strong>Make:</strong> {entry.specification.make}</p>
              <p><strong>Model:</strong> {entry.specification.model}</p>
              <p><strong>Year:</strong> {entry.specification.year}</p>
              <p><strong>Fuel Type:</strong> {entry.specification.fuelType}</p>
              <p><strong>Mileage:</strong> {entry.specification.mileage} km</p>
            </div>
          )}

          {entry.branch && (
            <div className="vehicle-section">
              <h3>Branch Information</h3>
              <p><strong>Address:</strong> {entry.branch.address}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Vehicle