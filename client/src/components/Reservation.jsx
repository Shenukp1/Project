import React from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext.jsx';
//import '../css/Reservation.css';
import VehicleCard from './VehicleCard.jsx';
import ReservationCard from './ReservationCard.jsx';
const Reservation = () => {
    const [reservations, setReservations] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state
    const { username } = useContext(UserContext);

    useEffect(() => {
        console.log("name: "+username)
        axios.get('http://localhost:3001/reservation/reservations',{ params: { username } }) // backend route
        .then((res) => {
            console.log("Reservation: "+res.data)
            setReservations([res.data]); // Store the fetched vehicles
            setLoading(false); // Set loading to false
            
        }).catch((err) => {
            console.error('Error fetching vehicles:', err);
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

        console.log("Reservation: "+ reservations.data)
    
    return (
        <div className="reservation-list-page">
        <h1>Reservations</h1>
        {reservations.length > 0 ? (
            reservations.map((reservation, index) => (
                <ReservationCard
                    key={reservation._id} // Use unique identifier
                    entry={reservation}
                    index={index}
                />
            ))
        ) : (
            <p>No reservations found.</p>
        )}
    </div>
    );
}

export default Reservation