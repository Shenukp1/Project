import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css';




const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <Link to='/' className="navbar-brand">Car Rental Company</Link>
        </div>
        <div className="navbar-right">
            {/*
                Add pages you want to move to here on the navbar.
                follow the same structure
                1. addstudent -> reservation
            */}
          <Link to="/dashboard" className="navbar-link">Dashboard</Link>
          <Link to="/vehicle" className="navbar-link">Vehicle</Link>
          <Link to="/reservation" className="navbar-link">Reservation</Link>
          <Link to="/checkout" className="navbar-link">Checkout</Link>
          <Link to="/login" className="navbar-link">Login</Link>
        </div>
      </nav>
    );
  };
  
  export default Navbar;