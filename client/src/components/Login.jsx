import React from 'react'
import {useNavigate} from 'react-router-dom'
import '../css/Login.css';
import axios from 'axios'
import { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext.jsx';
const Login = () => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [role,setRole] = useState('admin');  // input credential will default login to customer and not admin
  const { setUserRole } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = () => {//logic to pass to the server side
    
    axios.post('http://localhost:3001/auth/login', { username, password, role }, {
      withCredentials: true,
    })
    .then(res => {if(res.data.login){
      setUserRole(res.data.role); // Update global user role

      if (res.data.role === 'admin') {
        navigate('/adminDashboard');
      } else if (res.data.role === 'customer') {
        navigate('/customerDashboard');
      }
    } 
    })
    .catch(err => console.log(err) )
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2> 
        <br />
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input id="username" type="text" placeholder='Enter Username'
            onChange={(e)=> setUsername(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" placeholder='Enter Password'
            onChange={(e)=> setPassword(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select name="role" id="role"
            onChange={(e)=> setRole(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="customer">Customer</option>
          </select>
        </div>
        <button className='btn-login'onClick={handleSubmit}>Login</button>
      </div>
    </div>
  )
}

export default Login;