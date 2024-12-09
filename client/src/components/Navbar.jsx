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
        <Link to="/viewCustomer" className="navbar-link">View Customer</Link>
      </>
    );
  } else if (userRole === 'customer') {
    navbarLinks = (
      <>
        <Link to="/customerDashboard" className="navbar-link">Customer Dashboard</Link>
        <Link to="/vehicle" className="navbar-link">View Vehicle</Link>
      </>
    );
  } else {
    navbarLinks = (
      <>
        <Link to="/viewVehicle" className="navbar-link">Vehicle</Link>
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