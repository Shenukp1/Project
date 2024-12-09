import React, { useEffect } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext.jsx';

const Logout = () => {

    const { setUserRole } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:3001/auth/logout')
        .then(res =>{
            if(res.data.logout){
                setUserRole('');
                navigate('/')
                
            }
        }).catch(err => console.log(err))
    }, [])
}

export default Logout