import React from 'react'
import { useState, useContext, useEffect } from 'react';
import '../css/AddVehicle.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
const VehicleEdit = () => {
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

    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        console.log("Frontend ID from useParams:", id);
        axios.get(`http://localhost:3001/vehicle/vehicle/${id}`)
        .then(res => { 

            const { vehicle, specification, branch } = res.data;
            console.log("Check: ",res) //degbug
            
            console.log("Check22: ",vehicle.licensePlateNumber)
            setLicensePlateNumber(vehicle.licensePlateNumber);
            setAvailability(vehicle.availability);
            setNumOfVehicles(vehicle.numOfVehicles);
            setVehicleLicenceClass(vehicle.vehicleLicenceClass);
            setMake(specification.make);
            setModel(specification.model);
            setYear(specification.year);
            setFuelType(specification.fuelType);
            setMileage(specification.mileage);
            setAddress(branch.address);

            console.log("Updated State:", {
                licensePlateNumber,
                availability,
                numOfVehicles,
                vehicleLicenceClass,
                make,
                model,
                year,
                fuelType,
                mileage,
                address,
            });
            
        })
        .catch(err => console.log(err) )
    
    
    }, [])
    

    const handleSubmit = (e) => {

        e.preventDefault();

        const vehicleData = {
            licensePlateNumber,
            availability,
            numOfVehicles,
            vehicleLicenceClass,
            make,
            model,
            year,
            fuelType,
            mileage,
            address
        };


        console.log('Payload:', vehicleData);


        axios.put(`http://localhost:3001/vehicle/vehicle/${id}`, vehicleData)
        .then((response) => {
            if(response.data.updated){
                navigate('/vehicle')
            }else{
                console.log(res)
            }

           
        })
        .catch((err) => {
            alert('An error occurred while processing your request.');
        });
    };

 
    return (
        
    <div className="add-vehicle-page">
        <div className="add-vehicle-container">
        <h2>Edit a Vehicle and Details</h2>

        <form onSubmit={handleSubmit}>
            <h3>Vehicle Information</h3>
            <div className="form-group">
            <label htmlFor="licensePlateNumber">License Plate Number:</label>
            <input
                type="text"
                id="licensePlateNumber"
                value={licensePlateNumber}
                onChange={(e) => setLicensePlateNumber(e.target.value)}
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
            <button type="submit" className="btn-submit">Update Vehicle</button>
        </form>
        </div>
    </div>
    );


};



export default VehicleEdit