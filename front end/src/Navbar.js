import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file for the component

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button type="button">Search</button>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;