import React, { useEffect } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext.jsx';
import { useParams } from 'react-router-dom';

const VehicleDelete = () => {

    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        axios.delete(`http://localhost:3001/vehicle/vehicle/${id}`)
        .then(res =>{
            if(res.data.deleted){
                navigate('/vehicle')
                
            }
        }).catch(err => console.log(err))
    }, [])
}

export default VehicleDelete