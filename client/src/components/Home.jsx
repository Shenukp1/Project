import React from 'react'
import axios from 'axios'
import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext.jsx';
const Home = () => {
  axios.defaults.withCredentials = true; // access cookies to remove it
  const { setUserRole } = useContext(UserContext);
  useEffect(() => {
    axios.get('http://localhost:3001/auth/verify')
    .then(res => {
      if (res.data.login) {
        setUserRole(res.data.role);
      } else {
        setUserRole('');
      }
    }).catch(err => console.log(err));
  }, []);

  return (
    <div>Home</div>
  )
}

export default Home