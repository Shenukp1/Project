import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css';




const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <span className="navbar-brand">Car Rental Company</span>
        </div>
        <div className="navbar-right">
            {/*
                Add pages you want to move to here on the navbar.
                follow the same structure 
            */}
          <Link to="/vehicle" className="navbar-link">Vehicle</Link>
          <Link to="/login" className="navbar-link">Login</Link>
        </div>
      </nav>
    );
  };
  
  export default Navbar;