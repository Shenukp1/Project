import React from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext.jsx';
import '../css/Vehicle.css';
import VehicleCard from './VehicleCard.jsx';

const Vehicle = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state


  useEffect(() => {
    axios.get('http://localhost:3001/vehicle/vehicles') // backend route
    .then((res) => {
      setVehicles(res.data); // Store the fetched vehicles
      setLoading(false); // Set loading to false
      
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
        <VehicleCard
          key={index}
          entry={entry}
          index={index}
        />
      ))}
    </div>
  );
}

export default Vehicle