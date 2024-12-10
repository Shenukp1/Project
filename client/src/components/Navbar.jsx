import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext.jsx';
import '../css/Navbar.css';

const Navbar = () => {
  const { userRole } = useContext(UserContext);

  let navbarLinks;

  if (userRole === 'admin') {
    navbarLinks = (
      <>
        <Link to="/adminDashboard" className="navbar-link">Admin Dashboard</Link>
        <Link to="/addVehicle" className="navbar-link">Add Vehicle</Link>
        <Link to="/vehicle" className="navbar-link">Vehicles</Link>
        <Link to="/addCustomer" className="navbar-link">Add Customer</Link>
        <Link to="/logout" className="navbar-link">Logout</Link>
      </>
    );
  } else if (userRole === 'customer') {
    navbarLinks = (
      <>
        <Link to="/customerDashboard" className="navbar-link">Customer Dashboard</Link>
        <Link to="/vehicle" className="navbar-link">View Vehicle</Link>
        <Link to="/reservation" className="navbar-link">Add Reservation</Link>
        <Link to="/logout" className="navbar-link">Logout</Link>
      </>
    );
  } else {
    {/*
      This is the main page link
      */}
    navbarLinks = (
      <>
      {/*
        when you click on Vehicles, it should go to a page where you can only view Vehicles that are avaliable
      */}
        <Link to="/vehicle" className="navbar-link">Vehicles</Link>
        <Link to="/login" className="navbar-link">Login</Link>
      </>
    );
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">Car Rental Company</Link>
      </div>
      <div className="navbar-right">
        {navbarLinks}
      </div>
    </nav>
  );
};

export default Navbar;