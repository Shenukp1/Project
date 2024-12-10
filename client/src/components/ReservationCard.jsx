import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ReservationCard.css'; // Ensure you create corresponding CSS for styling

const ReservationCard = ({ entry, index }) => {
    const { reservation } = entry;

    return (
        <div className="reservation-card-container" key={index}>
            <h2>Reservation {index + 1}</h2>
            <div className="reservation-section">
                <h3>Reservation Information</h3>
                <p><strong>Reservation Number:</strong> {reservation.reservationNumber}</p>
                <p><strong>License Number:</strong> {reservation.licenseNumber}</p>
                <p><strong>Pickup Location:</strong> {reservation.pickupLocation}</p>
                <p><strong>Dropoff Location:</strong> {reservation.dropoffLocation}</p>
                <p><strong>Start Date:</strong> {new Date(reservation.startDate).toLocaleDateString()}</p>
                <p><strong>End Date:</strong> {new Date(reservation.endDate).toLocaleDateString()}</p>
                <p><strong>Status:</strong> {reservation.status.charAt(0).toUpperCase() + reservation.status.slice(1)}</p>
                <p><strong>Total Cost:</strong> ${reservation.totalCost.toFixed(2)}</p>
            </div>

            <div className="reservation-action">
                <button className="btn-edit">
                    <Link to={`/reservation/edit/${reservation._id}`}>Edit</Link>
                </button>
                <button className="btn-delete">
                    <Link to={`/reservation/delete/${reservation._id}`}>Delete</Link>
                </button>
            </div>
        </div>
    );
}

export default ReservationCard;