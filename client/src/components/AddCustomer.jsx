import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import '../css/AddCustomer.css';
const AddCustomer = () => {

  // Customer attributes
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [licenseNumber,setLicenseNumber] = useState('');
  const [InsuranceNumber,setInsuranceNumber] = useState('');
  const [age,setAge] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/customer/register', { username, password, licenseNumber,InsuranceNumber, age}, {
      withCredentials: true,
    })
    .then(res => { 
      console.log(res) 
    })
    .catch(err => console.log(err) )
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Add Customer</h2>
        <br />
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="licenseNumber">License Number:</label>
          <input
            id="licenseNumber"
            type="text"
            placeholder="Enter License Number (e.g., 1234567)"
            onChange={(e) => setLicenseNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="InsuranceNumber">Insurance Number:</label>
          <input
            id="InsuranceNumber"
            type="text"
            placeholder="Enter Insurance Number (e.g., 123456789)"
            onChange={(e) => setInsuranceNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            id="age"
            type="number"
            placeholder="Enter Age"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button className="btn-login" onClick={handleSubmit}>
          Register
        </button>
      </div>
    </div>
  );
}

export default AddCustomer