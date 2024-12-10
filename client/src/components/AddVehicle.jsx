import React from 'react'
import { useState } from 'react';
import '../css/AddVehicle.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
const AddVehicle = () => {
  // Vehicle
  const [licensePlateNumber, setLicensePlateNumber] = useState('');
  const [availability, setAvailability] = useState(true);
  const [numOfVehicles, setNumOfVehicles] = useState(1);
  const [vehicleLicenceClass, setVehicleLicenceClass] = useState('');
  
  // Vehicle Specification Fields
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [mileage, setMileage] = useState('');

  // Vehicle At Branch Fields
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const vehicleData = {
      licensePlateNumber,
      availability,
      numOfVehicles,
      vehicleLicenceClass,
    };

    console.log('Payload:', vehicleData);

    axios
      .post('http://localhost:3001/vehicle/addVehicle', vehicleData)
      .then((response) => {
        console.log('Response data:', response.data);
        console.log('Response created:', response.data.createdVehicle);
        if (response.data.createdVehicle) {
          console.log('Vehicle added successfully:', response.data);
  
          // adding the specification
          const specData = {
            licensePlateNumber,
            make,
            model,
            year,
            fuelType,
            mileage,
          };
          

          return axios.post('http://localhost:3001/vehicle/addSpecification', specData);
        }
      })
      .then((response) => {
        if (response.data.createdSpecification) {

          console.log('Specification added successfully:', response.data);
  
          // adding the branch
          const branchData = {
            address,
            licensePlateNumber,
          };
  
          return axios.post('http://localhost:3001/vehicle/addBranch', branchData);
        }
      })
      .then((response) => {
        if (response.data.createdBranch) {
          console.log('Branch added successfully:', response.data);
          alert('Vehicle, Specification, and Branch added successfully!');

        
          navigate('/vehicle')

          
        }
      })
      .catch((err) => {
        
        alert('An error occurred while processing your request.');
      });
  };

 
  return (
  <div className="add-vehicle-page">
    <div className="add-vehicle-container">
      <h2>Add a New Vehicle and Details</h2>

      <form onSubmit={handleSubmit}>
        <h3>Vehicle Information</h3>
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
          <label htmlFor="availability">Availability:</label>
          <select
            id="availability"
            value={availability}
            onChange={(e) => setAvailability(e.target.value === 'true')}
          >
            <option value="true">Available</option>
            <option value="false">Not Available</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="numOfVehicles">Number of Vehicles:</label>
          <input
            type="number"
            id="numOfVehicles"
            value={numOfVehicles}
            onChange={(e) => setNumOfVehicles(e.target.value)}
            min="1"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="vehicleLicenceClass">Vehicle Licence Class:</label>
          <input
            type="text"
            id="vehicleLicenceClass"
            value={vehicleLicenceClass}
            onChange={(e) => setVehicleLicenceClass(e.target.value)}
            placeholder="Enter class (e.g., Class 1, Class 2,..,Class 7)"
          />
        </div>
        <h3>Vehicle Specification</h3>
        <div className="form-group">
          <label htmlFor="make">Make:</label>
          <input
            type="text"
            id="make"
            value={make}
            onChange={(e) => setMake(e.target.value)}
            placeholder="Enter the vehicle make (e.g., Toyota)"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="model">Model:</label>
          <input
            type="text"
            id="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Enter the vehicle model (e.g., Corolla)"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="year">Year:</label>
          <input
            type="number"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="Enter the manufacturing year"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fuelType">Fuel Type:</label>
          <input
            type="text"
            id="fuelType"
            value={fuelType}
            onChange={(e) => setFuelType(e.target.value)}
            placeholder="Enter fuel type (e.g., Petrol, Diesel)"
          />
        </div>
        <div className="form-group">
          <label htmlFor="mileage">Mileage:</label>
          <input
            type="number"
            id="mileage"
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
            placeholder="Enter mileage (e.g., 5000)"
          />
        </div>
        <h3>Vehicle At Branch</h3>
        <div className="form-group">
          <label htmlFor="address">Branch Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter branch address"
            required
          />
        </div>
        <button type="submit" className="btn-submit">Add Vehicle</button>
      </form>
    </div>
  </div>
  );


};



export default AddVehicle